import React from 'react';
import * as Redux from 'react-redux';
import {hashHistory} from 'react-router';

import * as actions from 'actions';


export var Login = React.createClass({
    onLogin() {

        hashHistory.push('/Admin');
        // var {dispatch} = this.props;
        //
        // dispatch(actions.startLogin());
    },
    render() {
        return (
          <div>
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">Corporate Health Pro</a>
                </div>
            </nav>
            <div className="row login">
                <form className="col-lg-4 col-lg-offset-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Login</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Passcode</label>
                                <input type="Password" className="form-control" placeholder="Passcode"/>
                            </div>

                        </div>
                        <div className="panel-footer">
                            <button type="button" onClick={this.onLogin} className="btn btn-success">Login</button>
                        </div>
                    </div>
                </form>
            </div>
          </div>
        );
    }
});

export default Redux.connect()(Login);
