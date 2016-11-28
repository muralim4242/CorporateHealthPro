import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {hashHistory} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
const styles = {
    block: {
        maxWidth: 250
    },
    radioButton: {
        marginBottom: 16
    }
};

export var ReportTypeCheck = React.createClass({
    onReportTypeChanged(e) {
        const {corpId,campId}=this.props.params;
        if (e.currentTarget.value === "Consolidated") {
            hashHistory.push('/Admin/Report/'+corpId+'/'+campId+'/View/ReportTypeCheck/Consolidated/Assessment');
        } else {
            hashHistory.push('/Admin/Report/'+corpId+'/'+campId+'/View/ReportTypeCheck/User/Assessment');
        }
    },
    render() {
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                  <Card>
                      <CardActions>
                          <RadioButtonGroup name="reportCheck">
                                  <RadioButton value="Consolidated" label="Consolidated" style={styles.radioButton} onClick={this.onReportTypeChanged}/>
                                  <RadioButton value="User" label="User" style={styles.radioButton} onClick={this.onReportTypeChanged}/>
                          </RadioButtonGroup>
                      </CardActions>
                  </Card>
            </div>

        )
    }
});

export default Redux.connect()(ReportTypeCheck);

//
// <div className="col-lg-6">
//     <div className="panel panel-default">
//         <div className="panel-heading">
//             <h3 className="panel-title">Select Report Type</h3>
//         </div>
//         <div className="panel-body">
//             <label className="radio-inline">
//                 <input type="radio" name="inlineRadioOptions" value="Consolidated" onChange={this.onReportTypeChanged}/>
//                 Consolidated
//             </label>
//             <label className="radio-inline">
//                 <input type="radio" name="inlineRadioOptions" value="User" onChange={this.onReportTypeChanged}/>
//                 User
//             </label>
//         </div>
//     </div>
// </div>
