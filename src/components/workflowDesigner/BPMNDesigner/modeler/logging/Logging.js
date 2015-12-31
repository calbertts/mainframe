var onSelectedShapes;

function InteractionLogger(eventBus, modeling) {
  /*eventBus.on('shape.added', (element) => {
    console.log('shape.added', element);
  });*/

  eventBus.on('selection.changed', function(event) {
    var newSelection = event.newSelection;

    onSelectedShapes(newSelection);

    if(newSelection.length === 1) {
      var shape = newSelection[0];
      var type = shape.type;

      if(type === 'bpmn:CallActivity') {
        //console.log(modeling);

        modeling.updateProperties(shape, {
          calledElement: 'myOwnValue'
        })
      }
    }
  })
}

var extensionModule = {
  __init__: [ 'interactionLogger' ],
  interactionLogger: [ 'type', InteractionLogger ]
};

module.exports = function(selectedShapesEvent) {
  onSelectedShapes = selectedShapesEvent;
  return extensionModule;
};

InteractionLogger.$inject = [ 'eventBus', 'modeling' ];