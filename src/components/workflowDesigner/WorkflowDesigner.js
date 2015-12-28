import React from 'react';
import Radium from 'radium';

import BPMNDesigner from './BPMNDesigner/BPMNDesigner';
import PanelProperties from './propertiesPanel/PropertiesPanel';


@Radium
export default class WorkflowDesigner extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      workflowPropertiesOpen: false,
      shapes: []
    }
  }

  render() {
    return(
      <div id="workflowDesignerComponent" style={[this.props.style, {width: '100%'}]}>
        <BPMNDesigner key="bpmnDesigner" onSelectedShapes={this._onSelectedShapes.bind(this)} />
        <PanelProperties ref="workflowProperties" open={this.state.workflowPropertiesOpen} shapes={this.state.shapes} />
      </div>
    )
  }

  _onSelectedShapes(shapes) {
    console.log(shapes);

    var open = shapes.length > 0;

    this.setState({
      workflowPropertiesOpen: open,
      shapes: shapes
    });
  }
}