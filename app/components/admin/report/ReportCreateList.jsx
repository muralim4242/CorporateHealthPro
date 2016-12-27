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
import CoporateHealthProAPI from 'CoporateHealthProAPI';

const style = {
    marginRight: 20
};

const styleB = {
    margin: 12
};


export var ReportCreateList = React.createClass({
  componentDidMount: function() {
      var {dispatch} = this.props;
      CoporateHealthProAPI.getUsersForCorporate(this.props.params.corpId).then(function(response) {
            dispatch(actions.setUserData(response));
            dispatch({type:"SET_REFRESH_INDICATOR_STATE",refreshIndicator:"hide"});
      }, function(err) {
          alert(err);
      });
    },
    render() {
      var {list,dispatch,params} = this.props;
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
                          <Link to={"/Admin/Report/"+params.corpId+"/"+params.campId+"/Create/Assessment/"+params.assName+"/Add"}>
                              <FloatingActionButton mini={true} secondary={true} style={style}>
                                  <ContentAdd/>
                              </FloatingActionButton>
                          </Link>
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

                  <Link to={"/Admin/Report/"+this.props.params.corpId+"/"+this.props.params.campId+"/Create/Assessment"}>
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
                                         <th>Start</th>
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
})(ReportCreateList);

//
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
//                         <Link to='/Admin/Report/1/1/Create/Assessment/List' className="btn btn-success">
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
//                         <th>Start</th>
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
//                             <Link to={'/Admin/Report/1/1/Create/Assessment/' + this.props.params["assName"] + '/Add'} className="btn btn-success btn-sm">
//                                 Start</Link>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     </div>
// </div>
