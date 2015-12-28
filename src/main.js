import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MenuItemStore from 'stores/MenuItemStore';
import MenuItemActions from 'actions/MenuItemActions';

import AppBanner from 'components/appBanner/AppBanner';
import MainMenu from 'components/mainmenu/MainMenu';

import WorkflowDesigner from 'components/workflowDesigner/WorkflowDesigner';


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      repos: "four",
      mainMenuOpen: false
    }
  }

  componentDidMount() {
	  this.unsubscribe = MenuItemStore.listen(function(repos) {
	  	this.setState({
	  		repos: repos
	  	})
	  }.bind(this));
	}

	componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <AppBanner onLeftIconButton={this._onLeftIconButton.bind(this)} />
        <MainMenu ref="mainMenu" open={this.state.mainMenuOpen} />
        <WorkflowDesigner style={{height: 'calc(100% - 64px)'}} />
      </div>
    );
  }

  _onLeftIconButton() {
    this.setState({
      mainMenuOpen: !this.state.mainMenuOpen
    });
  }
}
