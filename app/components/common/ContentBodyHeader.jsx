import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var ContentBodyHeader = React.createClass({
    render() {
      var pathSplit=this.props.path.split('/');
        return (
            <div>
              <div className="row">
                  <div className="col-lg-12">
                      <h1 className="page-header">{pathSplit[2]}</h1>
                      <ol className="breadcrumb">
                          <li className="active">
                              <i className="glyphicon glyphicon-user"></i>
                              {" "+pathSplit[2] +"/ "+pathSplit[3]+"/ "}
                          </li>
                      </ol>
                  </div>
              </div>

            </div>
        )
    }
});

export default Redux.connect()(ContentBodyHeader);
