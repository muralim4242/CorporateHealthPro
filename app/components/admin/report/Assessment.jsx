import React from 'react';
import * as Redux from 'react-redux';
import {Link} from 'react-router';

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
                <ContentBodyHeader path={this.props.location.pathname}/>
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Assessment List</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 col-md-offset-3 col-lg-offset-4">
                                    <div className="assessment-image">
                                        <Link to='/Admin/Users/1/1/View/ReportTypeCheck/User/Assessment/Dental/List' className="thumbnail">
                                            <img src={require('app/images/dt.png')} alt="..."/>
                                            <div className="text-center">
                                                <strong>
                                                    Dental
                                                </strong>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
                                    <div className="assessment-image">
                                        <Link to='/Admin/Users/1/1/View/ReportTypeCheck/User/Assessment/General/List' className="thumbnail">
                                            <img src={require('app/images/gen.png')} alt="..."/>
                                            <div className="text-center">
                                                <strong>
                                                    General</strong>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 col-md-offset-2  col-lg-offset-3">
                                    <div className="assessment-image">
                                          <Link to='/Admin/Users/1/1/View/ReportTypeCheck/User/Assessment/Growth And Development/List' className="thumbnail">
                                            <img src={require('app/images/gd.png')} alt="..."/>
                                            <div className="caption text-center">
                                                Growth And Development
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
                                    <div className="assessment-image">
                                          <Link to='/Admin/Users/1/1/View/ReportTypeCheck/User/Assessment/Vission/List' className="thumbnail">
                                            <img src={require('app/images/vs.png')} alt="..."/>
                                            <div className="caption text-center">
                                                Vission
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
                                    <div className="assessment-image">
                                        <Link to='/Admin/Users/1/1/View/ReportTypeCheck/User/Assessment/Hearing/List' className="thumbnail">
                                            <img src={require('app/images/hr.png')} alt="..."/>
                                            <div className="caption text-center">
                                                Hearing
                                            </div>
                                        </Link>
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
