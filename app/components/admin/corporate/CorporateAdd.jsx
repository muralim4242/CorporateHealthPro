import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
var {Link} = require("react-router");
import ContentBodyHeader from 'common/ContentBodyHeader';
import CoporateHealthProAPI from 'CoporateHealthProAPI';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const style = {
    margin: 12
};

export var CorporateAdd = React.createClass({
    componentDidMount: function() {
      // var fileInputTextDiv = document.getElementById('file_input_text_div');
      // var fileInput = document.getElementById('file_input_file');
      // var fileInputText = document.getElementById('file_input_text');
      //
      // fileInput.addEventListener('change', changeInputText);
      // fileInput.addEventListener('change', changeState);
      //
      // function changeInputText() {
      //     var str = fileInput.value;
      //     var i;
      //     if (str.lastIndexOf('\\')) {
      //         i = str.lastIndexOf('\\') + 1;
      //     } else if (str.lastIndexOf('/')) {
      //         i = str.lastIndexOf('/') + 1;
      //     }
      //     fileInputText.value = str.slice(i, str.length);
      // }
      //
      // function changeState() {
      //     if (fileInputText.value.length != 0) {
      //         if (!fileInputTextDiv.classList.contains("is-focused")) {
      //             fileInputTextDiv.classList.add('is-focused');
      //         }
      //     } else {
      //         if (fileInputTextDiv.classList.contains("is-focused")) {
      //             fileInputTextDiv.classList.remove('is-focused');
      //         }
      //     }
      // }
        var {dispatch} = this.props;
        if (this.props.params.id) {

            //   console.log(this.props.params.id);
            dispatch({type: "SET_REFRESH_INDICATOR_STATE", refreshIndicator: "loading"})
            CoporateHealthProAPI.getCorporateDataById(this.props.params.id).then(function(response) {
                //    console.log(response);
                //      console.log(actions.setIndCorporateData(response));
                dispatch(actions.setIndCorporateData(response));
                dispatch({type: "SET_REFRESH_INDICATOR_STATE", refreshIndicator: "hide"})
            }, function(err) {
                alert(err);
            });
        } else {
            dispatch({type: "SET_REFRESH_INDICATOR_STATE", refreshIndicator: "loading"})
            dispatch(actions.setIndCorporateData({}));
            dispatch({type: "SET_REFRESH_INDICATOR_STATE", refreshIndicator: "hide"})
        }
    },
    addCorporate(e)
    {

    //    CoporateHealthProAPI.addCorporate({})
    },
    render() {
        var {corporate, dispatch} = this.props;
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>

                <form>
                    <Card>
                        <CardText>
                            <div className="form-group">
                                <TextField hintText="Name" value={corporate.name} floatingLabelText="Corporate Name" fullWidth={true}/>
                            </div>
                            <div className="form-group">
                                <TextField hintText="Name" value={corporate.representativeName} floatingLabelText="MD/HR Name" fullWidth={true}/>
                            </div>
                            <div className="form-group">
                                <TextField hintText="Address" value={corporate.address
                                    ? corporate.address.address
                                    : " "} floatingLabelText="Corporate Address" multiLine={true} rows={2} fullWidth={true}/>
                            </div>
                            <div className="form-group">
                                <TextField hintText="Pincode" type="number" value={corporate.address
                                    ?  corporate.address.pincode
                                    : " "} floatingLabelText="Pincode" fullWidth={true}/>
                            </div>
                            <div className="form-group">
                                <TextField hintText="Says" value={corporate.aboutCompany} floatingLabelText="MD/HR Say" multiLine={true} rows={2} fullWidth={true}/>
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
                            {this.props.params.id?  <RaisedButton label="Update" primary={true} style={style} className="pull-right"/>:<RaisedButton label="Submit" primary={true} style={style} className="pull-right"/>}


                        </CardActions>
                    </Card>
                </form>

            </div>
        )
    }
});

export default Redux.connect((state) => {
    return state.corporate;
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
