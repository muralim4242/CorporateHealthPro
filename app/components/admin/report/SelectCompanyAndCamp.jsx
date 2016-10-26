import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {hashHistory} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';

export var SelectCompanyAndCamp = React.createClass({
    onClickHandler: () => {
        // if (this.refs.searchText.value != "") {
        //     hashHistory.push('/Admin/Camp/List');
        // }
        hashHistory.push('/Admin/Report/1/1/ReportCheck')
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
                                <input type="text" className="form-control" ref="searchText" placeholder="Type company name and wait"/>
                            </div>

                            <div className="form-group">
                                <label>Camp</label>
                                <select className="form-control">
                                    <option>Jan 2016</option>
                                    <option>Apr 2016</option>
                                    <option>July 2016</option>
                                </select>
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

export default Redux.connect()(SelectCompanyAndCamp);
