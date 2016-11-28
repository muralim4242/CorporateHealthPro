import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
var {Link} = require("react-router");
import ContentBodyHeader from 'common/ContentBodyHeader';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Edit from 'material-ui/svg-icons/image/edit';
import Delete from 'material-ui/svg-icons/action/delete';
import ContentBack from 'material-ui/svg-icons/navigation/arrow-back';
import Download from 'material-ui/svg-icons/file/file-download';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
// import CircularProgress from 'material-ui/CircularProgress';

const style = {
    marginRight: 20
};

const styleB = {
    margin: 12
};

export var ReportList = React.createClass({
    render() {
        const {corpId, campId} = this.props.params;
        const {dispatch}=this.props;
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <Card>
                    <CardHeader>

                        <Link to={'/Admin/Report/' + corpId + '/' + campId + '/View/ReportTypeCheck/User/Assessment'}>
                            <FloatingActionButton secondary={true} mini={true} className="pull-right" style={style}>
                                <ContentBack/>
                            </FloatingActionButton>
                        </Link>
                    </CardHeader>
                    <CardText>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Email Id</th>
                                        <th>Mobile No</th>
                                        <th>View</th>
                                        <th>Upload</th>
                                        <th>Download</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>
                                            Murali M
                                        </td>
                                        <td>Admin</td>
                                        <td>murlaim4242@gmail.com</td>
                                        <td>7795929033</td>
                                        <td>
                                            <Link to={'/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/' + this.props.params["assName"] + '/View/1'}>
                                                <FloatingActionButton mini={true} secondary={true} style={style}>
                                                    <RemoveRedEye/>
                                                </FloatingActionButton>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={'/Admin/Report/1/1/Create/ReportTypeCheck/User/Assessment/' + this.props.params["assName"] + '/View/1'}>
                                                <FloatingActionButton mini={true} secondary={true} style={style}>
                                                    <Edit/>
                                                </FloatingActionButton>
                                            </Link>

                                        </td>
                                        <td>
                                            <div className="btn-group">
                                                <FloatingActionButton mini={true} secondary={true} className="dropdown-toggle" style={style} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <Download/>
                                                </FloatingActionButton>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="#">.pdf</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">.xls</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td>
                                            <FloatingActionButton onTouchTap={() => {
                                                dispatch({type: "SET_DELETE_MODAL_STATE", isDeleteModalOpen: true})
                                            }} mini={true} secondary={true} style={style}>
                                                <Delete/>
                                            </FloatingActionButton>

                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </CardText>
                </Card>

            </div>
        )
    }
});

export default Redux.connect()(ReportList);

// <div className="col-lg-10">
//     <div className="panel panel-default">
//         <div className="panel-heading">
//             <div className="row">
//                 <div className="col-lg-1">
//                     <lable>
//                         Search</lable>
//                 </div>
//                 <div className="col-lg-8">
//                     <input type="text" className="form-control" placeholder="Search"></input>
//                 </div>
//                 <div className="col-lg-3">
//                     <div className="pull-right">
//                         <Link to='/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment' className="btn btn-success">
//                             Back</Link>
//                     </div>
//                 </div>
//
//             </div>
//         </div>
//         <div className="panel-body table-responsive">
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>S.No</th>
//                         <th>Name</th>
//                         <th>Role</th>
//                         <th>Email Id</th>
//                         <th>Mobile No</th>
//                         <th>View</th>
//                         <th>Upload</th>
//                         <th>Download</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>01</td>
//                         <td>
//                             Murali M
//                         </td>
//                         <td>Admin</td>
//                         <td>murlaim4242@gmail.com</td>
//                         <td>7795929033</td>
//                         <td>
//                             <Link to={'/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment/' +this.props.params["assName" ]+'/View/1'} className="btn btn-success btn-sm">
//                                 View</Link>
//                         </td>
//                         <td>
//                             <button type="button" className="btn btn-warning btn-sm" data-toggle="modal" data-target="#uploadModal">Upload</button>
//                         </td>
//                         <td>
//
//                             <div className="btn-group">
//                                 <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                     Download
//                                     <span className="caret"></span>
//                                 </button>
//                                 <ul className="dropdown-menu">
//                                     <li>
//                                         <a href="#">.pdf</a>
//                                     </li>
//                                     <li>
//                                         <a href="#">.xls</a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </td>
//                         <td>
//                             <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal">Delete</button>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     </div>
// </div>
