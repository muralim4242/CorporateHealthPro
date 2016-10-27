import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {hashHistory} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';

export var UserCheck = React.createClass({
  onUserTypeChanged:(e)=>
  {
    if(e.currentTarget.value==="Admin")
    {
        hashHistory.push('/Admin/Users/Admin/List');
    }
    else {
        hashHistory.push('/Admin/Users/Corporate/CorporateListForUsersAdd');
    }
  },
    render() {
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <div className="col-lg-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">User selection</h3>
                        </div>
                        <div className="panel-body">
                            <label className="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Admin" onChange={this.onUserTypeChanged}/>
                                Admin
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Corporate" onChange={this.onUserTypeChanged}/>
                                Corporate
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
});

export default Redux.connect()(UserCheck);
