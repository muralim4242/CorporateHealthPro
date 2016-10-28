import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {Link} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';
import Dental from 'admin/report/assessmentViewTemplate/Dental';
import Hearing from 'admin/report/assessmentViewTemplate/Hearing';
import General from 'admin/report/assessmentViewTemplate/General';
import GrowthAndDevelopment from 'admin/report/assessmentViewTemplate/GrowthAndDevelopment';
import Vission from 'admin/report/assessmentViewTemplate/Vission';

export var ReportView = React.createClass({
    render() {
        var reportTypeDetail = () => {
            if (this.props.params["assName"] === "Dental") {
                return (<Dental/>);
            } else if (this.props.params["assName"] === "Hearing") {
                return (<Hearing/>);
            } else if (this.props.params["assName"] === "Growth And Development") {
                return (<GrowthAndDevelopment/>);
            } else if (this.props.params["assName"] === "General") {
                return (<General/>);
            } else {
                return (<Vission/>);
            }
        };
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            View
                        </div>
                        <div className="panel-body">
                            <div className="row text-center">
                                <img src={require('app/images/Company_Logos_01.jpg')} width="100px"></img>
                                <h2>{this.props.params["assName"]}
                                    Report</h2>
                                <hr/>
                                <img src={require('app/images/murali.jpg')} className="img-thumbnail" width="100px"></img>
                            </div>

                            <div className="row">
                                <table className="table table-bordered text-left">
                                    <thead>
                                        <tr>
                                            <th>
                                                Name
                                            </th>
                                            <th>
                                                Murali
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>
                                                Gender
                                            </th>
                                            <td>
                                                Male
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                DOB
                                            </th>
                                            <td>
                                                02-070-989
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Mobile
                                            </th>
                                            <td>
                                                7795929033
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Address
                                            </th>
                                            <td>
                                                #84,1st floor,shaheen taj building, kote bheedi,4th street, varthur, bangalore- 560087
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Pincode
                                            </th>
                                            <td>
                                                560087
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Blood group
                                            </th>
                                            <td>
                                                A+
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Designation
                                            </th>
                                            <td>
                                                CAD
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr/>
                            </div>

                            <div className="row text-center">
                                {reportTypeDetail()}
                            </div>
                            <hr/>
                            <div className="row text-center">
                                <div className="col-md-2 col-md-offset-2">
                                    <img src={require('app/images/som.jpg')} width="100px"></img>
                                    <h4>Doctor sign</h4>
                                </div>
                                <div className="col-md-2 col-md-offset-4">
                                    <img src={require('app/images/B ST8100397752sop.jpg')} width="100px"></img>
                                    <h4>HR/MD sign</h4>
                                </div>
                            </div>

                            <div className="row text-center">
                                <h2>HR/MD Says</h2>
                                <hr/>
                                <div className="col-md-3 text-left">
                                    <img src={require("app/images/murali.jpg")} className="img-thumbnail" width="100px"/>
                                </div>
                                <div className="col-md-3 text-left">
                                    <p>Health is well</p>
                                </div>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <div className="row">
                                <div className="col-md-2 ">
                                    <Link to={'/Admin/Users/1/1/View/ReportTypeCheck/User/Assessment/' + this.props.params["assName"] + '/List'} className="btn btn-primary pull-left">
                                        Back</Link>
                                </div>
                                <div className="col-md-4 col-md-offset-6">
                                    <div className="pull-right">

                                        <button type="button" className="btn btn-warning " data-toggle="modal" data-target="#uploadModal">Upload</button>
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#deleteModal">Delete</button>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Download
                                                <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="#">.pdf</a>
                                                </li>
                                                <li>
                                                    <a href="#">.xls</a>
                                                </li>
                                            </ul>
                                        </div>
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
