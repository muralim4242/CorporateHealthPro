import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import CoporateHealthProAPI from 'CoporateHealthProAPI';
import ContentBodyHeader from 'common/ContentBodyHeader';
import {Tabs, Tab} from 'material-ui/Tabs';
import {blue500} from 'material-ui/styles/colors';
import {Card,  CardText, CardActions,CardHeader} from 'material-ui/Card';


const styles = {
    headline: {
        fontSize: 40,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
        textAlign:"center"
    }
};


export var Dashboard = React.createClass({
    componentDidMount: function() {
        var {dispatch} = this.props;
        // dispatch(actions.setDashboardData(CoporateHealthProAPI.getDashboardData()));
        CoporateHealthProAPI.getDashboardData().then(function(response) {
      //      console.log(response+":response");
            dispatch(actions.setDashboardData(response));
            dispatch({type:"SET_REFRESH_INDICATOR_STATE",refreshIndicator:"hide"})
        }, function(err) {
            alert(err);
        });
    },
    render() {
        var {companiesCount, usersCount} = this.props;
        const renderBody=function()
        {
          if(companiesCount&&usersCount)
          {
              return (


                <div className="row">

                    <div className="col-lg-3 col-md-6">
                      <Card>
                        <CardHeader>
                          <div className="row">
                              <div className="col-xs-3">
                                  <i className="glyphicon glyphicon-user"></i>
                              </div>

                              <div className="col-xs-9 text-right">
                                  <div className="huge">{companiesCount}</div>
                                  <div>Total Corporate!</div>
                              </div>
                          </div>
                        </CardHeader>
                        <CardText>
                          <span className="pull-left">View Details</span>
                          <span className="pull-right">
                              <i className="glyphicon glyphicon-user"></i>
                          </span>
                          <div className="clearfix"></div>
                        </CardText>
                      </Card>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <Card>
                        <CardHeader>
                          <div className="row">
                              <div className="col-xs-3">
                                  <i className="glyphicon glyphicon-user"></i>
                              </div>

                              <div className="col-xs-9 text-right">
                                  <div className="huge">{usersCount}</div>
                                  <div>Total Users!</div>
                              </div>
                          </div>
                        </CardHeader>
                        <CardText>
                          <span className="pull-left">View Details</span>
                          <span className="pull-right">
                              <i className="glyphicon glyphicon-user"></i>
                          </span>
                          <div className="clearfix"></div>
                        </CardText>
                      </Card>
                      
                    </div>
                </div>

              )
          }
          else {
            return (
              <div  className="text-center">


              </div>
            )
          }
        };
        return (

            <div>
                <div className="container-fluid">
                    <ContentBodyHeader path={this.props.location.pathname}/>
                    <br/>
                    {renderBody()}
                </div>
            </div>
        )
    }
});

export default Redux.connect((state) => {
    return {companiesCount: state.dashboardData.companiesCount, usersCount: state.dashboardData.usersCount}
})(Dashboard);

//
// <div className="page-header">
//     <h2>Shortcuts</h2>
// </div>
// <div className="row">
//     <div className="col-lg-3 col-md-6">
//         <div className="panel panel-primary">
//             <div className="panel-heading">
//                 <div className="row">
//                     <div className="col-xs-3">
//                         <i className="glyphicon glyphicon-user"></i>
//                     </div>
//
//                     <div className="col-xs-9 text-right">
//                         <div className="huge">26</div>
//                         <div>New Comments!</div>
//                     </div>
//                 </div>
//             </div>
//             <a href="#">
//                 <div className="panel-footer">
//                     <span className="pull-left">View Details</span>
//                     <span className="pull-right">
//                         <i className="glyphicon glyphicon-user"></i>
//                     </span>
//                     <div className="clearfix"></div>
//                 </div>
//             </a>
//         </div>
//     </div>
//     <div className="col-lg-3 col-md-6">
//         <div className="panel panel-red">
//             <div className="panel-heading">
//                 <div className="row">
//                     <div className="col-xs-3">
//                         <i className="glyphicon glyphicon-user"></i>
//                     </div>
//
//                     <div className="col-xs-9 text-right">
//                         <div className="huge">18</div>
//                         <div>New Task</div>
//                     </div>
//                 </div>
//             </div>
//             <a href="#">
//                 <div className="panel-footer">
//                     <span className="pull-left">View Details</span>
//                     <span className="pull-right">
//                         <i className="glyphicon glyphicon-user"></i>
//                     </span>
//                     <div className="clearfix"></div>
//                 </div>
//             </a>
//         </div>
//     </div>
//     <div className="col-lg-3 col-md-6">
//         <div className="panel panel-yellow">
//             <div className="panel-heading">
//                 <div className="row">
//                     <div className="col-xs-3">
//                         <i className="glyphicon glyphicon-user"></i>
//                     </div>
//
//                     <div className="col-xs-9 text-right">
//                         <div className="huge">26</div>
//                         <div>New Comments!</div>
//                     </div>
//                 </div>
//             </div>
//             <a href="#">
//                 <div className="panel-footer">
//                     <span className="pull-left">View Details</span>
//                     <span className="pull-right">
//                         <i className="glyphicon glyphicon-user"></i>
//                     </span>
//                     <div className="clearfix"></div>
//                 </div>
//             </a>
//         </div>
//     </div>
// </div>

// <div className="page-header">
//     <h2>Statics</h2>
// </div>
// <div className="row">
//     <div className="col-lg-3 col-md-6">
//         <div className="panel panel-primary">
//             <div className="panel-heading">
//                 <div className="row">
//                     <div className="col-xs-3">
//                         <i className="glyphicon glyphicon-user"></i>
//                     </div>
//
//                     <div className="col-xs-9 text-right">
//                         <div className="huge">{companiesCount}</div>
//                         <div>Total Corporate!</div>
//                     </div>
//                 </div>
//             </div>
//             <a href="#">
//                 <div className="panel-footer">
//                     <span className="pull-left">View Details</span>
//                     <span className="pull-right">
//                         <i className="glyphicon glyphicon-user"></i>
//                     </span>
//                     <div className="clearfix"></div>
//                 </div>
//             </a>
//         </div>
//     </div>
//     <div className="col-lg-3 col-md-6">
//         <div className="panel panel-red">
//             <div className="panel-heading">
//                 <div className="row">
//                     <div className="col-xs-3">
//                         <i className="glyphicon glyphicon-user"></i>
//                     </div>
//
//                     <div className="col-xs-9 text-right">
//                         <div className="huge">{usersCount}</div>
//                         <div>Total Users</div>
//                     </div>
//                 </div>
//             </div>
//             <a href="#">
//                 <div className="panel-footer">
//                     <span className="pull-left">View Details</span>
//                     <span className="pull-right">
//                         <i className="glyphicon glyphicon-user"></i>
//                     </span>
//                     <div className="clearfix"></div>
//                 </div>
//             </a>
//         </div>
//     </div>
// </div>


// <Tabs>
//     <Tab label="Corporates">
//         <div>
//             <h2 style={styles.headline}>{companiesCount}</h2>
//
//         </div>
//     </Tab>
//     <Tab label="Users">
//         <div>
//             <h2 style={styles.headline}>{usersCount}</h2>
//
//         </div>
//     </Tab>
//
// </Tabs>
