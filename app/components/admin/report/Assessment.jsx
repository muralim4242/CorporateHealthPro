import React from 'react';
import * as Redux from 'react-redux';
import {Link} from 'react-router';

import * as actions from 'actions';
import {hashHistory} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import {blue500,brown500,green500,red500} from 'material-ui/styles/colors';

export var ReportTypeCheck = React.createClass({
    render() {
        var links = ['/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/Dental/List', '/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/General/List', '/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/Basic Health/List', '/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/Vission/List', '/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/Hearing/List'];
        if (this.props.location.pathname.split('/')[5] === "View") {
            if (this.props.params["type"] === "Consolidated") {
                links = ['/Admin/Report/1/1/View/ReportTypeCheck/Consolidated/Assessment/Dental/ConsView', '/Admin/Report/1/1/View/ReportTypeCheck/Consolidated/Assessment/General/ConsView', '/Admin/Report/1/1/View/ReportTypeCheck/Consolidated/Assessment/Basic Health/ConsView', '/Admin/Report/1/1/View/ReportTypeCheck/Consolidated/Assessment/Vission/ConsView', '/Admin/Report/1/1/View/ReportTypeCheck/Consolidated/Assessment/Hearing/ConsView'];
            }
        } else {
            links = ['/Admin/Report/1/1/Create/Assessment/Dental/List', '/Admin/Report/1/1/Create/Assessment/General/List', '/Admin/Report/1/1/Create/Assessment/Basic Health/List', '/Admin/Report/1/1/Create/Assessment/Vission/List', '/Admin/Report/1/1/Create/Assessment/Hearing/List'];
        }
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <Card>
                  <CardText>
                                <div className="row">
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-5 col-md-offset-3 col-sm-offset-2 col-xs-offset-1 col-lg-offset-4 padding-zero">
                                        <div className="assessment-image" style={{background:brown500}}>
                                            <Link to={links[2]} className="thumbnail">
                                                <img src={require('app/images/gen.png')} alt="..."/>
                                                <div className="caption text-center">
                                                    Basic Health
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-5 padding-zero">
                                        <div className="assessment-image" style={{background:green500}}>
                                            <Link to={links[0]} className="thumbnail">
                                                <img src={require('app/images/dt.png')} alt="..."/>
                                                <div className="caption text-center">
                                                    <strong>
                                                        Dental
                                                    </strong>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-5 col-md-offset-3 col-sm-offset-2 col-xs-offset-1 col-lg-offset-4 padding-zero">
                                        <div className="assessment-image" style={{background:blue500}}>
                                            <Link to={links[3]} className="thumbnail">
                                                <img src={require('app/images/vs.png')} alt="..."/>
                                                <div className="caption text-center">
                                                    Vission
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-5 padding-zero">
                                        <div className="assessment-image" style={{background:red500}}>
                                            <Link to={links[4]} className="thumbnail">
                                                <img src={require('app/images/hr.png')} alt="..."/>
                                                <div className="caption text-center">
                                                    Hearing
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                  </CardText>
                </Card>

            </div>

        )
    }
});

export default Redux.connect()(ReportTypeCheck);


// <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
//     <div className="assessment-image">
//         <Link to={links[1]} className="thumbnail">
//             <img src={require('app/images/gen.png')} alt="..."/>
//             <div className="text-center">ZDS
//                 <strong>
//                     General</strong>
//             </div>
//         </Link>
//     </div>
// </div>

//
// <div className="col-lg-12">
//     <div className="panel panel-default">
//         <div className="panel-heading">
//             <h3 className="panel-title">Assessment List</h3>
//         </div>
//         <div className="panel-body">
//             <div className="row">
//                 <div className="col-lg-2 col-md-3 col-sm-4 col-xs-5 col-md-offset-3 col-sm-offset-2 col-xs-offset-1 col-lg-offset-4 padding-zero">
//                     <div className="assessment-image" style={{background:"#423D24"}}>
//                         <Link to={links[2]} className="thumbnail">
//                             <img src={require('app/images/gen.png')} alt="..."/>
//                             <div className="caption text-center">
//                                 Basic Health
//                             </div>
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="col-lg-2 col-md-3 col-sm-4 col-xs-5 padding-zero">
//                     <div className="assessment-image" style={{background:"#66A329"}}>
//                         <Link to={links[0]} className="thumbnail">
//                             <img src={require('app/images/dt.png')} alt="..."/>
//                             <div className="caption text-center">
//                                 <strong>
//                                     Dental
//                                 </strong>
//                             </div>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-lg-2 col-md-3 col-sm-4 col-xs-5 col-md-offset-3 col-sm-offset-2 col-xs-offset-1 col-lg-offset-4 padding-zero">
//                     <div className="assessment-image" style={{background:"#80FF00"}}>
//                         <Link to={links[3]} className="thumbnail">
//                             <img src={require('app/images/vs.png')} alt="..."/>
//                             <div className="caption text-center">
//                                 Vission
//                             </div>
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="col-lg-2 col-md-3 col-sm-4 col-xs-5 padding-zero">
//                     <div className="assessment-image" style={{background:"#B81414"}}>
//                         <Link to={links[4]} className="thumbnail">
//                             <img src={require('app/images/hr.png')} alt="..."/>
//                             <div className="caption text-center">
//                                 Hearing
//                             </div>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
