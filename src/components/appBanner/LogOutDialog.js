import React from 'react';
import {Dialog} from 'material-ui';

export default class LogOutDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    render() {
        let standardActions = [
            { text: 'No', onTouchTap: () => {this.setState({show: false})} },
            { text: 'Yes', onTouchTap: () => {this.setState({show: false})} }
        ];

        return (
            <Dialog
                ref="logoutConfirm"
                title="Sign Off"
                actions={standardActions}
                actionFocus="submit"
                open={this.state.show}
                onRequestClose={this._handleRequestClose}>
                Are you sure?
            </Dialog>
        )
    }
}