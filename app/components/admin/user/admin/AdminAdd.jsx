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

export var AdminAdd = React.createClass({
    render() {
      const genders = ['Male', 'Female'];
      const roles=["Super Admin","Manager","Doctor"];
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <form>
                    <Card>
                        <CardText>
                            <div className="form-group">

                                <TextField hintText="Name" floatingLabelText="First Name" fullWidth={true}/>

                            </div>
                            <div className="form-group">
                                <TextField hintText="Name" floatingLabelText="Last Name" fullWidth={true}/>
                            </div>
                            <div className="form-group">
                                <AutoComplete floatingLabelText="Gender" filter={AutoComplete.noFilter} openOnFocus={true} dataSource={genders} fullWidth={true}/>
                            </div>
                            <div className="form-group">
                                <AutoComplete floatingLabelText="Roles" filter={AutoComplete.noFilter} openOnFocus={true} dataSource={roles} fullWidth={true}/>
                            </div>
                            <div className="form-group">
                                <DatePicker hintText="DOB" floatingLabelText="DOB" fullWidth={true} />
                            </div>
                            <div className="form-group">
                                  <TextField hintText="Email" floatingLabelText="Email" type="email" fullWidth={true}/>
                            </div>
                            <div className="form-group">
                                  <TextField hintText="Mobile" floatingLabelText="Contact Number" type="number" fullWidth={true}/>
                            </div>
                            <div className="form-group">
                                <TextField hintText="Address" floatingLabelText="Address" multiLine={true} rows={2} fullWidth={true}/>
                            </div>
                            <div className="form-group">
                                <TextField hintText="Pincode" floatingLabelText="Pincode" type="number" fullWidth={true}/>
                            </div>

                            <div className="form-group">
                                <TextField hintText="Blood Group" floatingLabelText="Blood Group" fullWidth={true}/>
                            </div>
                            <div className="form-group">
                                <label>Photo</label>
                                <input type="file"></input>
                            </div>

                        </CardText>
                        <CardActions>
                          <Link to='/Admin/Users/Admin/List'>
                          <RaisedButton label="Back" secondary={true} style={style}/>
                          </Link>
                          <RaisedButton label="Submit" primary={true} style={style} className="pull-right"/>
                        </CardActions>
                    </Card>
                </form>
            </div>
        )
    }
});

export default Redux.connect()(AdminAdd);

// <div className="col-lg-6">
//     <form>
//         <div className="panel panel-default">
//             <div className="panel-heading">
//                 <h3 className="panel-title">Add/Edit</h3>
//             </div>
//             <div className="panel-body">
//                 <div className="form-group">
//                     <label>First name</label>
//                     <input type="text" className="form-control" placeholder="FName"/>
//                 </div>
//                 <div className="form-group">
//                     <label>Last Name</label>
//                     <input type="text" className="form-control" placeholder="LName"/>
//                 </div>
//                 <div className="form-group">
//                     <label>Gender</label>
//                     <select className="form-control">
//                         <option>Male</option>
//                         <option>Female</option>
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label>Role</label>
//                     <select className="form-control">
//                         <option>Super Admin</option>
//                         <option>Admin</option>
//                         <option>Manager</option>
//                         <option>Executive</option>
//                         <option>Doctor</option>
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label>DOB</label>
//                     <input type="date" className="form-control" placeholder="DOB"/>
//                 </div>
//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input type="email" className="form-control" placeholder="Email"/>
//                 </div>
//                 <div className="form-group">
//                     <label>Mobile</label>
//                     <input type="text" className="form-control" placeholder="Mobile"/>
//                 </div>
//                 <div className="form-group">
//                     <label>Address</label>
//                     <textarea className="form-control" rows="3"></textarea>
//                 </div>
//                 <div className="form-group">
//                     <label>Pincode</label>
//                     <input type="text" className="form-control" placeholder="Pincode"/>
//                 </div>
//
//                 <div className="form-group">
//                     <label>Blood Group</label>
//                     <input type="text" className="form-control" placeholder="Blood Group"/>
//                 </div>
//                 <div className="form-group">
//                     <label>Designation</label>
//                     <input type="text" className="form-control" placeholder="Designation"/>
//                 </div>
//                 <div className="form-group">
//                     <label>Photo</label>
//                     <input type="file"></input>
//                 </div>
//
//             </div>
//             <div className="panel-footer">
//                 <Link to='/Admin/Users/Admin/List' className="btn btn-danger">
//                     Back</Link>
//                 <button type="submit" className="btn btn-success pull-right">Submit</button>
//             </div>
//         </div>
//     </form>
// </div>
