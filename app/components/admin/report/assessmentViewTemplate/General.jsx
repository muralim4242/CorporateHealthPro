import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var General = React.createClass({
    render() {
        return (
            <div>
                <h1>General Detail</h1>
            </div>
        )
    }
});

export default Redux.connect()(General);
