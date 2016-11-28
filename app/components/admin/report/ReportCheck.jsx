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

export var ReportCheck = React.createClass({

  onReportCheckChanged(e)
  {
    // console.log(this);
    const {corpId,campId}=this.props.params;
    if(e.currentTarget.value==="Create")
    {
        hashHistory.push('/Admin/Report/'+corpId+'/'+campId+'/Create/Assessment');
    }
    else {
        hashHistory.push('/Admin/Report/'+corpId+'/'+campId+'/View/ReportTypeCheck');
    }
  },
    render() {
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                  <Card>
                      <CardActions>
                          <RadioButtonGroup name="reportCheck">
                                  <RadioButton value="Create" label="Create" style={styles.radioButton} onClick={this.onReportCheckChanged}/>
                                  <RadioButton value="View" label="View" style={styles.radioButton} onClick={this.onReportCheckChanged}/>
                          </RadioButtonGroup>
                      </CardActions>
                  </Card>
            </div>

        )
    }
});

export default Redux.connect()(ReportCheck);

// <div className="col-lg-6">
//     <div className="panel panel-default">
//         <div className="panel-heading">
//             <h3 className="panel-title">Select Operation</h3>
//         </div>
//         <div className="panel-body">
//             <label className="radio-inline">
//                 <input type="radio" name="inlineRadioOptions"  value="Create" onChange={this.onReportCheckChanged}/>
//                 Create
//             </label>
//             <label className="radio-inline">
//                 <input type="radio" name="inlineRadioOptions"  value="View" onChange={this.onReportCheckChanged}/>
//                 View
//             </label>
//         </div>
//     </div>
// </div>
