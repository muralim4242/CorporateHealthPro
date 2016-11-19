import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {Link} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';
import CoporateHealthProAPI from 'CoporateHealthProAPI';

export var CorporateView = React.createClass({
    componentDidMount: function() {
        var {dispatch} = this.props;
     //   console.log(this.props.params.id);
        CoporateHealthProAPI.getCorporateDataById(this.props.params.id).then(function(response) {
          //  console.log(response);
            //      console.log(actions.setIndCorporateData(response));
            dispatch(actions.setIndCorporateData(response));
        }, function(err) {
            alert(err);
        });
    },
    render() {
        var {corporate} = this.props;
   //     var {address}=corporate;
    //    console.log(corporate);
    //    console.log(address);
        var renderBody=function()
        {
            if(corporate)
            {
                return (
                     <div className="row">
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="thumbnail text-center">
                                                <label >Corpaorate Name</label>
                                                <img src={corporate.companyLogoPath} className="img-circle image_universal"></img>
                                                <span >{corporate.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="thumbnail text-center">
                                                <label>MD/HR Name</label>
                                                <img src={corporate.hrLogoPath} className="img-circle image_universal"></img>
                                                <span>{corporate.representativeName}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <br/>
                                    <br/>
                                   
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <label>Address</label>
                                        </div>
                                        <div className="col-lg-6">
                                           
                                            {corporate.address?corporate.address.address:null}<br/>
                                            {corporate.address?corporate.address.pincode:null}

                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <label>MD/HR Say</label>
                                        </div>
                                        <div className="col-lg-6">
                                            <span>{corporate.aboutCompany}</span>
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
                <div className="col-lg-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            View
                        </div>
                        <div className="panel-body">
                            {renderBody()}
                        </div>
                        <div className="panel-footer">
                            <div className="row">
                                <div className="col-lg-2 ">

                                    <Link to='/Admin/Corporate/List' className="btn btn-primary pull-left">
                                        Back</Link>

                                </div>
                                <div className="col-lg-4 col-lg-offset-6">
                                    <div className="pull-right">
                                        <Link to='/Admin/Corporate/Edit/1' className="btn btn-success">
                                            Edit</Link>
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#deleteModal">Delete</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect((state) => {
    return state.corporate;
})(CorporateView);
