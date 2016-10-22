import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
var {Link} = require("react-router");
import ContentBodyHeader from 'common/ContentBodyHeader';

export var CampList = React.createClass({
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
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" placeholder="Search"></input>
                                </div>
                                <div className="col-lg-3">
                                    <div className="pull-right">
                                        <Link to='/Admin/Camp/1/Add' className="btn btn-primary">
                                            Add</Link>
                                        <Link to='/Admin/Camp/SelectCompany' className="btn btn-success">
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
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>View</th>
                                        <th>Edit</th>
                                        <th>Delet</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>
                                            oct camp
                                        </td>
                                        <td>12-10-2016</td>
                                        <td>30-10-2016</td>
                                        <td>
                                            <Link to='/Admin/Camp/1/View/1' className="btn btn-success btn-sm">
                                                View</Link>
                                        </td>
                                        <td>
                                          <Link to='/Admin/Camp/1/Edit/1' className="btn btn-warning btn-sm">
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

export default Redux.connect()(CampList);
