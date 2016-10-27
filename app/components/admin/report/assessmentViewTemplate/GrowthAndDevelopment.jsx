import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var GrowthAndDevelopment = React.createClass({
    render() {
        return (
            <div>
                <h1>Growth And Development Detail</h1>
            </div>
        )
    }
});

export default Redux.connect()(GrowthAndDevelopment);
