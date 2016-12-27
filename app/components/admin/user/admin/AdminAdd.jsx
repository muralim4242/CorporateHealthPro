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
import {hashHistory} from 'react-router';
import CoporateHealthProAPI from 'CoporateHealthProAPI';
const style = {
    margin: 12
};

export var AdminAdd = React.createClass({
    componentWillUnmount: function() {
        //   let {dispatch}=this.props;
        //   dispatch({type:"SET_SNACKBAR",snackbar:{open:false,text:""}});
    },
    componentDidMount: function() {
        var {dispatch} = this.props;
        if (this.props.params.id) {

            // console.log(this.props.location.pathname.split('/')[3]);
            //   console.log(this.props.params.id);
            dispatch({type: "SET_REFRESH_INDICATOR_STATE", refreshIndicator: "loading"})
            CoporateHealthProAPI.getUserDataById(this.props.location.pathname.split('/')[3] == "Corporate"
                ? "corporate"
                : "admin", this.props.params.id).then(function(response) {
                //    console.log(response);
                //      console.log(actions.setIndCorporateData(response));
                dispatch({
                    type: "SET_FORM",
                    data: response,
                    validationData: {
                        required: {
                            current: [],
                            required: [
                                "firstName",
                                "lastName",
                                "gender",
                                "roleName",
                                "dateOfBirth",
                                "emailId",
                                "mobileNo",
                                "address",
                                "pincode",
                                "bloodGroup"
                            ]
                        },
                        pattern: {
                            current: [],
                            required: ["emailId", "mobileNo", "pincode"]
                        }
                    }
                });
                dispatch({type: "SET_REFRESH_INDICATOR_STATE", refreshIndicator: "hide"})
            }, function(err) {
                alert(err);
            });
        } else {
            dispatch({type: "SET_REFRESH_INDICATOR_STATE", refreshIndicator: "loading"})
            dispatch({
                type: "RESET_STATE",
                validationData: {
                    required: {
                        current: [],
                        required: [
                            "firstName",
                            "lastName",
                            "gender",
                            "roleName",
                            "dateOfBirth",
                            "emailId",
                            "mobileNo",
                            "address",
                            "pincode",
                            "bloodGroup"
                        ]
                    },
                    pattern: {
                        current: [],
                        required: ["emailId", "mobileNo", "pincode"]
                    }
                }
            });
            dispatch({
                type: "HANDLE_CHANGE",
                property: "dateOfBirth",
                value: new Date(),
                isRequired: true,
                pattern: ""
            });
            dispatch({type: "SET_REFRESH_INDICATOR_STATE", refreshIndicator: "hide"})
        }
    },
    handleChange(e, name, isRequired, pattern) {
        let {dispatch} = this.props;
        dispatch({type: "HANDLE_CHANGE", property: name, value: e.target.value, isRequired: isRequired, pattern: pattern});
    },
    addAdmin() {
        let {admin, dispatch} = this.props;
        let userType = this.props.location.pathname.split('/')[3];
        if (userType == "Corporate") {
            admin = {
                ...admin,
                "company": {
                    "id": this.props.params.corId
                }
            };
        };
        CoporateHealthProAPI.addUser(this.props.location.pathname.split('/')[3] == "Corporate"
            ? "corporate"
            : "admin", admin).then(function(response) {
            alert("successfully added");
            // dispatch({type:"SET_SNACKBAR",snackbar:{open:true,text:"successfully added"}});
            hashHistory.push(userType == "Corporate"
                ? "/Admin/Users/Corporate/" + this.props.params.corId + "/List"
                : "/Admin/Users/Admin/List");

        }, function(err) {
            alert(err);
        });
    },
    render() {
        const genders = ['MALE', 'FEMALE'];
        const rolesForAdmin = ["ADMIN", "MANAGER", "DOCTOR","DATAENTRY"];

        var {admin, dispatch, fieldErrors, isFormValid} = this.props;
        var {addAdmin} = this;
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <form>
                    <Card>
                        <CardText>
                            <div className="form-group">
                                <TextField errorText={fieldErrors.firstName
                                    ? fieldErrors.firstName
                                    : ""} hintText="Name" floatingLabelText="First Name" fullWidth={true} value={admin.firstName} onChange={(e) => this.handleChange(e, "firstName", true, "")}/>
                            </div>
                            <div className="form-group">
                                <TextField errorText={fieldErrors.lastName
                                    ? fieldErrors.lastName
                                    : ""} hintText="Name" floatingLabelText="Last Name" fullWidth={true} value={admin.lastName} onChange={(e) => this.handleChange(e, "lastName", true, "")}/>
                            </div>
                            <div className="form-group">
                                <AutoComplete errorText={fieldErrors.gender
                                    ? fieldErrors.gender
                                    : ""} searchText={admin.gender} floatingLabelText="Gender" filter={AutoComplete.noFilter} openOnFocus={true} dataSource={genders} fullWidth={true} onNewRequest={(val, obj) => dispatch({type: "HANDLE_CHANGE", property: "gender", value: val, isRequired: true, pattern: ""})}/>
                            </div>
                            <div className="form-group">
                                <AutoComplete errorText={fieldErrors.roles
                                    ? fieldErrors.roles
                                    : ""} searchText={admin.roleName} floatingLabelText="Roles" filter={AutoComplete.noFilter} openOnFocus={true} dataSource={roles} fullWidth={true} onNewRequest={(val, obj) => dispatch({type: "HANDLE_CHANGE", property: "roleName", value: val, isRequired: true, pattern: ""})}/>
                            </div>
                            <div className="form-group">
                                <DatePicker errorText={fieldErrors.dateOfBirth
                                    ? fieldErrors.dateOfBirth
                                    : ""} defaultDate={admin.dateOfBirth
                                    ? new Date(admin.dateOfBirth)
                                    : new Date()} hintText="DOB" floatingLabelText="DOB" fullWidth={true} onChange={(nothing, date) => dispatch({type: "HANDLE_CHANGE", property: "dateOfBirth", value: date, isRequired: true, pattern: ""})}/>
                            </div>
                            <div className="form-group">
                                <TextField errorText={fieldErrors.emailId
                                    ? fieldErrors.emailId
                                    : ""} hintText="Email" floatingLabelText="Email" type="email" fullWidth={true} value={admin.userAdditionalInfo
                                    ? admin.userAdditionalInfo.emailId
                                    : ""} onChange={(e) => dispatch({
                                    type: "HANDLE_CHANGE_NEXT_ONE",
                                    property: "userAdditionalInfo",
                                    propertyOne: "emailId",
                                    value: e.target.value,
                                    isRequired: true,
                                    pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
                                })}/>
                            </div>
                            <div className="form-group">
                                <TextField errorText={fieldErrors.mobileNo
                                    ? fieldErrors.mobileNo
                                    : ""} hintText="Mobile" floatingLabelText="Contact Number" type="number" fullWidth={true} value={admin.userAdditionalInfo
                                    ? admin.userAdditionalInfo.mobileNo
                                    : ""} onChange={(e) => dispatch({
                                    type: "HANDLE_CHANGE_NEXT_ONE",
                                    property: "userAdditionalInfo",
                                    propertyOne: "mobileNo",
                                    value: e.target.value,
                                    isRequired: true,
                                    pattern: /[0-9]{10}/g
                                })}/>
                            </div>
                            <div className="form-group">
                                <TextField errorText={fieldErrors.address
                                    ? fieldErrors.address
                                    : ""} hintText="Address" floatingLabelText="Address" multiLine={true} rows={2} fullWidth={true} value={admin.userAdditionalInfo
                                    ? admin.userAdditionalInfo.address
                                        ? admin.userAdditionalInfo.address.address
                                        : ""
                                    : ""} onChange={(e) => dispatch({
                                    type: "HANDLE_CHANGE_NEXT_TWO",
                                    property: "userAdditionalInfo",
                                    propertyOne: "address",
                                    propertyTwo: "address",
                                    value: e.target.value,
                                    isRequired: true,
                                    pattern: ""
                                })}/>
                            </div>
                            <div className="form-group">
                                <TextField errorText={fieldErrors.pincode
                                    ? fieldErrors.pincode
                                    : ""} hintText="Pincode" floatingLabelText="Pincode" type="number" fullWidth={true} value={admin.userAdditionalInfo
                                    ? admin.userAdditionalInfo.address
                                        ? admin.userAdditionalInfo.address.pincode
                                        : ""
                                    : ""} onChange={(e) => dispatch({
                                    type: "HANDLE_CHANGE_NEXT_TWO",
                                    property: "userAdditionalInfo",
                                    propertyOne: "address",
                                    propertyTwo: "pincode",
                                    value: e.target.value,
                                    isRequired: true,
                                    pattern: /[0-9]{6}/g
                                })}/>
                            </div>

                            <div className="form-group">
                                <TextField errorText={fieldErrors.bloodGroup
                                    ? fieldErrors.bloodGroup
                                    : ""} hintText="Blood Group" floatingLabelText="Blood Group" fullWidth={true} value={admin.userAdditionalInfo
                                    ? admin.userAdditionalInfo.bloodGroup
                                    : ""} onChange={(e) => dispatch({
                                    type: "HANDLE_CHANGE_NEXT_ONE",
                                    property: "userAdditionalInfo",
                                    propertyOne: "bloodGroup",
                                    value: e.target.value,
                                    isRequired: true,
                                    pattern: ""
                                })}/>
                            </div>
                            <div className="form-group">
                                <label>Photo</label>
                                <input type="file"></input>
                            </div>

                        </CardText>
                        <CardActions>
                            <Link to={this.props.location.pathname.split('/')[3] == "Corporate"
                                ? "/Admin/Users/Corporate/" + this.props.params.corId + "/List"
                                : "/Admin/Users/Admin/List"}>
                                <RaisedButton label="Back" secondary={true} style={style}/>
                            </Link>
                            {this.props.params.id
                                ? <RaisedButton disabled={!isFormValid} label="Update" primary={true} style={style} className="pull-right"/>
                                : <RaisedButton disabled={!isFormValid} label="Submit" primary={true} style={style} onClick={addAdmin} className="pull-right"/>}

                        </CardActions>
                    </Card>
                </form>
            </div>
        )
    }
});

export default Redux.connect((state) => {
    return {admin: state.form.form, fieldErrors: state.form.fieldErrors, isFormValid: state.form.isFormValid};
})(AdminAdd);

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
