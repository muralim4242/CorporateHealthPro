import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {hashHistory} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';

export var SelectCompany = React.createClass({
    onClickHandler: () => {
        // if (this.refs.searchText.value != "") {
        //     hashHistory.push('/Admin/Camp/1/List');
        // }
        hashHistory.push('/Admin/Camp/1/List');
    },
    render() {
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <div className="col-lg-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Company selection</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" className="form-control" ref="searchText" placeholder="Type company name and wait"/>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <button type="button" className="btn btn-success" onClick={this.onClickHandler}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
});

export default Redux.connect()(SelectCompany);
