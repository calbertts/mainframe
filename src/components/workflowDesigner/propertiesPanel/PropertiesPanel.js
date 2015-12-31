import React from 'react';
import Radium from 'radium';

import {
  Dialog,
  Card,
  CardActions,
  CardExpandable,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle,
  Avatar,
  FlatButton,
  LeftNav
} from 'material-ui';

import ace from "ace";


export default class PropertiesPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dialogScriptTitle: 'Editing Script',
      showEditScriptDialog: false
    };
  }

  componentDidUpdate() {
    if(this.props.shapes.length > 0) {
      var editor = ace.edit("aceEditor");

      ace.config.set("basePath", "/jspm_packages/github/ajaxorg/ace-builds@1.2.2/");

      editor.setTheme("ace/theme/xcode");
      editor.getSession().setMode("ace/mode/groovy");
    }
  }

  render() {
    var itemExpanded = false;

    let standardActions = [
      { text: 'No', onTouchTap: () => {this.setState({showEditScriptDialog: false})} },
      { text: 'Yes', onTouchTap: () => {this.setState({showEditScriptDialog: false})} }
    ];

    let style = {
      zIndex: '1',
      paddingTop: '70px',
      opacity: '.92',
      width: '330px',
      transform: 'translate3d(' + ((this.props.open) ? '0' : '330px') + ', 0, 0)'
    };

    return (
      <div>
        <LeftNav open={this.props.open}
                 openRight={true}
                 docked={true}
                 style={style}>
          {
            this.props.shapes.map((item, index) => {
              itemExpanded = index === this.props.shapes.length - 1;

              //console.log(index, this.props.shapes.length - 1);

              return (
                <Card key={index} initiallyExpanded={itemExpanded} style={{height: '100%'}}>
                  <CardHeader
                    title={item.businessObject.name || item.businessObject.id}
                    subtitle={item.type.replace('bpmn:', '', 'g')}
                    avatar={<Avatar style={{color:'red'}}>A</Avatar>}
                    actAsExpander={true}
                    showExpandableButton={true}
                    style={{height: '100%'}}>
                  </CardHeader>
                  <CardActions expandable={true}>
                    <FlatButton label="Open in a Window" onClick={this._onOpenInAWindow.bind(this)}/>
                  </CardActions>
                  <CardText expandable={true} style={{padding: '0'}}>
                    <div id="aceEditor" style={{height: '250px'}}></div>
                  </CardText>
                  <CardText expandable={true}>
                    Use <b>Groovy</b> language to describe your script
                  </CardText>
                </Card>
              )
            })
          }
        </LeftNav>
        <Dialog
          ref="editScript"
          title={this.state.dialogScriptTitle}
          actions={standardActions}
          actionFocus="submit"
          open={this.state.showEditScriptDialog}
          onRequestClose={this._handleRequestClose}>
          <div id="aceEditor2" style={{height: '250px'}}></div>
        </Dialog>
      </div>
    );
  }

  _onOpenInAWindow() {
    this.setState({
      dialogScriptTitle: "Editing Script",
      showEditScriptDialog: true
    });
  }
}