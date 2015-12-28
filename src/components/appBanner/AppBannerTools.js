import React from 'react';
import Radium from 'radium';

import {Styles, Avatar, ToolbarSeparator, IconMenu, IconButton} from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MenuDivider from 'material-ui/lib/menus/menu-divider';

import NavigationMoreVert from 'material-ui/lib/svg-icons/navigation/more-vert';
import ActionInfoOutline from 'material-ui/lib/svg-icons/action/info-outline';
import ActionHelpOutline from 'material-ui/lib/svg-icons/action/help-outline';
import ActionExitToApp from 'material-ui/lib/svg-icons/action/exit-to-app';

var Colors = Styles.Colors;

import AppBannerStyles from './AppBannerStyles';
import LogOutDialog from './LogOutDialog';


@Radium
export default class AppBannerTools extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showLogoutConfirm: false
        }
    }

    render() {
        return (
            <div>
                <Avatar color={Colors.orange300} backgroundColor={Colors.purple500} style={{position: 'relative', top: '-3px', lineHeight: '42px'}}>J</Avatar><span style={{position: 'relative', top: '-6px'}}>&nbsp;&nbsp;&nbsp;John Doe</span>
                <ToolbarSeparator style={{marginRight: '5px', top: '4px'}}/>
                <IconMenu
                    iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>}
                    targetOrigin={{horizontal:'right', vertical:'top'}}
                    anchorOrigin={{horizontal:'right', vertical:'top'}}
                >
                    <MenuItem primaryText="About Mainframe" innerDivStyle={AppBannerStyles.systemMenuInner} style={AppBannerStyles.systemMenu} leftIcon={<ActionInfoOutline style={AppBannerStyles.systemMenuIcon} />} />
                    <MenuItem primaryText="Help" innerDivStyle={AppBannerStyles.systemMenuInner} style={AppBannerStyles.systemMenu} leftIcon={<ActionHelpOutline style={AppBannerStyles.systemMenuIcon}  color={Colors.blue800} />} />
                    <MenuDivider />
                    <MenuItem primaryText="Sign Off" onClick={this._onLogout.bind(this)} innerDivStyle={AppBannerStyles.systemMenuInner} style={AppBannerStyles.systemMenu} leftIcon={<ActionExitToApp style={AppBannerStyles.systemMenuIcon} color={Colors.red800} />} />
                </IconMenu>
                <LogOutDialog ref="logoutDialog" />
            </div>
        )
    }

    _onLogout() {
        this.refs.logoutDialog.setState({
            show: true
        });
    }
}
