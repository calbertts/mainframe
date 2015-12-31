import React from 'react';
import Radium from 'radium';

import $ from 'jquery';
import 'diagram-js/assets/diagram-js.css!';

import BpmnViewer from 'bpmn-js';
//import CustomModeler from 'bpmn-js/lib/Modeler';
import CustomModeler from 'modeler/index';
import extensionModule from 'modeler/logging/Logging';

//import './bpmn-js/assets/bpmn-font/css/bpmn.css!';
import BPMNDesignerStyles from './BPMNDesignerStyles';

@Radium
export default class BPMNDesigner extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedShape: false
    };
  }

  componentDidMount() {
    this.createDiagram();
    this._createInputElement();

    this.bpmnModeler.on('commandStack.changed', (ag, ag1) => {
      console.log(ag, ag1);

      this.saveSVG((err, svg) => {
        this.setEncoded($(this.refs.downloadSVGDiagram), 'diagram.svg', err ? null : svg);
      });

      this.saveDiagram((err, xml) => {
        this.setEncoded($(this.refs.downloadBPMNDiagram), 'diagram.bpmn', err ? null : xml);
      });
    });

    this.bpmnModeler.on('shape.added', (event) => {
      var element = event.element;
      var canvas = this.bpmnModeler.get('canvas');

      if(element.type === 'bpmn:Task')
        canvas.addMarker(element.id, 'highlight');
    });
  }

  _createInputElement() {
    this.fileInput = $('<input type="file" />').appendTo('#bpmnDesignerContainer').css({
      width: 1,
      height: 1,
      display: 'none',
      overflow: 'hidden'
    }).on('change', (e) => {
      //track('diagram', 'open-dialog');
      this.openFile(e.target.files[0], this.openDiagram.bind(this));
    });
  }

  render() {
    return (
      <div style={{height: '100%', width: '100%', position: 'relative'}} className="content" id="bpmnDesignerContainer">
        <div style={{height: '100%'}} className="canvas" id="js-canvas"></div>
        <div key="controls" style={[BPMNDesignerStyles.controls, this.state.selectedShape ? BPMNDesignerStyles.controlsTranslated : {}]}>
          <div>
            <ul key="keyboard" style={BPMNDesignerStyles.ioControlList}>
              <li key="fullscreen" style={[BPMNDesignerStyles.ioControl, BPMNDesignerStyles.ioTopControl]}>
                <button onTouchTap={this._onFullScreen.bind(this)} key="btnFullscreen" style={[BPMNDesignerStyles.ioButton]} title="Toggle Fullscreen"
                        jsaction="click:bio.toggleFullscreen">
                  <span className="icon-resize-full"> </span>
                </button>
              </li>
              <li style={[BPMNDesignerStyles.ioControl, BPMNDesignerStyles.ioBottomControl]}>
                <button key="btnKeyboard" style={[BPMNDesignerStyles.ioButton]} title="Toggle keyboard shortcuts overlay"
                        jsaction="click:bio.showKeyboard">
                  <span className="icon-keyboard"> </span>
                </button>
              </li>
            </ul>
          </div>

          <div style={{marginTop: '10px'}}>
            <ul key="one" style={[BPMNDesignerStyles.ioControlList]}>
              <li style={[BPMNDesignerStyles.ioControl, BPMNDesignerStyles.ioTopControl]}>
                <button onTouchTap={this._onZoomReset.bind(this)} key="button" style={[BPMNDesignerStyles.ioButton]} title="reset zoom">
                  <span className="icon-size-reset"></span>
                </button>
              </li>
              <li style={[BPMNDesignerStyles.ioControl, BPMNDesignerStyles.ioMiddleControl]}>
                <button onTouchTap={this._onZoomIn.bind(this)} key="two1" style={[BPMNDesignerStyles.ioButton]} title="zoom in" jsaction="click:bio.zoomIn">
                  <span className="icon-plus"></span>
                </button>
              </li>
              <li style={[BPMNDesignerStyles.ioControl, BPMNDesignerStyles.ioBottomControl]}>
                <button onTouchTap={this._onZoomOut.bind(this)} key="two2" style={[BPMNDesignerStyles.ioButton]} href title="zoom out" jsaction="click:bio.zoomOut">
                  <span className="icon-minus"></span>
                </button>
              </li>
            </ul>
          </div>

          <div style={{marginTop: '10px'}}>
            <ul key="one" style={[BPMNDesignerStyles.ioControlList]}>
              <li key="item" style={[BPMNDesignerStyles.ioControl, BPMNDesignerStyles.ioTopControl]}>
                <button onTouchTap={this._openDiagram.bind(this)} key="item_button" style={[BPMNDesignerStyles.ioButton]} title="open BPMN diagram from local file system" jsaction="click:bio.openLocal">
                  <span className="icon-open"></span>
                </button>
              </li>
              <li key="item2" style={[BPMNDesignerStyles.ioControl, BPMNDesignerStyles.ioMiddleControl]}>
                <button onTouchTap={this._onNewDiagram.bind(this)} key="item_button2" style={[BPMNDesignerStyles.ioButton]} title="create new BPMN diagram" jsaction="click:bio.createNew">
                  <span className="icon-plus-circled"></span>
                </button>
              </li>
              <li key="item3" style={[BPMNDesignerStyles.ioControl, BPMNDesignerStyles.ioMiddleControl]}>
                <a ref="downloadBPMNDiagram" key="item_button3" style={[BPMNDesignerStyles.ioButton]} target="_blank" href="#" title="download BPMN diagram" jswidget="downloadBPMN" data-track="diagram:download-bpmn">
                  <span className="icon-download"></span>
                </a>
              </li>
              <li key="item4" style={[BPMNDesignerStyles.ioControl, BPMNDesignerStyles.ioBottomControl]}>
                <a ref="downloadSVGDiagram" key="item_button4" style={[BPMNDesignerStyles.ioButton]} target="_blank" href="#" title="download as SVG image" jswidget="downloadSVG" data-track="diagram:download-svg">
                  <span className="icon-picture"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  createDiagram() {
    var container = $('#js-drop-zone');
    var canvas = $('#js-canvas');

    canvas.html('');

    this.bpmnModeler = new CustomModeler({
      container: canvas,
      keyboard: { bindTo: document },
      additionalModules: [ extensionModule(this._onSelectedShapes.bind(this)) ]
    });

    this.loadNewDiagram();

    window.bpmnModeler = this.bpmnModeler;
  }

  loadNewDiagram() {
    var xml = '<?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn"><bpmn:process id="Process_1w5pc8q"><bpmn:startEvent id="StartEvent_139s6i2"><bpmn:outgoing>SequenceFlow_0e3r5t7</bpmn:outgoing></bpmn:startEvent><bpmn:task id="Task_16smhr6" name="Script"><bpmn:incoming>SequenceFlow_0e3r5t7</bpmn:incoming><bpmn:outgoing>SequenceFlow_0duz9tz</bpmn:outgoing></bpmn:task><bpmn:sequenceFlow id="SequenceFlow_0e3r5t7" sourceRef="StartEvent_139s6i2" targetRef="Task_16smhr6" /><bpmn:endEvent id="EndEvent_0k7xzsl"><bpmn:incoming>SequenceFlow_0duz9tz</bpmn:incoming></bpmn:endEvent><bpmn:sequenceFlow id="SequenceFlow_0duz9tz" sourceRef="Task_16smhr6" targetRef="EndEvent_0k7xzsl" /></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1w5pc8q"><bpmndi:BPMNShape id="StartEvent_139s6i2_di" bpmnElement="StartEvent_139s6i2"><dc:Bounds x="450" y="132" width="36" height="36" /><bpmndi:BPMNLabel><dc:Bounds x="423" y="168" width="90" height="20" /></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape id="Task_16smhr6_di" bpmnElement="Task_16smhr6"><dc:Bounds x="602" y="110" width="100" height="80" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_0e3r5t7_di" bpmnElement="SequenceFlow_0e3r5t7"><di:waypoint xsi:type="dc:Point" x="486" y="150" /><di:waypoint xsi:type="dc:Point" x="602" y="150" /><bpmndi:BPMNLabel><dc:Bounds x="499" y="140" width="90" height="20" /></bpmndi:BPMNLabel></bpmndi:BPMNEdge><bpmndi:BPMNShape id="EndEvent_0k7xzsl_di" bpmnElement="EndEvent_0k7xzsl"><dc:Bounds x="784" y="132" width="36" height="36" /><bpmndi:BPMNLabel><dc:Bounds x="757" y="168" width="90" height="20" /></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_0duz9tz_di" bpmnElement="SequenceFlow_0duz9tz"><di:waypoint xsi:type="dc:Point" x="702" y="150" /><di:waypoint xsi:type="dc:Point" x="784" y="150" /><bpmndi:BPMNLabel><dc:Bounds x="698" y="140" width="90" height="20" /></bpmndi:BPMNLabel></bpmndi:BPMNEdge></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>';
    return this.bpmnModeler.importXML(xml, (err) => {
      if (err)
        console.log(err);

      var canvas = this.bpmnModeler.get('canvas');
      window.canvas = canvas;

      canvas.getAbsoluteBBox = function(element) {
        var vbox = this.viewbox();
        var bbox;
        if (element.waypoints) {
          var gfx = this.getGraphics(element);
          var transformBBox = gfx.getBBox(true);
          bbox = gfx.getBBox();
          bbox.x -= transformBBox.x;
          bbox.y -= transformBBox.y;
          bbox.width += 2 * transformBBox.x;
          bbox.height += 2 * transformBBox.y;
        } else {
          bbox = element;
        }
        var x = bbox.x * vbox.scale - vbox.x * vbox.scale + 8;
        var y = bbox.y * vbox.scale - vbox.y * vbox.scale + 8;
        var width = bbox.width * vbox.scale - 16;
        var height = bbox.height * vbox.scale - 16;
        return {
          x: x,
          y: y,
          width: width,
          height: height
        };
      };
    });
  }

  toggleFullScreen(element) {

    if (!document.fullscreenElement &&
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {

      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();

      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  _onFullScreen() {
    var elem = document.querySelector('html');
    this.toggleFullScreen(elem);
  }

  _onZoomReset() {
    this.bpmnModeler.diagram.get('zoomScroll').reset();
  }

  _onZoomIn() {
    this.bpmnModeler.diagram.get('zoomScroll').stepZoom(1);
  }

  _onZoomOut() {
    this.bpmnModeler.diagram.get('zoomScroll').stepZoom(-1);
  }

  _onNewDiagram() {
    this.loadNewDiagram();
  }

  openFile(file, callback) {

    this._createInputElement();

    // check file api availability
    if (!window.FileReader) {
      return window.alert(
        'Looks like you use an older browser that does not support drag and drop. ' +
        'Try using a modern browser such as Chrome, Firefox or Internet Explorer > 10.');
    }

    // no file chosen
    if (!file) {
      return;
    }

    //setStatus('loading');

    var reader = new FileReader();

    reader.onload = function(e) {

      var xml = e.target.result;

      callback(xml);
    };

    reader.readAsText(file);
  }

  openDiagram(xml) {

    this.bpmnModeler.importXML(xml, (err, warnings) => {

      if (err) {
        setError(err);
        //track('diagram', 'open', 'error');
      } else {

        // async scale to fit-viewport (prevents flickering)
        setTimeout(() => {
          this.bpmnModeler.get('canvas').zoom('fit-viewport');
          //setStatus('shown');
        }, 0);

        //track('diagram', 'open', 'success');
        //setStatus('loaded');
      }

      //showWarnings(warnings);
    });
  }

  _openDiagram() {
    $(this.fileInput).trigger('click');
  }

  _onSelectedShapes(newSelection) {
    this.setState({
      selectedShape: newSelection.length > 0
    });

    this.props.onSelectedShapes(newSelection);
  }

  saveDiagram(done) {
    this.bpmnModeler.saveXML({ format: true }, function(err, xml) {
      done(err, xml);
    });
  }

  setEncoded(link, name, data) {
    var encodedData = encodeURIComponent(data);

    if (data) {
      link.attr({
        'href': 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData,
        'download': name
      }).removeClass('inactive');
    } else {
      link.addClass('inactive');
    }
  }

  saveSVG(done) {
    this.bpmnModeler.saveSVG(done);
  }
}