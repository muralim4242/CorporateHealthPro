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

export var Profile = React.createClass({
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <ContentBodyHeader path={this.props.route.path}/>
                    <Card>
                        <CardText>
                            <div className="thumbnail text-center">
                                <label >Full Name</label>
                                <img src={require('app/images/murali.jpg')} className="img-circle image_universal"></img>
                                <span >hhhh</span>
                            </div>
                            <div className="form-group">
                                <TextField hintText="FNanme" floatingLabelText="Full Name"/>
                            </div>
                            <div className="form-group">
                                <TextField hintText="LNanme" floatingLabelText="Last Name"/>
                            </div>
                            <div className="form-group">
                                <label>Gender</label>
                                <select className="form-control">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Role</label>
                                <select className="form-control">
                                    <option>Super Admin</option>
                                    <option>Admin</option>
                                    <option>Manager</option>
                                    <option>Executive</option>
                                    <option>Doctor</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>DOB</label>
                                <input type="date" className="form-control" placeholder="DOB"/>
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label>Mobile</label>
                                <input type="text" className="form-control" placeholder="Mobile"/>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <textarea className="form-control" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Pincode</label>
                                <input type="text" className="form-control" placeholder="Pincode"/>
                            </div>

                            <div className="form-group">
                                <label>Blood Group</label>
                                <input type="text" className="form-control" placeholder="Blood Group"/>
                            </div>
                            <div className="form-group">
                                <label>Designation</label>
                                <input type="text" className="form-control" placeholder="Designation"/>
                            </div>
                            <div className="form-group">
                                <label>Photo</label>
                                <input type="file"></input>
                            </div>
                        </CardText>
                        <CardActions>
                            <RaisedButton label="Update" primary={true} style={style} className="pull-right"/>
                        </CardActions>
                    </Card>

                </div>
            </div>
        )
    }
});

export default Redux.connect()(Profile);

// <div className="col-lg-6">
//     <form>
//         <div className="panel panel-default">
//             <div className="panel-heading">
//                 <h3 className="panel-title">Edit</h3>
//             </div>
//             <div className="panel-body">
//                 <div className="thumbnail text-center">
//                     <label >Full Name</label>
//                     <img src={require('app/images/murali.jpg')} className="img-circle image_universal"></img>
//                     <span >hhhh</span>
//                 </div>
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
//                 <button type="submit" className="btn btn-success">Update</button>
//             </div>
//         </div>
//     </form>
// </div>
