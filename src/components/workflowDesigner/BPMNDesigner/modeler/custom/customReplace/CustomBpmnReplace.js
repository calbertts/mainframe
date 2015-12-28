/* */ 
//(function(process) {
  'use strict';
  var forEach = require('lodash/collection/forEach'),
      filter = require('lodash/collection/filter'),
      pick = require('lodash/object/pick'),
      assign = require('lodash/object/assign');
  var REPLACE_OPTIONS = require('./ReplaceOptions');
  var startEventReplace = REPLACE_OPTIONS.START_EVENT,
      intermediateEventReplace = REPLACE_OPTIONS.INTERMEDIATE_EVENT,
      endEventReplace = REPLACE_OPTIONS.END_EVENT,
      gatewayReplace = REPLACE_OPTIONS.GATEWAY,
      taskReplace = REPLACE_OPTIONS.TASK,
      subProcessExpandedReplace = REPLACE_OPTIONS.SUBPROCESS_EXPANDED,
      transactionReplace = REPLACE_OPTIONS.TRANSACTION,
      eventSubProcessReplace = REPLACE_OPTIONS.EVENT_SUB_PROCESS,
      boundaryEventReplace = REPLACE_OPTIONS.BOUNDARY_EVENT,
      eventSubProcessStartEventReplace = REPLACE_OPTIONS.EVENT_SUB_PROCESS_START_EVENT,
      sequenceFlowReplace = REPLACE_OPTIONS.SEQUENCE_FLOW;
  var is = require('bpmn-js/lib/util/ModelUtil').is,
      getBusinessObject = require('bpmn-js/lib/util/ModelUtil').getBusinessObject,
      isExpanded = require('bpmn-js/lib/util/DiUtil').isExpanded,
      isEventSubProcess = require('bpmn-js/lib/util/DiUtil').isEventSubProcess;
  var CUSTOM_PROPERTIES = ['cancelActivity', 'instantiate', 'eventGatewayType', 'triggeredByEvent', 'isInterrupting'];
  function CustomBpmnReplace(bpmnFactory, moddle, popupMenu, replace, selection, modeling, eventBus) {
    var self = this,
        currentElement;
    function replaceElement(element, target, hints) {
      hints = hints || {};
      var type = target.type,
          oldBusinessObject = element.businessObject,
          businessObject = bpmnFactory.create(type);
      var newElement = {
        type: type,
        businessObject: businessObject
      };
      if (target.eventDefinition) {
        var eventDefinitions = businessObject.get('eventDefinitions'),
            eventDefinition = moddle.create(target.eventDefinition);
        eventDefinition.$parent = businessObject;
        eventDefinitions.push(eventDefinition);
      }
      assign(businessObject, pick(target, CUSTOM_PROPERTIES));
      if (is(oldBusinessObject, 'bpmn:Activity')) {
        newElement.width = element.width;
        newElement.height = element.height;
      }
      if (is(oldBusinessObject, 'bpmn:SubProcess')) {
        newElement.isExpanded = isExpanded(oldBusinessObject);
      }
      businessObject.name = oldBusinessObject.name;
      if (!isEventSubProcess(businessObject)) {
        businessObject.loopCharacteristics = oldBusinessObject.loopCharacteristics;
      }
      if ((is(oldBusinessObject, 'bpmn:ExclusiveGateway') || is(oldBusinessObject, 'bpmn:InclusiveGateway')) && (is(businessObject, 'bpmn:ExclusiveGateway') || is(businessObject, 'bpmn:InclusiveGateway'))) {
        businessObject.default = oldBusinessObject.default;
      }
      newElement = replace.replaceElement(element, newElement);
      if (hints.select !== false) {
        selection.select(newElement);
      }
      return newElement;
    }
    function toggleLoopEntry(event, entry) {
      var loopEntries = self.getLoopEntries(currentElement);
      var loopCharacteristics;
      if (entry.active) {
        loopCharacteristics = undefined;
      } else {
        forEach(loopEntries, function(action) {
          var options = action.options;
          if (entry.id === action.id) {
            loopCharacteristics = moddle.create(options.loopCharacteristics);
            if (options.isSequential) {
              loopCharacteristics.isSequential = options.isSequential;
            }
          }
        });
      }
      modeling.updateProperties(currentElement, {loopCharacteristics: loopCharacteristics});
    }
    function getLoopEntries(element) {
      currentElement = element;
      var businessObject = getBusinessObject(element),
          loopCharacteristics = businessObject.loopCharacteristics;
      var isSequential,
          isLoop,
          isParallel;
      if (loopCharacteristics) {
        isSequential = loopCharacteristics.isSequential;
        isLoop = loopCharacteristics.isSequential === undefined;
        isParallel = loopCharacteristics.isSequential !== undefined && !loopCharacteristics.isSequential;
      }
      var loopEntries = [{
        id: 'toggle-parallel-mi',
        className: 'bpmn-icon-parallel-mi-marker',
        title: 'Parallel Multi Instance',
        active: isParallel,
        action: toggleLoopEntry,
        options: {
          loopCharacteristics: 'bpmn:MultiInstanceLoopCharacteristics',
          isSequential: false
        }
      }, {
        id: 'toggle-sequential-mi',
        className: 'bpmn-icon-sequential-mi-marker',
        title: 'Sequential Multi Instance',
        active: isSequential,
        action: toggleLoopEntry,
        options: {
          loopCharacteristics: 'bpmn:MultiInstanceLoopCharacteristics',
          isSequential: true
        }
      }, {
        id: 'toggle-loop',
        className: 'bpmn-icon-loop-marker',
        title: 'Loop',
        active: isLoop,
        action: toggleLoopEntry,
        options: {loopCharacteristics: 'bpmn:StandardLoopCharacteristics'}
      }];
      return loopEntries;
    }
    function getAdHocEntry(element) {
      var businessObject = getBusinessObject(element);
      var isAdHoc = is(businessObject, 'bpmn:AdHocSubProcess');
      var adHocEntry = {
        id: 'toggle-adhoc',
        className: 'bpmn-icon-ad-hoc-marker',
        title: 'Ad-hoc',
        active: isAdHoc,
        action: function(event, entry) {
          if (isAdHoc) {
            return replaceElement(element, {type: 'bpmn:SubProcess'});
          } else {
            return replaceElement(element, {type: 'bpmn:AdHocSubProcess'});
          }
        }
      };
      return adHocEntry;
    }
    this.getReplaceOptions = function(element) {
      var menuEntries = [];
      var businessObject = element.businessObject;
      if (is(businessObject, 'bpmn:StartEvent') && !isEventSubProcess(businessObject.$parent)) {
        addEntries(startEventReplace, filterEvents);
      } else if (is(businessObject, 'bpmn:StartEvent') && isEventSubProcess(businessObject.$parent)) {
        addEntries(eventSubProcessStartEventReplace, filterEvents);
      } else if (is(businessObject, 'bpmn:IntermediateCatchEvent') || is(businessObject, 'bpmn:IntermediateThrowEvent')) {
        addEntries(intermediateEventReplace, filterEvents);
      } else if (is(businessObject, 'bpmn:EndEvent')) {
        addEntries(endEventReplace, filterEvents);
      } else if (is(businessObject, 'bpmn:Gateway')) {
        addEntries(gatewayReplace, function(entry) {
          return entry.target.type !== businessObject.$type;
        });
      } else if (is(businessObject, 'bpmn:Transaction')) {
        addEntries(transactionReplace);
      } else if (isEventSubProcess(businessObject) && isExpanded(businessObject)) {
        addEntries(eventSubProcessReplace);
      } else if (is(businessObject, 'bpmn:SubProcess') && isExpanded(businessObject)) {
        addEntries(subProcessExpandedReplace);
      } else if (is(businessObject, 'bpmn:AdHocSubProcess') && !isExpanded(businessObject)) {
        addEntries(taskReplace, function(entry) {
          return entry.target.type !== 'bpmn:SubProcess';
        });
      } else if (is(businessObject, 'bpmn:BoundaryEvent')) {
        addEntries(boundaryEventReplace, filterEvents);
      } else if (is(businessObject, 'bpmn:SequenceFlow')) {
        addSequenceFlowEntries(sequenceFlowReplace);
      } else if (is(businessObject, 'bpmn:FlowNode')) {
        addEntries(taskReplace, function(entry) {
          return entry.target.type !== businessObject.$type;
        });
      }
      function addSequenceFlowEntries(entries) {
        forEach(entries, function(entry) {
          switch (entry.actionName) {
            case 'replace-with-default-flow':
              if (businessObject.sourceRef.default !== businessObject && (is(businessObject.sourceRef, 'bpmn:ExclusiveGateway') || is(businessObject.sourceRef, 'bpmn:InclusiveGateway'))) {
                menuEntries.push(addMenuEntry(entry, function() {
                  modeling.updateProperties(element.source, {default: businessObject});
                }));
              }
              break;
            case 'replace-with-conditional-flow':
              if (!businessObject.conditionExpression && is(businessObject.sourceRef, 'bpmn:Activity')) {
                menuEntries.push(addMenuEntry(entry, function() {
                  var conditionExpression = moddle.create('bpmn:FormalExpression', {body: ''});
                  modeling.updateProperties(element, {conditionExpression: conditionExpression});
                }));
              }
              break;
            default:
              if (is(businessObject.sourceRef, 'bpmn:Activity') && businessObject.conditionExpression) {
                return menuEntries.push(addMenuEntry(entry, function() {
                  modeling.updateProperties(element, {conditionExpression: undefined});
                }));
              }
              if ((is(businessObject.sourceRef, 'bpmn:ExclusiveGateway') || is(businessObject.sourceRef, 'bpmn:InclusiveGateway')) && businessObject.sourceRef.default === businessObject) {
                return menuEntries.push(addMenuEntry(entry, function() {
                  modeling.updateProperties(element.source, {default: undefined});
                }));
              }
          }
        });
      }
      function filterEvents(entry) {
        var target = entry.target;
        var eventDefinition = businessObject.eventDefinitions && businessObject.eventDefinitions[0].$type;
        var isEventDefinitionEqual = target.eventDefinition == eventDefinition,
            isEventTypeEqual = businessObject.$type == target.type;
        if (is(businessObject, 'bpmn:BoundaryEvent')) {
          if (target.eventDefinition == 'bpmn:CancelEventDefinition' && !is(businessObject.attachedToRef, 'bpmn:Transaction')) {
            return false;
          }
          var cancelActivity = target.cancelActivity !== false;
          var isCancelActivityEqual = businessObject.cancelActivity == cancelActivity;
          return !(isEventDefinitionEqual && isEventTypeEqual && isCancelActivityEqual);
        }
        if (is(businessObject, 'bpmn:StartEvent') && isEventSubProcess(businessObject.$parent)) {
          var isInterrupting = target.isInterrupting !== false;
          var isInterruptingEqual = businessObject.isInterrupting == isInterrupting;
          return !(isEventDefinitionEqual && isEventDefinitionEqual && isInterruptingEqual);
        }
        if (is(businessObject, 'bpmn:EndEvent') && target.eventDefinition == 'bpmn:CancelEventDefinition' && !is(businessObject.$parent, 'bpmn:Transaction')) {
          return false;
        }
        return (!isEventDefinitionEqual && isEventTypeEqual) || !isEventTypeEqual;
      }
      function addEntries(entries, filterFun) {
        var filteredEntries = filter(entries, filterFun);
        forEach(filteredEntries, function(definition) {
          var entry = addMenuEntry(definition);
          menuEntries.push(entry);
        });
      }
      function addMenuEntry(definition, action) {
        var menuEntry = {
          label: definition.label,
          className: definition.className,
          id: definition.actionName,
          action: action
        };
        if (!menuEntry.action) {
          menuEntry.action = function() {
            return replaceElement(element, definition.target);
          };
        }
        return menuEntry;
      }
      return menuEntries;
    };
    this.openChooser = function(position, element) {
      var entries = this.getReplaceOptions(element),
          headerEntries = [];
      /*if (is(element, 'bpmn:Activity') && !isEventSubProcess(element)) {
        headerEntries = headerEntries.concat(this.getLoopEntries(element));
      }
      if (is(element, 'bpmn:SubProcess') && !is(element, 'bpmn:Transaction') && !isEventSubProcess(element)) {
        headerEntries.push(this.getAdHocEntry(element));
      }*/
      popupMenu.open({
        className: 'replace-menu',
        element: element,
        position: position,
        headerEntries: null,
        entries: entries
      });
    };
    this.getLoopEntries = getLoopEntries;
    this.getAdHocEntry = getAdHocEntry;
    this.replaceElement = replaceElement;
  }
  CustomBpmnReplace.$inject = ['bpmnFactory', 'moddle', 'popupMenu', 'replace', 'selection', 'modeling', 'eventBus'];
  module.exports = CustomBpmnReplace;
//})(require('process'));
