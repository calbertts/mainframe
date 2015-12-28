import React from 'react';
import Radium from 'radium';

import {AppBar} from 'material-ui';
import AppBannerTools from './AppBannerTools';


export default class AppBanner extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar
                style={{backgroundColor: '#ddd'}}
                title="Mainframe v1.0"
                onLeftIconButtonTouchTap={this.props.onLeftIconButton}
                iconElementRight={<AppBannerTools />}
            />
        )
    }
}