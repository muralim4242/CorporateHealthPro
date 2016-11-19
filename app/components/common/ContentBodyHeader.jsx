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
                      <ol className="breadcrumb" style={{background:"#8e44ad",color:"white"}}>
                          <li className="active" style={{color:"white"}}>
                              <i className="glyphicon glyphicon-user"></i>
                              {" "+pathSplit[2] +" / "+((pathSplit[3])?pathSplit[3]+" / ":"") +((pathSplit[4])?pathSplit[4]+" / ":"")+((pathSplit[5])?pathSplit[5]+" / ":"")+((pathSplit[6])?pathSplit[6]+" / ":"")}
                          </li>
                      </ol>
                  </div>
              </div>

            </div>
        )
    }
});

export default Redux.connect()(ContentBodyHeader);
