import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {Link} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';

export var ReportConsolidatedView = React.createClass({
    render() {
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            View
                        </div>
                        <div className="panel-body">
                            <h2 className="text-center">{this.props.params["assName"] + " "}
                                Report</h2>

                            <div className="row">
                                <div className="col-md-2">
                                    <img src={require('app/images/Company_Logos_01.jpg')} width="100px"></img>
                                </div>
                                <div className="col-md-4 col-md-offset-6">
                                    <p>
                                        <strong>Adrress :</strong>#84 ,1st floor, shaheen taj building, kote bheedi,4th street, varthur,bangalore - 560087
                                    </p>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="row">
                                <table className="table table-bordered text-left">
                                    <thead>
                                        <tr>
                                            <th>
                                                Excellent
                                            </th>
                                            <td>
                                                30
                                            </td>
                                            <td className="btn-success">
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>
                                                Good
                                            </th>
                                            <td>
                                                70
                                            </td>
                                            <td className="btn-warning">
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Poor
                                            </th>
                                            <td>
                                                50
                                            </td>
                                            <td className="btn-danger">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

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
                                <h2 className="bg-primary">HR/MD Says</h2>

                                <div className="col-md-3 text-left">
                                    <img src={require("app/images/murali.jpg")} className="img-thumbnail" width="150px"/>
                                </div>
                                <div className="col-md-3 text-left">
                                    <p>Health is well</p>
                                </div>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <div className="row">
                                <div className="col-md-2 ">
                                    <Link to={'/Admin/Report/1/1/View/ReportTypeCheck/Consolidated/Assessment/' + this.props.params["assName"] + '/List'} className="btn btn-primary pull-left">
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

export default Redux.connect()(ReportConsolidatedView);
