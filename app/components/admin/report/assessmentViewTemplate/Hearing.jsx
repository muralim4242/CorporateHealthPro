import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Hearing = React.createClass({
    render() {
        return (
            <div>
                <h1>Hearing Detail</h1>
            </div>
        )
    }
});

export default Redux.connect()(Hearing);
