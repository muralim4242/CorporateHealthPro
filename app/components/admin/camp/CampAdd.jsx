import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
var {Link} = require("react-router");
import ContentBodyHeader from 'common/ContentBodyHeader';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/AutoComplete';
const style = {
    margin: 12
};

export var CampAdd = React.createClass({
    render() {
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <Card>
                    <CardText>
                        <div className="form-group">
                            <TextField hintText="Camp Name" floatingLabelText="Medical Camp Name" fullWidth={true}/>
                        </div>
                        <div className="form-group">
                          <DatePicker hintText="Date" floatingLabelText="Start Date" fullWidth={true} />
                        </div>
                        <div className="form-group">
                            <DatePicker hintText="Date" floatingLabelText="End Date" fullWidth={true} />
                        </div>
                    </CardText>
                    <CardActions>
                      <Link to='/Admin/Camp/1/List'>
                      <RaisedButton label="Back" secondary={true} style={style}/>
                      </Link>
                      <RaisedButton label="Submit" primary={true} style={style} className="pull-right"/>
                    </CardActions>
                </Card>

            </div>
        )
    }
});

export default Redux.connect()(CampAdd);

// <div className="col-lg-6">
//     <form>
//         <div className="panel panel-default">
//             <div className="panel-heading">
//                 <h3 className="panel-title">Add/Edit</h3>
//             </div>
//             <div className="panel-body">
//                 <div className="form-group">
//                     <label>Name</label>
//                     <input type="text" className="form-control" placeholder="Name"/>
//                 </div>
//                 <div className="form-group">
//                     <label>Start Date</label>
//                     <input type="date" className="form-control"/>
//                 </div>
//                 <div className="form-group">
//                     <label>End Date</label>
//                     <input type="date" className="form-control" />
//                 </div>
//             </div>
//             <div className="panel-footer">
//                 <Link to='/Admin/Camp/1/List' className="btn btn-danger">
//                     Back</Link>
//                 <button type="submit" className="btn btn-success pull-right">Submit</button>
//             </div>
//         </div>
//     </form>
// </div>
