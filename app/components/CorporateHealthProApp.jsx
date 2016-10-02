import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import HeaderAndNav from 'HeaderAndNav';

export var CorporateHealthProApp = React.createClass({
    onLogout(e) {
        var {dispatch} = this.props;
        e.preventDefault();

        dispatch(actions.startLogout());
    },
    render() {
      var props=this.props;
        return (
            <div>
                <div id="wrapper">
                    <HeaderAndNav/>
                    <div id="page-wrapper">
                      {props.children}
                    </div>
                </div>

            </div>
        )
    }
});

export default Redux.connect()(CorporateHealthProApp);
