import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {Link} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';

export var AdminView = React.createClass({
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
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="thumbnail text-center">
                                                <label >Corpaorate Name</label>
                                                <img src={require('app/images/murali.jpg')} className="img-circle image_universal"></img>
                                                <span >hhhh</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="thumbnail text-center">
                                                <label>MD/HR Name</label>
                                                <img src={require('app/images/murali.jpg')} className="img-circle image_universal"></img>
                                                <span>hhhh</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <br/>
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-lg-6">
                                            <span>tharu@gmail.com</span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <label>Address</label>
                                        </div>
                                        <div className="col-lg-6">
                                            <span>nbcfwe hbwehf uediuw</span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <label>MD/HR Say</label>
                                        </div>
                                        <div className="col-lg-6">
                                            <span>jnf jef iuty wi</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <div className="row">
                                <div className="col-lg-2 ">

                                  <Link to='/Admin/Corporate/List' className="btn btn-primary pull-left">
                                    Back</Link>

                                </div>
                                <div className="col-lg-4 col-lg-offset-6">
                                    <div className="pull-right">
                                      <Link to='/Admin/Corporate/Edit/1' className="btn btn-success">
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

export default Redux.connect()(AdminView);
