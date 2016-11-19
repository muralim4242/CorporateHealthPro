import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {Link} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';
import Dental from 'admin/report/assessmentViewTemplate/user/Dental';
import Hearing from 'admin/report/assessmentViewTemplate/user/Hearing';
import General from 'admin/report/assessmentViewTemplate/user/General';
import GrowthAndDevelopment from 'admin/report/assessmentViewTemplate/user/GrowthAndDevelopment';
import Vission from 'admin/report/assessmentViewTemplate/user/Vission';
//import jsPDF from 'jspdf';

export var ReportView = React.createClass({
    downloadPdfHandler: function() {
      //  var doc = new jsPDF()
        // doc.text('Hello world!', 10, 10)
        // doc.save('a4.pdf')
        // We'll make our own renderer to skip this editor
        // var specialElementHandlers = {
        //     '#editor': function(element, renderer) {
        //         return true;
        //     }
        // };
        //
        // // All units are in the set measurement for the document
        // // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
        // doc.fromHTML($('#view').get(0), 15, 15, {
        //     'width': 170,
        //     'elementHandlers': specialElementHandlers
        // });
    },
    render() {
        var reportTypeDetail = () => {
            if (this.props.params["assName"] === "Dental") {
                return (<Dental/>);
            } else if (this.props.params["assName"] === "Hearing") {
                return (<Hearing/>);
            } else if (this.props.params["assName"] === "Basic Health") {
                return (<GrowthAndDevelopment/>);
            } else if (this.props.params["assName"] === "General") {
                return (<General/>);
            } else {
                return (<Vission/>);
            }
        };
        return (
            <div >
              <div id="editor">

              </div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <div className="col-md-12" id="view">
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
                            <div className="row text-center">
                                <img src={require('app/images/murali.jpg')} className="img-thumbnail" width="150px"></img>
                            </div>
                            <br/>
                            <br/>
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

                            </div>

                            <div className="row text-center">
                                {reportTypeDetail()}
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
                                    <Link to={'/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/' + this.props.params["assName"] + '/List'} className="btn btn-primary pull-left">
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
                                                    <a onClick={this.downloadPdfHandler}>.pdf</a>
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
