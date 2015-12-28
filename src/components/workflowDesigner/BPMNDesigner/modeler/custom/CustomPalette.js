/* */
'use strict';

var assign = require('lodash/object/assign');

/**
 * A palette that allows you to create BPMN _and_ custom elements.
 */
function PaletteProvider(palette, create, elementFactory, spaceTool, lassoTool) {

    this._create = create;
    this._elementFactory = elementFactory;
    this._spaceTool = spaceTool;
    this._lassoTool = lassoTool;

    palette.registerProvider(this);
}

module.exports = PaletteProvider;

PaletteProvider.$inject = [ 'palette', 'create', 'elementFactory', 'spaceTool', 'lassoTool' ];


PaletteProvider.prototype.getPaletteEntries = function(element) {

    var actions  = {},
        create = this._create,
        elementFactory = this._elementFactory,
        spaceTool = this._spaceTool,
        lassoTool = this._lassoTool;


    function createAction(type, group, className, title, options) {

        function createListener(event) {
            var shape = elementFactory.createShape(assign({ type: type }, options));

            if (options) {
                shape.businessObject.di.isExpanded = options.isExpanded;
            }

            create.start(event, shape);
        }

        var shortType = type.replace(/^bpmn\:/, '');

        return {
            group: group,
            className: className,
            title: title || 'Create ' + shortType,
            action: {
                dragstart: createListener,
                click: createListener
            }
        };
    }

    assign(actions, {
        'lasso-tool': {
            group: 'tools',
            className: 'bpmn-icon-lasso-tool',
            title: 'Activate the lasso tool',
            action: {
                click: function(event) {
                    lassoTool.activateSelection(event);
                }
            }
        },
        'space-tool': {
            group: 'tools',
            className: 'bpmn-icon-space-tool',
            title: 'Activate the create/remove space tool',
            action: {
                click: function(event) {
                    spaceTool.activateSelection(event);
                }
            }
        },
        'tool-separator': {
            group: 'tools',
            separator: true
        },
        'create.start-event': createAction(
            'bpmn:StartEvent', 'event', 'bpmn-icon-start-event-none'
        ),
        'create.end-event': createAction(
            'bpmn:EndEvent', 'event', 'bpmn-icon-end-event-none'
        ),
        'create.timer-start-event': createAction(
            'bpmn:StartEvent', 'event', 'bpmn-icon-start-event-timer', "Time Start Event", {_eventDefinitionType: 'bpmn:TimerEventDefinition'}
        ),
        'create.error-end-event': createAction(
            'bpmn:EndEvent', 'event', 'bpmn-icon-end-event-error', "Error End Event", {_eventDefinitionType: 'bpmn:ErrorEventDefinition'}
        ),
        'gateways-separator': {
            group: 'gateways',
            separator: true
        },
        /*'create.inclusive-gateway': createAction(
            'bpmn:InclusiveGateway', 'gateway', 'bpmn-icon-gateway-or'
        ),*/
        'create.exclusive-gateway': createAction(
            'bpmn:ExclusiveGateway', 'gateway', 'bpmn-icon-gateway-xor'
        ),
        'create.parallel-gateway': createAction(
            'bpmn:ParallelGateway', 'gateway', 'bpmn-icon-gateway-parallel'
        ),
        'create.task': createAction(
            'bpmn:Task', 'activity', 'bpmn-icon-task'
        ),
        'create.call-activity': createAction(
          'bpmn:CallActivity', 'activity', 'bpmn-icon-call-activity', 'Call Activity', {
            moddleAttrs: {
              calledElement: 'Task_16smhr6',
              'ssi:droppable': 'true'
            }
          }
        ),


      /*
       moddleAttrs: {
       calledElement: 'Investigation-800',
       'ssi:droppable': 'true'
       }
       */

        'download-xml': {
          group: 'tools',
          className: 'bpmn-icon-lasso-tool',
          title: 'Activate the lasso tool',
          action: {
            click: function(event) {
              function saveDiagram(done) {

                window.bpmnModeler.saveXML({ format: true }, function(err, xml) {
                  done(err, xml);
                });
              }

              //lassoTool.activateSelection(event);
              function setEncoded(link, name, data) {
                var encodedData = encodeURIComponent(data);

                if (data) {
                  link.addClass('active').attr({
                    'href': 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData,
                    'download': name
                  });
                } else {
                  link.removeClass('active');
                }
              }

              saveDiagram(function(err, xml) {
                var downloadLink = $('a[title="Powered by bpmn.io"]');
                setEncoded(downloadLink, 'diagram.bpmn', err ? null : xml);
              });
            }
          }
        }
    });

    return actions;
};