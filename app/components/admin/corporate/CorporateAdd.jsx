import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var CorporateHealthProApp = React.createClass({
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
                                    Corporate/Add
                                </li>
                            </ol>
                        </div>
                        <div className="col-lg-6">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <label>MD/HR</label>
                                <input type="text" className="form-control" placeholder="MD/HR"/>
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <textarea className="form-control" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label>MD/HR Say</label>
                                <textarea className="form-control" rows="3"></textarea>
                            </div>

                            <div className="form-group">
                                <label>Logo</label>
                                <input type="file"></input>
                            </div>
                            <div className="form-group">
                                <label>MD/HR Photo</label>
                                <input type="file"></input>
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form></div>
                    </div>


                </div>
            </div>
        )
    }
});

export default Redux.connect()(CorporateHealthProApp);
