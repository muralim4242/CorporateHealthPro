import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {hashHistory} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';

export var ReportTypeCheck = React.createClass({
    onReportTypeChanged: (e) => {
        if (e.currentTarget.value === "Consolidated") {
            hashHistory.push('/Admin/Users/Admin/List');
        } else {
            hashHistory.push('/Admin/Users/Corporate/CorporateListForUsersAdd');
        }
    },
    render() {
        return (
            <div>
                <ContentBodyHeader path={this.props.route.path}/>
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Assessment List</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 col-md-offset-3 col-lg-offset-4">
                                    <div className="assessment-image">
                                        <a href="#" className="thumbnail">
                                            <img src={require('app/images/dt.png')} alt="..."/>
                                            <div className="text-center">
                                                <strong>
                                                    Dental
                                                  </strong>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
                                    <div className="assessment-image">
                                        <a href="#" className="thumbnail">
                                            <img src={require('app/images/gen.png')} alt="..."/>
                                            <div className="text-center">
                                                <strong>
                                                    General</strong>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 col-md-offset-2  col-lg-offset-3">
                                    <div className="assessment-image">
                                        <a href="#" className="thumbnail">
                                            <img src={require('app/images/gd.png')} alt="..."/>
                                            <div className="caption text-center">
                                                Growth And Development
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
                                    <div className="assessment-image">
                                        <a href="#" className="thumbnail">
                                            <img src={require('app/images/vs.png')} alt="..."/>
                                            <div className="caption text-center">
                                                Vission
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
                                    <div className="assessment-image">
                                        <a href="#" className="thumbnail">
                                            <img src={require('app/images/hr.png')} alt="..."/>
                                            <div className="caption text-center">
                                                Hearing
                                            </div>
                                        </a>
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

export default Redux.connect()(ReportTypeCheck);
