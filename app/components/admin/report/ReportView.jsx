import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {Link} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';

export var  ReportView= React.createClass({
    render() {
        return (
            <div>
                <ContentBodyHeader path={this.props.route.path}/>
                <div className="col-lg-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            View
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-lg-6">
                                            <span>Oct camp</span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <label>Start Date</label>
                                        </div>
                                        <div className="col-lg-6">
                                            <span>12-10-2016</span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <label>Start Date</label>
                                        </div>
                                        <div className="col-lg-6">
                                            <span>25-10-2016</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <div className="row">
                                <div className="col-lg-2 ">
                                    <Link to='/Admin/Camp/1/List' className="btn btn-primary pull-left">
                                        Back</Link>
                                </div>
                                <div className="col-lg-4 col-lg-offset-6">
                                    <div className="pull-right">
                                        <Link to='/Admin/Camp/1/Edit/1' className="btn btn-success">
                                            Edit</Link>
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#deleteModal">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect()(ReportView);
