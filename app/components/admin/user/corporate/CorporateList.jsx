import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
var {Link} = require("react-router");
import ContentBodyHeader from 'common/ContentBodyHeader';
import CoporateHealthProAPI from 'CoporateHealthProAPI';
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
import ContentBack from 'material-ui/svg-icons/content/undo';
import RaisedButton from 'material-ui/RaisedButton';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Edit from 'material-ui/svg-icons/image/edit';
import Delete from 'material-ui/svg-icons/action/delete';

const style = {
    marginRight: 20
};

const styleB = {
    margin: 12
};

export var CorporateUsersList = React.createClass({
    componentDidMount: function() {
        var {dispatch} = this.props;
        CoporateHealthProAPI.getUsersForCorporate(this.props.params.corId).then(function(response) {
            console.log(response);
            dispatch(actions.setUserData(response));
              dispatch({type:"SET_REFRESH_INDICATOR_STATE",refreshIndicator:"hide"})
        }, function(err) {
            alert(err);
        });
    },
    render() {
        var {list,dispatch} = this.props;
        //    console.log(this.props);
        //    debugger;
        //        console.log(list);
        var renderList = function() {
            if (!list) {
                return (
                    <tr>
                        <td className="text-center" colSpan="8">No users for this company</td>
                    </tr>
                );
            }

            return list.map((user) => {
                return (
                    <tr key={user.userId}>
                        <td>{user.userId}</td>
                        <td>{user.firstName}</td>
                        <td>{user.roleName}</td>
                        <td>{user.userAdditionalInfo.emailId}</td>
                        <td>{user.userAdditionalInfo.mobileNo}</td>
                        <td>
                            <Link to={'/Admin/Users/Corporate/' + user.userAdditionalInfo.company.id + '/View/' + user.userId}>
                                <FloatingActionButton mini={true} secondary={true} style={style}>
                                    <RemoveRedEye/>
                                </FloatingActionButton>
                            </Link>
                        </td>
                        <td>
                            <Link to={'/Admin/Users/Corporate/' + user.userAdditionalInfo.company.id + '/Edit/' + user.userId}>
                                <FloatingActionButton mini={true} secondary={true} style={style}>
                                    <Edit/>
                                </FloatingActionButton>
                            </Link>

                        </td>
                        <td>
                            <FloatingActionButton onTouchTap={() => {
                                dispatch({type: "SET_DELETE_MODAL_STATE", isDeleteModalOpen: true})
                            }} mini={true} secondary={true} style={style}>
                                <Delete/>
                            </FloatingActionButton>

                        </td>
                    </tr>
                )
            })
        };
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <Card>
                    <CardHeader>
                        <Link to={'/Admin/Users/Corporate/' + this.props.params.corId + '/Add'}>
                            <FloatingActionButton primary={true} mini={true} className="pull-right" style={style}>
                                <ContentAdd/>
                            </FloatingActionButton>
                        </Link>
                        <Link to='/Admin/Users/Corporate/CorporateListForUsersAdd'>
                            <FloatingActionButton secondary={true} mini={true} className="pull-right" style={style}>
                                <ContentBack/>
                            </FloatingActionButton>
                        </Link>

                    </CardHeader>
                    <CardText>
                        <div className="panel-body table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Email Id</th>
                                        <th>Mobile No</th>
                                        <th>View</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderList()}
                                </tbody>
                            </table>
                        </div>
                    </CardText>
                </Card>
            </div>
        )
    }
});

export default Redux.connect((state) => {
    return state.user
})(CorporateUsersList);

//
// <div className="col-lg-8">
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
//                         <Link to={'/Admin/Users/Coporate/'+this.props.params.corId+'/Add'} className="btn btn-primary">
//                             Add</Link>
//                         <Link to='/Admin/Users/Corporate/CorporateListForUsersAdd' className="btn btn-success">
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
//                         <th>Edit</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {renderList()}
//                 </tbody>
//             </table>
//         </div>
//     </div>
// </div>
