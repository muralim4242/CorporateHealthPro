import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {Link} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';
import CoporateHealthProAPI from 'CoporateHealthProAPI';
import {Card,  CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


export var AdminView = React.createClass({
  componentDidMount: function() {
      var {dispatch} = this.props;
   //   console.log(this.props.params.id);
      CoporateHealthProAPI.getUserDataById("admin",this.props.params.id).then(function(response) {
        //  console.log(response);
          //      console.log(actions.setIndCorporateData(response));
         dispatch(actions.setIndUserData(response));
           dispatch({type:"SET_REFRESH_INDICATOR_STATE",refreshIndicator:"hide"});
      }, function(err) {
          alert(err);
      });
  },
  render() {
      var {user,dispatch} = this.props;
 //     var {address}=user;
  //    console.log(user);
  //    console.log(address);
      var renderBody=function()
      {
          if(user)
          {
              return (
                <div className="row">
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="thumbnail text-center">
                                    <label >Full Name</label>
                                    <img src={user.logoPath} className="img-circle image_universal"></img>
                                    <span >{user.firstName +" "+user.lastName}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-lg-4">
                                <label>Gender</label>
                            </div>
                            <div className="col-lg-6">
                                <span>{user.gender}</span>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-4">
                                <label>Role</label>
                            </div>
                            <div className="col-lg-6">
                                <span>{user.roleName}</span>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-4">
                                <label>DOB</label>
                            </div>
                            <div className="col-lg-6">
                                <span>{user.dateOfBirth}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <label>Email Address</label>
                            </div>
                            <div className="col-lg-6">
                                <span>{user.userAdditionalInfo?user.userAdditionalInfo.emailId:null}</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <label>Mobil</label>
                            </div>
                            <div className="col-lg-6">
                                <span>{user.userAdditionalInfo?user.userAdditionalInfo.mobileNo:null}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <label>Address</label>
                            </div>
                            <div className="col-lg-6">
                                <span>{user.userAdditionalInfo?user.userAdditionalInfo.address?user.userAdditionalInfo.address.address:null:null}


                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <label>Pincode</label>
                            </div>
                            <div className="col-lg-6">
                                <span>{user.userAdditionalInfo?user.userAdditionalInfo.address?user.userAdditionalInfo.address.pincode:null:null}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <label>Blood group</label>
                            </div>
                            <div className="col-lg-6">
                                <span>{user.userAdditionalInfo?user.userAdditionalInfo.bloodGroup:null}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <label>Designation</label>
                            </div>
                            <div className="col-lg-6">
                                <span>{user.userAdditionalInfo?user.userAdditionalInfo.designation:null}</span>
                            </div>
                        </div>
                    </div>
                </div>
              );
          }
          else
          {
              return (<strong className="text-center">No Data</strong>);
          }
      };
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <Card>
                    <CardText>
                          {renderBody()}
                    </CardText>
                    <CardActions>
                      <div className="row">
                          <div className="col-lg-2 ">
                              <Link to='/Admin/Users/Admin/List' className="pull-left">
                                  <RaisedButton primary={true} label="Back"/></Link>
                          </div>
                          <div className="col-lg-4 col-lg-offset-6">
                              <div className="pull-right">
                                  <Link to={'Admin/Users/Admin/Edit/'+ this.props.params.id}>
                                        <RaisedButton  label="Edit"/></Link>
                                        <RaisedButton secondary={true} onTouchTap={() => {
                                            dispatch({type: "SET_DELETE_MODAL_STATE", isDeleteModalOpen: true})
                                        }}  label="Delete"/>
                              </div>
                          </div>
                      </div>
                    </CardActions>
                </Card>
            </div>
        )
    }
});

export default Redux.connect((state) => {
    return state.user;
})(AdminView);


// <div className="col-lg-8">
//     <div className="panel panel-default">
//         <div className="panel-heading">
//             View
//         </div>
//         <div className="panel-body">
//             {renderBody()}
//         </div>
//         <div className="panel-footer">
//             <div className="row">
//                 <div className="col-lg-2 ">
//
//                   <Link to='/Admin/Users/Admin/List' className="btn btn-primary pull-left">
//                     Back</Link>
//
//                 </div>
//                 <div className="col-lg-4 col-lg-offset-6">
//                     <div className="pull-right">
//                       <Link to={'/Admin/Users/Admin/Edit/'+ this.props.params.id} className="btn btn-success">
//                         Edit</Link>
//                         <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#deleteModal">Delete</button>
//                     </div>
//
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
