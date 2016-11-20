import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {Link} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';
import CoporateHealthProAPI from 'CoporateHealthProAPI';

export var CampView = React.createClass({
  componentDidMount: function() {
      var {dispatch} = this.props;
   //   console.log(this.props.params.id);
      CoporateHealthProAPI.getCampDataById(this.props.params.corId,this.props.params.id).then(function(response) {
      //    console.log(response);
          //      console.log(actions.setIndCorporateData(response));
          dispatch(actions.setIndCampData(response));
      }, function(err) {
          alert(err);
      });
  },
  render() {
      var {camp} = this.props;
 //     var {address}=corporate;
  //    console.log(corporate);
  //    console.log(address);
      var renderBody=function()
      {
          if(camp)
          {
              return (
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-3">
                                <label>Name</label>
                            </div>
                            <div className="col-lg-6">
                                <span>{camp.name}</span>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-3">
                                <label>Start Date</label>
                            </div>
                            <div className="col-lg-6">
                                <span>{camp.startDate}</span>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-3">
                                <label>Start Date</label>
                            </div>
                            <div className="col-lg-6">
                                <span>{camp.endDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
              );
          }
          else
          {
              return (<strong className="text-center"></strong>);
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
                                    <Link to={'/Admin/Camp/'+this.props.params.corId+'/List'} className="btn btn-primary pull-left">
                                        Back</Link>
                                </div>
                                <div className="col-lg-4 col-lg-offset-6">
                                    <div className="pull-right">
                                        <Link to={'/Admin/Camp/'+this.props.params.corId+'/Edit/'+this.props.params.id} className="btn btn-success">
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

export default Redux.connect((state)=>
{
  return state.camp
})(CampView);
