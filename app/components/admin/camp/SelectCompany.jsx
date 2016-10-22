import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {hashHistory} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';

export var SelectCompany = React.createClass({
    onClickHandler: (e) => {
        if (e.currentTarget.value != "") {
            hashHistory.push('/Admin/Camp/List');
        }
    },
    render() {
        return (
            <div>
                <ContentBodyHeader path={this.props.route.path}/>
                <div className="col-lg-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Company selection</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" className="form-control" placeholder="Type company name and wait"/>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <button type="button" onClick={this.onClickHandler} className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
});

export default Redux.connect()(SelectCompany);
