import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
var {Link} = require("react-router");
import ContentBodyHeader from 'common/ContentBodyHeader';

export var AdminList = React.createClass({
    render() {
        return (
            <div>
                <ContentBodyHeader path={this.props.route.path}/>
                <div className="col-lg-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-lg-1">
                                    <lable>
                                        Search</lable>
                                </div>
                                <div className="col-lg-9">
                                    <input type="text" className="form-control" placeholder="Search"></input>
                                </div>
                                <div className="col-lg-2">
                                    <Link to='/Admin/Users/Admin/Add' className="btn btn-primary pull-right">
                                        Add</Link>
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
                                        <th>Delet</th>
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
                                            <Link to='/Admin/Users/Admin/View/1' className="btn btn-success btn-sm">
                                                View</Link>
                                        </td>
                                        <td>
                                            <Link to='/Admin/Users/Admin/Edit/1' className="btn btn-warning btn-sm">
                                                Edit</Link>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
});

export default Redux.connect()(AdminList);