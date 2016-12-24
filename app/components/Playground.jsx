import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import TextField from 'material-ui/TextField';

export var Playground = React.createClass({
    render() {
        return (
            <div className="container_fluid">
                <div className="row">
                    <div className="col-md-6">
                        <TextField hintText="F name" floatingLabelText="Full Name"/>
                    </div>
                    <div className="col-md-6">
                        <TextField hintText="F name" floatingLabelText="Full Name"/>
                    </div>

                </div>
            </div>
        )
    }
});

export default Redux.connect()(Playground);
