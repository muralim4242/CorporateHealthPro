import React from 'react';
import * as Redux from 'react-redux';
import {hashHistory} from 'react-router';

import * as actions from 'actions';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export var Login = React.createClass({
    onLogin() {

        // if(this.refs.name.value===)
        // {
        // }
        hashHistory.push('/Admin');
        // var {dispatch} = this.props;
        //
        // dispatch(actions.startLogin());
    },
    render() {
        return (
            <div>
                <div className="row login">
                    <form className="col-lg-4 col-lg-offset-4">
                        <Card>
                            <CardText>
                                <h2 className="text-center">Login</h2>
                                <div className="form-group">
                                    <TextField hintText="Enter your Passcode" floatingLabelText="Passcode" fullWidth={true}/>
                                </div>
                            </CardText>
                            <CardActions>
                                  <RaisedButton label="Login" onClick={this.onLogin} secondary={true} fullWidth={true}/>
                            </CardActions>
                        </Card>
                    </form>
                </div>
            </div>
        );
    }
});

export default Redux.connect()(Login);

// <div className="panel panel-default">
//     <div className="panel-heading">
//         <h3 className="panel-title">Login</h3>
//     </div>
//     <div className="panel-body">
//         <div className="form-group">
//             <label>Passcode</label>
//             <input type="Password" className="form-control" ref="Passcode" placeholder="Passcode"/>
//         </div>
//
//     </div>
//     <div className="panel-footer text-right">
//         <button type="button" onClick={this.onLogin} className="btn btn-success">Login</button>
//     </div>
// </div>
