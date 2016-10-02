import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Dashboard = React.createClass({
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Dashboard</h1>
                            <ol className="breadcrumb">
                                <li className="active">
                                    <i className="glyphicon glyphicon-user"></i>
                                    Dashboard
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="page-header">
                        <h2>Statics</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="glyphicon glyphicon-user"></i>
                                        </div>

                                        <div className="col-xs-9 text-right">
                                            <div className="huge">26</div>
                                            <div>New Comments!</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right">
                                            <i className="glyphicon glyphicon-user"></i>
                                        </span>
                                        <div className="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-green">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="glyphicon glyphicon-user"></i>
                                        </div>

                                        <div className="col-xs-9 text-right">
                                            <div className="huge">18</div>
                                            <div>New Task</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right">
                                            <i className="glyphicon glyphicon-user"></i>
                                        </span>
                                        <div className="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="page-header">
                        <h2>Shortcuts</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="glyphicon glyphicon-user"></i>
                                        </div>

                                        <div className="col-xs-9 text-right">
                                            <div className="huge">26</div>
                                            <div>New Comments!</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right">
                                            <i className="glyphicon glyphicon-user"></i>
                                        </span>
                                        <div className="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-red">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="glyphicon glyphicon-user"></i>
                                        </div>

                                        <div className="col-xs-9 text-right">
                                            <div className="huge">18</div>
                                            <div>New Task</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right">
                                            <i className="glyphicon glyphicon-user"></i>
                                        </span>
                                        <div className="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-yellow">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="glyphicon glyphicon-user"></i>
                                        </div>

                                        <div className="col-xs-9 text-right">
                                            <div className="huge">26</div>
                                            <div>New Comments!</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right">
                                            <i className="glyphicon glyphicon-user"></i>
                                        </span>
                                        <div className="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
});

export default Redux.connect()(Dashboard);
