import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
var {Link} = require("react-router");
var store = require('configureStore');
import ContentBodyHeader from 'common/ContentBodyHeader';
import CoporateHealthProAPI from 'CoporateHealthProAPI';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {hashHistory} from 'react-router';
const style = {
    margin: 12
};

export var CorporateAdd = React.createClass({
    componentWillUnmount: function() {
        //   let {dispatch}=this.props;
        //   dispatch({type:"SET_SNACKBAR",snackbar:{open:false,text:""}});
    },
    componentDidMount: function() {
        var {dispatch} = this.props;
        if (this.props.params.id) {

            //   console.log(this.props.params.id);
            dispatch({type: "SET_REFRESH_INDICATOR_STATE", refreshIndicator: "loading"})
            CoporateHealthProAPI.getCorporateDataById(this.props.params.id).then(function(response) {
                //      console.log(response);
                //      console.log(actions.setIndCorporateData(response));
                dispatch({
                    type: "SET_FORM",
                    data: response,
                    validationData: {
                        required: {
                            current: [],
                            required: [
                                "name",
                                "representativeName",
                                "address",
                                "pincode",
                                "branchName",
                                "aboutCompany"
                            ]
                        },
                        pattern: {
                            current: [],
                            required: ["pincode"]
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
                            "name",
                            "representativeName",
                            "address",
                            "pincode",
                            "branchName",
                            "aboutCompany"
                        ]
                    },
                    pattern: {
                        current: [],
                        required: ["pincode"]
                    }
                }
            });
            dispatch({type: "SET_REFRESH_INDICATOR_STATE", refreshIndicator: "hide"})
        }
    },
    handleChange(e, name, isRequired, pattern) {
        let {dispatch} = this.props;
        dispatch({type: "HANDLE_CHANGE", property: name, value: e.target.value, isRequired: isRequired, pattern: pattern});
    },
    addCorporate() {
        let {corporate, dispatch} = this.props;
        CoporateHealthProAPI.addCorporate(corporate).then(function(response) {
            alert("successfully added");
            // dispatch({type:"SET_SNACKBAR",snackbar:{open:true,text:"successfully added"}});
            hashHistory.push("/Admin/Corporate/List");

        }, function(err) {
            alert(err);
        });
    },
    render() {
        var {corporate, dispatch, fieldErrors, isFormValid} = this.props;
        var {addCorporate} = this;
        // console.log(corporate);
        // console.log(addCorporate);
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>

                <form>
                    <Card>
                        <CardText>
                            <div className="form-group">
                                <TextField hintText="Name" errorText={fieldErrors.name
                                    ? fieldErrors.name
                                    : ""} value={corporate.name} floatingLabelText="Corporate Name" fullWidth={true} onChange={(e) => this.handleChange(e, "name", true, "")}/>
                            </div>
                            <div className="form-group">
                                <TextField hintText="Name" errorText={fieldErrors.representativeName
                                    ? fieldErrors.representativeName
                                    : ""} value={corporate.representativeName} floatingLabelText="MD/HR Name" fullWidth={true} onChange={(e) => this.handleChange(e, "representativeName", true, "")}/>
                            </div>
                            <div className="form-group">
                                <TextField hintText="Address" errorText={fieldErrors.address
                                    ? fieldErrors.address
                                    : ""} value={corporate.address
                                    ? corporate.address.address
                                    : ""} floatingLabelText="Corporate Address" multiLine={true} rows={2} fullWidth={true} onChange={(e) => dispatch({
                                    type: "HANDLE_CHANGE_NEXT_ONE",
                                    property: "address",
                                    propertyOne: "address",
                                    value: e.target.value,
                                    isRequired: true,
                                    pattern: ""
                                })}/>
                            </div>
                            <div className="form-group">
                                <TextField errorText={fieldErrors.pincode
                                    ? fieldErrors.pincode
                                    : ""} hintText="Pincode" type="number" value={corporate.address
                                    ? corporate.address.pincode
                                    : ""} floatingLabelText="Pincode" fullWidth={true} onChange={(e) => dispatch({
                                    type: "HANDLE_CHANGE_NEXT_ONE",
                                    property: "address",
                                    propertyOne: "pincode",
                                    value: e.target.value,
                                    isRequired: true,
                                    pattern: /[0-9]{6}/g
                                })}/>
                            </div>
                            <div className="form-group">
                                <TextField errorText={fieldErrors.branchName
                                    ? fieldErrors.branchName
                                    : ""} hintText="Branch Name" value={corporate.branchName} floatingLabelText="Branch Name" fullWidth={true} onChange={(e) => this.handleChange(e, "branchName", true, "")}/>
                            </div>
                            <div className="form-group">
                                <TextField errorText={fieldErrors.aboutCompany
                                    ? fieldErrors.aboutCompany
                                    : ""} hintText="Says" value={corporate.aboutCompany} floatingLabelText="MD/HR Say" multiLine={true} rows={2} fullWidth={true} onChange={(e) => this.handleChange(e, "aboutCompany", true, "")}/>
                            </div>

                            <div className="form-group">
                                <label>Logo</label>
                                <input type="file"></input>
                            </div>
                            <div className="form-group">
                                <label>MD/HR Photo</label>
                                <input type="file"></input>
                            </div>
                            <div className="form-group">
                                <label>MD/HR Signature</label>
                                <input type="file"></input>
                            </div>
                        </CardText>
                        <CardActions>

                            <Link to='/Admin/Corporate/List'>
                                <RaisedButton label="Back" secondary={true} style={style}/>
                            </Link>
                            {this.props.params.id
                                ? <RaisedButton disabled={!isFormValid} label="Update" primary={true} style={style} className="pull-right"/>
                                : <RaisedButton disabled={!isFormValid} label="Submit" primary={true} style={style} onClick={addCorporate} className="pull-right"/>}

                        </CardActions>
                    </Card>
                </form>

            </div>
        )
    }
});

export default Redux.connect((state) => {
    return {corporate: state.form.form, fieldErrors: state.form.fieldErrors, isFormValid: state.form.isFormValid};
})(CorporateAdd);

// <div className="panel panel-default">
//     <div className="panel-heading">
//         <h3 className="panel-title">Add/Edit</h3>
//     </div>
//     <div className="panel-body">
//         <div className="form-group">
//             <label>Name</label>
//             <input type="text" className="form-control" placeholder="Name"/>
//         </div>
//         <div className="form-group">
//             <label>MD/HR</label>
//             <input type="text" className="form-control" placeholder="MD/HR"/>
//         </div>
//         <div className="form-group">
//             <label>Email address</label>
//             <input type="email" className="form-control" placeholder="Email"/>
//         </div>
//         <div className="form-group">
//             <label>Address</label>
//             <textarea className="form-control" rows="3"></textarea>
//         </div>
//         <div className="form-group">
//             <label>MD/HR Say</label>
//             <textarea className="form-control" rows="3"></textarea>
//         </div>
//
//         <div className="form-group">
//             <label>Logo</label>
//             <input type="file"></input>
//         </div>
//         <div className="form-group">
//             <label>MD/HR Photo</label>
//             <input type="file"></input>
//         </div>
//     </div>
//     <div className="panel-footer">
//         <Link to='/Admin/Corporate/List' className="btn btn-danger">
//             Back</Link>
//         <button type="submit" className="btn btn-success pull-right">Submit</button>
//     </div>
// </div>
//
// <div className="file_input_div">
//     <div className="file_input">
//         <label className="image_input_button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored">
//             <i className="material-icons">file_upload</i>
//             <input id="file_input_file" className="none" type="file"/>
//         </label>
//     </div>
//     <div id="file_input_text_div" className="mdl-textfield mdl-js-textfield textfield-demo">
//         <input className="file_input_text mdl-textfield__input" type="text" disabled readOnly id="file_input_text"/>
//         <label className="mdl-textfield__label" htmlFor="file_input_text"></label>
//     </div>
// </div>
