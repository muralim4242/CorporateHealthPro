import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var CorporateList = React.createClass({
    render() {
        return (
            <div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Corporate</h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="glyphicon glyphicon-user"></i>
                                Corporate/List
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="col-lg-10">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <button type="button" className="btn btn-primary pull-right">Add</button>
                            <div className="row">
                                <div className="col-lg-1">
                                    <i className="glyphicon glyhicon-search"></i>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body">
                            <table className="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Log</th>
                                        <th>Name</th>
                                        <th>MD/HR</th>
                                        <th>Email ID</th>
                                        <th>View</th>
                                        <th>Edit</th>
                                        <th>Delet</th>
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
                                            <button type="button" className="btn btn-success btn-sm">View</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-warning btn-sm">Edit</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>01</td>
                                        <td>
                                            <img src="" className="img-responsiv"></img>
                                        </td>
                                        <td>hhhhh</td>
                                        <td>jhj</td>
                                        <td>tharu@gmail.com</td>
                                        <td>
                                            <button type="button" className="btn btn-success btn-sm">View</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-warning btn-sm">Edit</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>01</td>
                                        <td>
                                            <img src="" className="img-responsiv"></img>
                                        </td>
                                        <td>hhhhh</td>
                                        <td>jhj</td>
                                        <td>tharu@gmail.com</td>
                                        <td>
                                            <button type="button" className="btn btn-success btn-sm">View</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-warning btn-sm">Edit</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>01</td>
                                        <td>
                                            <img src="" className="img-responsiv"></img>
                                        </td>
                                        <td>hhhhh</td>
                                        <td>jhj</td>
                                        <td>tharu@gmail.com</td>
                                        <td>
                                            <button type="button" className="btn btn-success btn-sm">View</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-warning btn-sm">Edit</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>01</td>
                                        <td>
                                            <img src="" className="img-responsiv"></img>
                                        </td>
                                        <td>hhhhh</td>
                                        <td>jhj</td>
                                        <td>tharu@gmail.com</td>
                                        <td>
                                            <button type="button" className="btn btn-success btn-sm">View</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-warning btn-sm">Edit</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )
    }
});

export default Redux.connect()(CorporateList);
