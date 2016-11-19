import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
var {Link} = require("react-router");
import ContentBodyHeader from 'common/ContentBodyHeader';
import CoporateHealthProAPI from 'CoporateHealthProAPI';

export var CorporateUsersList = React.createClass({
  componentDidMount: function() {
      var {dispatch} = this.props;
      CoporateHealthProAPI.getUsersForCorporate(this.props.params.corId).then(function(response) {
        console.log(response);
          dispatch(actions.setUserData(response));
      }, function(err) {
          alert(err);
      });
  },
    render() {
      var {list} = this.props;
      //    console.log(this.props);
  //    debugger;
 //        console.log(list);
      var renderList = function() {
          if (!list) {
              return (
                  <tr>
                      <td className="text-center" colSpan="8">No users for this  company</td>
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
                            <Link to={'/Admin/Users/Coporate/'+user.userAdditionalInfo.company.id+'/View/'+user.userId} className="btn btn-success btn-sm">
                                View</Link>
                        </td>
                        <td>
                            <Link to={'/Admin/Users/Coporate/'+user.userAdditionalInfo.company.id+'/Edit/'+user.userId} className="btn btn-warning btn-sm">
                                Edit</Link>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal">Delete</button>
                        </td>
                  </tr>
              )
          })
      };
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <div className="col-lg-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-lg-1">
                                    <lable>
                                        Search</lable>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" placeholder="Search"></input>
                                </div>
                                <div className="col-lg-3">
                                    <div className="pull-right">
                                        <Link to={'/Admin/Users/Coporate/'+this.props.params.corId+'/Add'} className="btn btn-primary">
                                            Add</Link>
                                        <Link to='/Admin/Users/Corporate/CorporateListForUsersAdd' className="btn btn-success">
                                            Back</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
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
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect((state) => {
    return state.user
})(CorporateUsersList);
