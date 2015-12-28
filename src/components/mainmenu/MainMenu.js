import React from 'react'
import {LeftNav} from 'material-ui'
import Radium from 'radium'

import MenuItemStore from '../../stores/MenuItemStore'
import MenuItemActions from '../../actions/MenuItemActions'

@Radium
class MainMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
		this.unsubscribe = MenuItemStore.listen(function(repos) {
			console.log('repos: ', repos)
		})
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

  render() {
    return (
			<LeftNav ref="leftNav"
							 docked={true}
							 open={this.props.open}
							 openRight={this.props.openRight}
							 style={{zIndex: '1', paddingTop: '70px', opacity: '.92'}}>
				{this.props.children}
			</LeftNav>
    );
  }
}

MainMenu.defaultProps = {
	open: false,
	openRight: false
};

export default MainMenu;
