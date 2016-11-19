import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import HeaderAndNavForUser from 'HeaderAndNavForUser';

export var CorporateHealthProAppForUser = React.createClass({
    onLogout(e) {
        var {dispatch} = this.props;
        e.preventDefault();

        dispatch(actions.startLogout());
    },
    render() {
      var props=this.props;
        return (
            <div>
                <div id="container">
                    <HeaderAndNavForUser/>
                    <div id="page-wrapper">
                      {props.children}
                    </div>
                </div>

            </div>
        )
    }
});

export default Redux.connect()(CorporateHealthProAppForUser);
