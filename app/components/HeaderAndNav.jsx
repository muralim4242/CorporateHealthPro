import React from 'react';
var {Link, IndexLink} = require("react-router");

import * as Redux from 'react-redux';

import * as actions from 'actions';

export var HeaderAndNav = React.createClass({
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">Logo</a>
                    </div>
                    <ul className="nav navbar-right top-nav">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="glyphicon glyphicon-user"></i>
                                John Smith
                                <b className="caret"></b>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">
                                        <i className="glyphicon glyphicon-user"></i>
                                        Profile</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-fw fa-power-off"></i>
                                        Log Out</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav side-nav">
                            <li>
                                <IndexLink to="/Admin" activeClassName="active">
                                    <i className="glyphicon glyphicon-user"></i>
                                    Dashboard</IndexLink>

                            </li>
                            <li>
                                <Link to='/Admin/Corporate/List' activeClassName="active">
                                    <i className="glyphicon glyphicon-user"></i>Corporate</Link>
                            </li>
                            <li>
                                <Link to='/Admin/Users/UserCheck' activeClassName="active">
                                    <i className="glyphicon glyphicon-user"></i>User</Link>
                            </li>

                            <li>
                                <Link to='/Admin/Camp/SelectCompany' activeClassName="active">
                                    <i className="glyphicon glyphicon-user"></i>Camp</Link>

                            </li>
                            <li>
                                <Link to='/Admin/Reports' activeClassName="active">
                                    <i className="glyphicon glyphicon-user"></i>Report</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
});

export default Redux.connect()(HeaderAndNav);
