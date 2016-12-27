import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
var {Link} = require("react-router");
import ContentBodyHeader from 'common/ContentBodyHeader';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import CoporateHealthProAPI from 'CoporateHealthProAPI';
const style = {
    margin: 12
};

export var CampAdd = React.createClass({
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
            CoporateHealthProAPI.getCampDataById(this.props.params.corId,this.props.params.id).then(function(response) {
                //    console.log(response);
                //      console.log(actions.setIndCorporateData(response));
                dispatch({
                    type: "SET_FORM",
                    data: response,
                    validationData: {
                        required: {
                            current: [],
                            required: ["name", "startDate", "endDate"]
                        },
                        pattern: {
                            current: [],
                            required: []
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
                        required: ["name", "startDate", "endDate"]
                    },
                    pattern: {
                        current: [],
                        required: []
                    }
                }
            });
            dispatch({type: "HANDLE_CHANGE", property: "startDate", value: new Date(), isRequired: true, pattern: ""});
            dispatch({type: "SET_REFRESH_INDICATOR_STATE", refreshIndicator: "hide"})
        }
    },
    handleChange(e, name, isRequired, pattern) {
        let {dispatch} = this.props;
        dispatch({type: "HANDLE_CHANGE", property: name, value: e.target.value, isRequired: isRequired, pattern: pattern});
    },
    addCamp() {
        let {camp, dispatch} = this.props;
        let {corId} = this.props.params;
        CoporateHealthProAPI.addCamp(corId,camp).then(function(response) {
            alert("successfully added");
            // dispatch({type:"SET_SNACKBAR",snackbar:{open:true,text:"successfully added"}});
            hashHistory.push("/Admin/Camp/" + corId + "/List");

        }, function(err) {
            alert(err);
        });
    },
    render() {
      var {camp, dispatch, fieldErrors, isFormValid} = this.props;
      var {addCamp} = this;
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <Card>
                    <CardText>
                        <div className="form-group">
                            <TextField errorText={fieldErrors.name
                                ? fieldErrors.name
                                : ""} hintText="Camp Name" floatingLabelText="Medical Camp Name" fullWidth={true} value={camp.name} onChange={(e) => this.handleChange(e, "name", true, "")}/>
                        </div>
                        <div className="form-group">
                            <DatePicker errorText={fieldErrors.startDate
                                ? fieldErrors.startDate
                                : ""} defaultDate={camp.startDate
                                ? new Date(camp.startDate)
                                : new Date()} hintText="Date" floatingLabelText="Start Date" fullWidth={true} onChange={(nothing, date) => dispatch({type: "HANDLE_CHANGE", property: "startDate", value: date, isRequired: true, pattern: ""})}/>
                        </div>
                        <div className="form-group">
                            <DatePicker errorText={fieldErrors.endDate
                                ? fieldErrors.endDate
                                : ""}  hintText="Date" floatingLabelText="End Date" fullWidth={true} onChange={(nothing, date) => dispatch({type: "HANDLE_CHANGE", property: "endDate", value: date, isRequired: true, pattern: ""})}/>
                        </div>
                    </CardText>
                    <CardActions>
                        <Link to={'/Admin/Camp/'+this.props.params.corId+'/List'}>
                            <RaisedButton label="Back" secondary={true} style={style}/>
                        </Link>
                        {this.props.params.id
                            ? <RaisedButton disabled={!isFormValid} label="Update" primary={true} style={style} className="pull-right"/>
                            : <RaisedButton disabled={!isFormValid} label="Submit" primary={true} style={style} onClick={addCamp} className="pull-right"/>}
                    </CardActions>
                </Card>

            </div>
        )
    }
});

export default Redux.connect((state) => {
    return {camp: state.form.form, fieldErrors: state.form.fieldErrors, isFormValid: state.form.isFormValid};
})(CampAdd);

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
