/* */
'use strict';

var assign = require('lodash/object/assign');
var isAny = require('bpmn-js/lib/features/modeling/util/ModelingUtil').isAny;
var forEach = require('lodash/collection/forEach');
var is = require('bpmn-js/lib/util/ModelUtil').is;
var getChildLanes = require('bpmn-js/lib/features/modeling/util/LaneUtil').getChildLanes;
var isEventSubProcess = require('bpmn-js/lib/util/DiUtil').isEventSubProcess;

function CustomContextPadProvider(contextPad, modeling, elementFactory, connect, create, bpmnReplace, canvas) {
  contextPad.registerProvider(this);

  this._contextPad = contextPad;
  this._modeling = modeling;
  this._elementFactory = elementFactory;
  this._connect = connect;
  this._create = create;
  this._bpmnReplace = bpmnReplace;
  this._canvas = canvas;

  this.getContextPadEntries = function(element) {
    console.log("OK");

    var contextPad = this._contextPad,
      modeling = this._modeling,
      elementFactory = this._elementFactory,
      connect = this._connect,
      create = this._create,
      bpmnReplace = this._bpmnReplace,
      canvas = this._canvas;
    var actions = {};
    if (element.type === 'label') {
      return actions;
    }
    var businessObject = element.businessObject;
    function startConnect(event, element, autoActivate) {
      connect.start(event, element, autoActivate);
    }
    function removeElement(e) {
      modeling.removeElements([element]);
    }
    function getReplaceMenuPosition(element) {
      var Y_OFFSET = 5;
      var diagramContainer = canvas.getContainer(),
        pad = contextPad.getPad(element).html;
      var diagramRect = diagramContainer.getBoundingClientRect(),
        padRect = pad.getBoundingClientRect();
      var top = padRect.top - diagramRect.top;
      var left = padRect.left - diagramRect.left;
      var pos = {
        x: left,
        y: top + padRect.height + Y_OFFSET
      };
      return pos;
    }
    function appendAction(type, className, options) {
      function appendListener(event, element) {
        var shape = elementFactory.createShape(assign({type: type}, options));
        create.start(event, shape, element);
      }
      var shortType = type.replace(/^bpmn\:/, '');
      return {
        group: 'model',
        className: className,
        title: 'Append ' + shortType,
        action: {
          dragstart: appendListener,
          click: appendListener
        }
      };
    }
    function splitLaneHandler(count) {
      return function(event, element) {
        modeling.splitLane(element, count);
        contextPad.open(element, true);
      };
    }
    if (isAny(businessObject, ['bpmn:Lane', 'bpmn:Participant'])) {
      var childLanes = getChildLanes(element);
      assign(actions, {'lane-insert-above': {
        group: 'lane-insert-above',
        className: 'bpmn-icon-lane-insert-above',
        title: 'Add Lane above',
        action: {click: function(event, element) {
          modeling.addLane(element, 'top');
        }}
      }});
      if (childLanes.length < 2) {
        if (element.height >= 120) {
          assign(actions, {'lane-divide-two': {
            group: 'lane-divide',
            className: 'bpmn-icon-lane-divide-two',
            title: 'Divide into two Lanes',
            action: {click: splitLaneHandler(2)}
          }});
        }
        if (element.height >= 180) {
          assign(actions, {'lane-divide-three': {
            group: 'lane-divide',
            className: 'bpmn-icon-lane-divide-three',
            title: 'Divide into three Lanes',
            action: {click: splitLaneHandler(3)}
          }});
        }
      }
      assign(actions, {'lane-insert-below': {
        group: 'lane-insert-below',
        className: 'bpmn-icon-lane-insert-below',
        title: 'Add Lane below',
        action: {click: function(event, element) {
          modeling.addLane(element, 'bottom');
        }}
      }});
    }
    if (is(businessObject, 'bpmn:FlowNode')) {
      if (!is(businessObject, 'bpmn:EndEvent') && !is(businessObject, 'bpmn:EventBasedGateway') && !isEventType(businessObject, 'bpmn:IntermediateThrowEvent', 'bpmn:LinkEventDefinition') && !isEventSubProcess(businessObject)) {
        assign(actions, {
          'append.end-event': appendAction('bpmn:EndEvent', 'bpmn-icon-end-event-none'),
          'append.gateway': appendAction('bpmn:ExclusiveGateway', 'bpmn-icon-gateway-xor'),
          'append.append-task': appendAction('bpmn:Task', 'bpmn-icon-task'),
          'append.intermediate-event': appendAction('bpmn:IntermediateThrowEvent', 'bpmn-icon-intermediate-event-none')
        });
      }
      if (is(businessObject, 'bpmn:EventBasedGateway')) {
        assign(actions, {
          'append.receive-task': appendAction('bpmn:ReceiveTask', 'bpmn-icon-receive-task'),
          'append.message-intermediate-event': appendAction('bpmn:IntermediateCatchEvent', 'bpmn-icon-intermediate-event-catch-message', {_eventDefinitionType: 'bpmn:MessageEventDefinition'}),
          'append.timer-intermediate-event': appendAction('bpmn:IntermediateCatchEvent', 'bpmn-icon-intermediate-event-catch-timer', {_eventDefinitionType: 'bpmn:TimerEventDefinition'}),
          'append.condtion-intermediate-event': appendAction('bpmn:IntermediateCatchEvent', 'bpmn-icon-intermediate-event-catch-condition', {_eventDefinitionType: 'bpmn:ConditionalEventDefinition'}),
          'append.signal-intermediate-event': appendAction('bpmn:IntermediateCatchEvent', 'bpmn-icon-intermediate-event-catch-signal', {_eventDefinitionType: 'bpmn:SignalEventDefinition'})
        });
      }
    }
    var replaceOptions = bpmnReplace.getReplaceOptions(element);
    if (replaceOptions.length) {
      assign(actions, {'replace': {
        group: 'edit',
        className: 'bpmn-icon-screw-wrench',
        title: 'Change type',
        action: {click: function(event, element) {
          bpmnReplace.openChooser(getReplaceMenuPosition(element), element);
        }}
      }});
    }
    if (isAny(businessObject, ['bpmn:FlowNode', 'bpmn:InteractionNode'])) {
      assign(actions, {
        'append.text-annotation': appendAction('bpmn:TextAnnotation', 'bpmn-icon-text-annotation'),
        'connect': {
          group: 'connect',
          className: 'bpmn-icon-connection-multi',
          title: 'Connect using Sequence/MessageFlow',
          action: {
            click: startConnect,
            dragstart: startConnect
          }
        }
      });
    }
    if (is(businessObject, 'bpmn:DataObjectReference')) {
      assign(actions, {'connect': {
        group: 'connect',
        className: 'bpmn-icon-connection-multi',
        title: 'Connect using DataInputAssociation',
        action: {
          click: startConnect,
          dragstart: startConnect
        }
      }});
    }
    assign(actions, {'delete': {
      group: 'edit',
      className: 'bpmn-icon-trash',
      title: 'Remove',
      action: {
        click: removeElement,
        dragstart: removeElement
      }
    }});
    return actions;
  };
}
function isEventType(eventBo, type, definition) {
  var isType = eventBo.$instanceOf(type);
  var isDefinition = false;
  var definitions = eventBo.eventDefinitions || [];
  forEach(definitions, function(def) {
    if (def.$type === definition) {
      isDefinition = true;
    }
  });
  return isType && isDefinition;
}

module.exports = CustomContextPadProvider;

CustomContextPadProvider.$inject = ['contextPad', 'modeling', 'elementFactory', 'connect', 'create', 'customBpmnReplace', 'canvas'];