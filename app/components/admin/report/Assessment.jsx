import React from 'react';
import * as Redux from 'react-redux';
import {Link} from 'react-router';

import * as actions from 'actions';
import {hashHistory} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';

export var ReportTypeCheck = React.createClass({
    render() {
        var links = ['/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/Dental/List', '/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/General/List', '/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/Growth And Development/List', '/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/Vission/List', '/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/Hearing/List'];
        if (this.props.location.pathname.split('/')[5] === "View") {
            if (this.props.params["type"] === "Consolidated") {
                links = ['/Admin/Report/1/1/View/ReportTypeCheck/Consolidated/Assessment/Dental/ConsView', '/Admin/Report/1/1/View/ReportTypeCheck/Consolidated/Assessment/General/ConsView', '/Admin/Report/1/1/View/ReportTypeCheck/Consolidated/Assessment/Growth And Development/ConsView', '/Admin/Report/1/1/View/ReportTypeCheck/Consolidated/Assessment/Vission/ConsView', '/Admin/Report/1/1/View/ReportTypeCheck/Consolidated/Assessment/Hearing/ConsView'];
            }
        } else {
            links = ['/Admin/Report/1/1/Create/Assessment/Dental/List', '/Admin/Report/1/1/Create/Assessment/General/List', '/Admin/Report/1/1/Create/Assessment/Growth And Development/List', '/Admin/Report/1/1/Create/Assessment/Vission/List', '/Admin/Report/1/1/Create/Assessment/Hearing/List'];
        }
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
                                        <Link to={links[0]} className="thumbnail">
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
                                        <Link to={links[1]} className="thumbnail">
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
                                        <Link to={links[2]} className="thumbnail">
                                            <img src={require('app/images/gd.png')} alt="..."/>
                                            <div className="caption text-center">
                                                Growth And Development
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
                                    <div className="assessment-image">
                                        <Link to={links[3]} className="thumbnail">
                                            <img src={require('app/images/vs.png')} alt="..."/>
                                            <div className="caption text-center">
                                                Vission
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
                                    <div className="assessment-image">
                                        <Link to={links[4]} className="thumbnail">
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
