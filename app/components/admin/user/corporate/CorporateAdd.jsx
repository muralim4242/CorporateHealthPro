import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
var {Link} = require("react-router");
import ContentBodyHeader from 'common/ContentBodyHeader';

export var CorporateAdd = React.createClass({
    render() {
        return (
            <div>
                <ContentBodyHeader path={this.props.route.path}/>
                <div className="col-lg-6">
                    <form>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Add/Edit</h3>
                            </div>
                            <div className="panel-body">
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
                            </div>
                            <div className="panel-footer">
                                <Link to='/Admin/Corporate/List' className="btn btn-danger">
                                    Back</Link>
                                <button type="submit" className="btn btn-success pull-right">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});

export default Redux.connect()(CorporateAdd);
