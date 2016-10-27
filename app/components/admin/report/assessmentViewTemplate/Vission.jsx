import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Vission = React.createClass({
    render() {
        return (
            <div>
                <h1>Vission Detail</h1>
            </div>
        )
    }
});

export default Redux.connect()(Vission);
