import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {hashHistory} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';

export var ReportTypeCheck = React.createClass({
    onReportTypeChanged: (e) => {
        if (e.currentTarget.value === "Consolidated") {
            hashHistory.push('/Admin/Report/1/1/View/ReportTypeCheck/Consolidated/Assessment');
        } else {
            hashHistory.push('/Admin/Report/1/1/View/ReportTypeCheck/User/Assessment');
        }
    },
    render() {
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <div className="col-lg-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Select Report Type</h3>
                        </div>
                        <div className="panel-body">
                            <label className="radio-inline">
                                <input type="radio" name="inlineRadioOptions" value="Consolidated" onChange={this.onReportTypeChanged}/>
                                Consolidated
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="inlineRadioOptions" value="User" onChange={this.onReportTypeChanged}/>
                                User
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
});

export default Redux.connect()(ReportTypeCheck);
