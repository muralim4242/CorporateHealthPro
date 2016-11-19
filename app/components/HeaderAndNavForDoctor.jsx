import React from 'react';
var {Link, IndexLink, hashHistory} = require("react-router");

import * as Redux from 'react-redux';

import * as actions from 'actions';

export var HeaderAndNavForDoctor = React.createClass({
    onLogoutHandler: (e) => {
        hashHistory.push('/');
    },
    render() {
        return (
            <div>
                <nav className="navbar navbar-fixed-top bg-cust" role="navigation">
                    <div className="navbar-header  bg-cust">
                        <button type="button" className="navbar-toggle" style={{
                            color: "white"
                        }} data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <i className="glyphicon glyphicon-th-list"></i>
                        </button>
                        <a className="navbar-brand" href="index.html">Corporate Health Pro</a>
                    </div>
                    <ul className="nav navbar-right top-nav">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="glyphicon glyphicon-user"></i>
                                {" "}
                                Murali M
                                <b className="caret"></b>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/Admin/Profile">
                                        <i className="glyphicon glyphicon-eye-open"></i>
                                        {" "}
                                        Profile</Link>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a onClick={this.onLogoutHandler}>
                                        <i className="glyphicon glyphicon-log-out"></i>
                                        {" "}
                                        Log Out</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </nav>

            </div>
        )
    }
});

export default Redux.connect()(HeaderAndNavForDoctor);

// <span className="icon-bar"></span>
// <span className="icon-bar"></span>
// <span className="icon-bar"></span>
