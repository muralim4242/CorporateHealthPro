import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {Link} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';
import {Card,  CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export var CorporateView = React.createClass({
    render() {
      const {dispatch}=this.props;
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                  <Card>
                      <CardText>
                        <div className="row">
                                    <div className="col-lg-4">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="thumbnail text-center">
                                                    <label >Full Name</label>
                                                    <img src={require('app/images/murali.jpg')} className="img-circle image_universal"></img>
                                                    <span >hhhh</span>
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
                                                <span>Male</span>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <label>Role</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>Admin</span>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <label>DOB</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>02-07-1989</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <label>Email Address</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>muralim4242@gmail.com</span>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4">
                                                <label>Mobil</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>7795929033</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <label>Address</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>#84,1st floor,shaheen taj building, kote bheedi,4th street, varthur, bangalore- 560087</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <label>Pincode</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>560087</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <label>Blood group</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>A+</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <label>Designation</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                      </CardText>
                      <CardActions>
                        <div className="row">
                            <div className="col-lg-2 ">
                                <Link to='/Admin/Users/Corporate/1/List' className="pull-left">
                                    <RaisedButton primary={true} label="Back"/></Link>
                            </div>
                            <div className="col-lg-4 col-lg-offset-6">
                                <div className="pull-right">
                                    <Link to="/Admin/Users/Corporate/1/Edit/1">
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

export default Redux.connect()(CorporateView);

// <div className="col-lg-8">
//     <div className="panel panel-default">
//         <div className="panel-heading">
//             View
//         </div>
//         <div className="panel-body">
//             <div className="row">
//                 <div className="col-lg-4">
//                     <div className="row">
//                         <div className="col-lg-8">
//                             <div className="thumbnail text-center">
//                                 <label >Full Name</label>
//                                 <img src={require('app/images/murali.jpg')} className="img-circle image_universal"></img>
//                                 <span >hhhh</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-8">
//                     <br/>
//                     <br/>
//                     <div className="row">
//                         <div className="col-lg-4">
//                             <label>Gender</label>
//                         </div>
//                         <div className="col-lg-6">
//                             <span>Male</span>
//                         </div>
//                     </div>
//                     <br/>
//                     <div className="row">
//                         <div className="col-lg-4">
//                             <label>Role</label>
//                         </div>
//                         <div className="col-lg-6">
//                             <span>Admin</span>
//                         </div>
//                     </div>
//                     <br/>
//                     <div className="row">
//                         <div className="col-lg-4">
//                             <label>DOB</label>
//                         </div>
//                         <div className="col-lg-6">
//                             <span>02-07-1989</span>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-4">
//                             <label>Email Address</label>
//                         </div>
//                         <div className="col-lg-6">
//                             <span>muralim4242@gmail.com</span>
//                         </div>
//                     </div>
//
//                     <div className="row">
//                         <div className="col-lg-4">
//                             <label>Mobil</label>
//                         </div>
//                         <div className="col-lg-6">
//                             <span>7795929033</span>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-4">
//                             <label>Address</label>
//                         </div>
//                         <div className="col-lg-6">
//                             <span>#84,1st floor,shaheen taj building, kote bheedi,4th street, varthur, bangalore- 560087</span>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-4">
//                             <label>Pincode</label>
//                         </div>
//                         <div className="col-lg-6">
//                             <span>560087</span>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-4">
//                             <label>Blood group</label>
//                         </div>
//                         <div className="col-lg-6">
//                             <span>A+</span>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-4">
//                             <label>Designation</label>
//                         </div>
//                         <div className="col-lg-6">
//                             <span>Admin</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="panel-footer">
//             <div className="row">
//                 <div className="col-lg-2 ">
//
//                     <Link to='/Admin/Users/Coporate/1/List' className="btn btn-primary pull-left">
//                         Back</Link>
//
//                 </div>
//                 <div className="col-lg-4 col-lg-offset-6">
//                     <div className="pull-right">
//                         <Link to='/Admin/Users/Coporate/1/Edit/1' className="btn btn-success">
//                             Edit</Link>
//                         <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#deleteModal">Delete</button>
//                     </div>
//
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
