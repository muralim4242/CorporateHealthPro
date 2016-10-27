import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
var {Link} = require("react-router");
import ContentBodyHeader from 'common/ContentBodyHeader';

export var CorporateListForUsersAdd = React.createClass({
    render() {
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
                                <div className="col-lg-9">
                                    <input type="text" className="form-control" placeholder="Search"></input>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Log</th>
                                        <th>Name</th>
                                        <th>MD/HR</th>
                                        <th>Email ID</th>
                                        <th>Add Users</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>
                                            <img src="" className="img-responsiv"></img>
                                        </td>
                                        <td>hhhhh</td>
                                        <td>jhj</td>
                                        <td>tharu@gmail.com</td>
                                        <td>
                                            <Link to='/Admin/Users/Coporate/1/List' className="btn btn-success btn-sm">
                                                Add Users</Link>
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

export default Redux.connect()(CorporateListForUsersAdd);
