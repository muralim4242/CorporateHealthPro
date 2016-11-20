import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
var {Link} = require("react-router");
import ContentBodyHeader from 'common/ContentBodyHeader';
import CoporateHealthProAPI from 'CoporateHealthProAPI';

export var CorporateListForUsersAdd = React.createClass({
  componentDidMount: function() {
      var {dispatch} = this.props;
      CoporateHealthProAPI.getCorporateData().then(function(response) {
          //    console.log(dispatch(actions.setCorporateData(response)));
          dispatch(actions.setCorporateData(response));
      }, function(err) {
          alert(err);
      });
  },
    render() {
      var {list} = this.props;
      console.log(this.props.location.pathname.split('/')[2]);
      var path=this.props.location.pathname.split('/')[2];
    //  var pathSplit=this.props.path.split('/');
    //  console.log(pathSplit[3]);
      // var path='/Admin/Users/Coporate/' + corporate.id + '/List';
      // if(this.props.location.pathname.split('/')[2]=="Users")
      // {
      //
      // }

      //    console.log(this.props);
  //    debugger;
 //        console.log(list);
      var findPath=function(corId)
      {
        if(path=="Users")
        {
            return '/Admin/Users/Coporate/' + corId + '/List';
        }
        else {
            return '/Admin/Camp/' + corId + '/List';
        }
        //  console.log(corId);
      };

      var renderList = function() {
          if (!list) {
              return (
                  <tr>
                      <td className="text-center" colSpan="8">No corporate data</td>
                  </tr>
              );
          }

          return list.map((corporate) => {
              return (
                  <tr key={corporate.id}>
                      <td>{corporate.id}</td>
                      <td>
                          <img width="50px" src={corporate.companyLogoPath} className="img-responsiv"></img>
                      </td>
                      <td>{corporate.name}</td>
                      <td>{corporate.representativeName}</td>
                        <td>
                            <Link to={findPath(corporate.id)} className="btn btn-success btn-sm">
                                Add Users</Link>
                        </td>
                  </tr>
              )
          })
      };
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <div className="col-lg-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-lg-1">
                                    <lable>
                                        Search</lable>
                                </div>
                                <div className="col-lg-9">
                                    <input type="text" className="form-control" placeholder="Search"></input>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Log</th>
                                        <th>Name</th>
                                        <th>MD/HR</th>
                                        <th>Add Users</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderList()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect((state) => {
    return state.corporate
})(CorporateListForUsersAdd);
