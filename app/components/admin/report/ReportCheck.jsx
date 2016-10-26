import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {hashHistory} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';

export var ReportCheck = React.createClass({
  onReportCheckChanged:(e)=>
  {
    if(e.currentTarget.value==="Create")
    {
        hashHistory.push('/Admin/Users/Admin/List');
    }
    else {
        hashHistory.push('/Admin/Report/1/1/View/ReportTypeCheck');
    }
  },
    render() {
        return (
            <div>
                <ContentBodyHeader path={this.props.route.path}/>
                <div className="col-lg-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Select Operation</h3>
                        </div>
                        <div className="panel-body">
                            <label className="radio-inline">
                                <input type="radio" name="inlineRadioOptions"  value="Create" onChange={this.onReportCheckChanged}/>
                                Create
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="inlineRadioOptions"  value="View" onChange={this.onReportCheckChanged}/>
                                View
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
});

export default Redux.connect()(ReportCheck);
