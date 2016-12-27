import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {Link} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';
import Dental from 'admin/report/assessmentViewTemplate/create/Dental';
import Hearing from 'admin/report/assessmentViewTemplate/create/Hearing';
import General from 'admin/report/assessmentViewTemplate/create/General';
import GrowthAndDevelopment from 'admin/report/assessmentViewTemplate/create/GrowthAndDevelopment';
import Vission from 'admin/report/assessmentViewTemplate/create/Vission';
import {Card, CardText, CardActions, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {blue500} from 'material-ui/styles/colors';
import CoporateHealthProAPI from 'CoporateHealthProAPI';

export var ReportAdd = React.createClass({
    componentDidMount: function() {
        let {assName} = this.props.params;
        let assId = 1;
        switch (assName) {
            case "Vission":
                assId = 2
                break;
            case "Hearing":
                assId = 3
                break;
            case "Dental":
                assId = 4
                break;
        }
        CoporateHealthProAPI.getAssessmentQuestions(assId).then(function(response) {
              
        //    console.log(response);
        }, function(err) {
            alert(err);
        })
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
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <Card>
                    <CardText>
                        <h2 className="text-center">{this.props.params["assName"] + " "}
                            Report</h2>

                        <div className="row text-center">
                            <br/>
                            <img src={require('app/images/Company_Logos_01.jpg')} width="100px"></img>
                            <br/>
                            <br/>
                            <p>
                                <strong>Adrress :</strong>#84 ,1st floor, shaheen taj building, kote bheedi,4th street, varthur,bangalore - 560087
                            </p>

                        </div>

                        <br/>
                        <div className="row text-center">
                            <img src={require('app/images/murali.jpg')} className="img-thumbnail" width="150px"></img>
                        </div>

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
                        <h3 style={{
                            backgroundColor: blue500,
                            padding: "5px"
                        }} className="text-center">Status</h3>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="img-thumbnail">
                                    <label className="radio-inline">
                                        <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                        <strong className="btn-success">Excellent</strong>
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                        <strong className="btn-warning">Good</strong>
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                        <strong className="btn-danger">Poor</strong>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </CardText>
                    <CardActions>
                        <div className="row">
                            <div className="col-md-2 ">
                                <Link to={'/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/' + this.props.params["assName"] + '/List'}>
                                    <RaisedButton label="Back" primary={true}/></Link>
                            </div>
                            <div className="col-md-4 col-md-offset-6">
                                <div className="pull-right">

                                    <RaisedButton label="Submit" secondary={true}/>

                                </div>
                            </div>
                        </div>
                    </CardActions>
                </Card>
            </div>
        )
    }
});

export default Redux.connect()(ReportAdd);

// <div className="col-md-12">
//     <div className="panel panel-default">
//         <div className="panel-heading">
//             Add
//         </div>
//         <div className="panel-body">
//             <h2 className="text-center">{this.props.params["assName"] + " "}
//                 Report</h2>
//
//             <div className="row">
//                 <div className="col-md-2">
//                     <img src={require('app/images/Company_Logos_01.jpg')} width="100px"></img>
//                 </div>
//                 <div className="col-md-4 col-md-offset-6">
//                     <p>
//                         <strong>Adrress :</strong>#84 ,1st floor, shaheen taj building, kote bheedi,4th street, varthur,bangalore - 560087
//                     </p>
//                 </div>
//             </div>
//             <br/>
//             <br/>
//             <div className="row text-center">
//                 <img src={require('app/images/murali.jpg')} className="img-thumbnail" width="150px"></img>
//             </div>
//             <br/>
//             <br/>
//             <div className="row">
//                 <table className="table table-bordered text-left">
//                     <thead>
//                         <tr>
//                             <th>
//                                 Name
//                             </th>
//                             <th>
//                                 Murali
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <th>
//                                 Gender
//                             </th>
//                             <td>
//                                 Male
//                             </td>
//                         </tr>
//                         <tr>
//                             <th>
//                                 DOB
//                             </th>
//                             <td>
//                                 02-070-989
//                             </td>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Mobile
//                             </th>
//                             <td>
//                                 7795929033
//                             </td>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Address
//                             </th>
//                             <td>
//                                 #84,1st floor,shaheen taj building, kote bheedi,4th street, varthur, bangalore- 560087
//                             </td>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Pincode
//                             </th>
//                             <td>
//                                 560087
//                             </td>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Blood group
//                             </th>
//                             <td>
//                                 A+
//                             </td>
//                         </tr>
//                         <tr>
//                             <th>
//                                 Designation
//                             </th>
//                             <td>
//                                 CAD
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//
//             </div>
//
//             <div className="row text-center">
//                 {reportTypeDetail()}
//             </div>
//             <h3 className="bg-primary text-center">Status</h3>
//             <div className="row">
//                 <div className="col-md-12 text-center">
//                     <div className="img-thumbnail">
//                         <label className="radio-inline">
//                             <input type="radio" name="inlineRadioOptions" value="Yes"/>
//                             <strong className="btn-success">Excellent</strong>
//                         </label>
//                         <label className="radio-inline">
//                             <input type="radio" name="inlineRadioOptions" value="Yes"/>
//                             <strong className="btn-warning">Good</strong>
//                         </label>
//                         <label className="radio-inline">
//                             <input type="radio" name="inlineRadioOptions" value="Yes"/>
//                             <strong className="btn-danger">Poor</strong>
//                         </label>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="panel-footer">
//             <div className="row">
//                 <div className="col-md-2 ">
//                     <Link to={'/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/' + this.props.params["assName"] + '/List'} className="btn btn-primary pull-left">
//                         Back</Link>
//                 </div>
//                 <div className="col-md-4 col-md-offset-6">
//                     <div className="pull-right">
//
//                         <button type="button" className="btn btn-success">Submit</button>
//
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
