import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {hashHistory} from 'react-router';
import ContentBodyHeader from 'common/ContentBodyHeader';
import Select from 'react-select';
import CoporateHealthProAPI from 'CoporateHealthProAPI';
import AutoComplete from 'material-ui/AutoComplete';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
// import CircularProgress from 'material-ui/CircularProgress';
// import RefreshIndicator from 'material-ui/RefreshIndicator';
const style = {
    margin: 12
};

const styleB = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

export var SelectCompanyAndCamp = React.createClass({
    componentDidMount: function() {
        var {dispatch} = this.props;
        CoporateHealthProAPI.getCorporateData().then(function(response) {
            //      console.log(response);
            //   console.log(dispatch(actions.setCorporateData(response)));
            dispatch(actions.setCorporateData(response));
            dispatch({type:"SET_REFRESH_INDICATOR_STATE",refreshIndicator:"hide"});
        }, function(err) {
            alert(err);
        });
    },
    onSubmitHandler(e) {
        e.preventDefault();
  //     console.log("event "+e);
       const {companySelected, campSelected} = this.props.report;

        // if (this.refs.searchText.value != "") {
        //     hashHistory.push('/Admin/Camp/List');
        // }

        //      console.log(this.props.location.pathname.split("/")[2]);
        hashHistory.push('/Admin/Report/'+companySelected.id+'/'+campSelected.id+'/ReportCheck')
    },
    render() {
        var {companySelected, campSelected,campList} = this.props.report;
        var {list} = this.props.corporate;
        var {dispatch}=this.props;
    //    console.log(this);
    var {onSubmitHandler}=this;

        // var selectedCompanyValue=options[0].value;

        // function onSubmitHandler(e) {
        //   e.preventDefault();
        //     // if (this.refs.searchText.value != "") {
        //     //     hashHistory.push('/Admin/Camp/List');
        //     // }
        //
        //     //      console.log(this.props.location.pathname.split("/")[2]);
        //     hashHistory.push('/Admin/Report/'+companySelected.id+'/'+campSelected.id+'/ReportCheck')
        // };

        function companySelectChange(val,obj) {
            //  selectedCompanyValue = val.id;
            // console.log("Selected: " + val.id +val.name+val.branchName);
            // console.log(obj);
              dispatch({type:"SET_REFRESH_INDICATOR_STATE",refreshIndicator:"loading"});
              dispatch({type:"SET_SELECTED_COMPANY",companySelected:val})
            CoporateHealthProAPI.getCampData(val.id).then(function(response)
            {
            //  console.log(response);
              dispatch({type:"SET_CAMP_LIST",campList:response})
                dispatch({type:"SET_REFRESH_INDICATOR_STATE",refreshIndicator:"hide"});
            },function(err)
            {
              alert(err);
            })
        };
        function campSelectChange(val,obj) {
            //  selectedCompanyValue = val.id;
            // console.log("Selected: " + val.id +val.name+val.branchName);
            // console.log(obj);
              dispatch({type:"SET_SELECTED_CAMP",campSelected:val})
            // CoporateHealthProAPI.getCampData(val.id).then(function(response)
            // {
            // //  console.log(response);
            //   this.props.dispatch({type:"SET_CAMP_LIST",campList:response})
            // },function(err)
            // {
            //   alert(err);
            // })
        };
        const dataSourceConfig = {
            text: 'name',
            value: 'id'
        };
        const rederCampListComponent=()=>
        {

              if(campList.length)
              {
                return  <AutoComplete disabled="true" hintText="Type camp name"	 floatingLabelText="Select camp" dataSource={campList} onNewRequest={campSelectChange} dataSourceConfig={dataSourceConfig}  filter={AutoComplete.noFilter}
      openOnFocus={true}/>
              }

        }

        const renderBody = function() {
            if (list.length) {
                //    console.log(list);
                return (
                    <div>
                        <CardText>
                            <div className="form-group">
                                <AutoComplete hintText="Type company name" floatingLabelText="Select Company" dataSource={list} onNewRequest={companySelectChange} dataSourceConfig={dataSourceConfig}/>
                            </div>

                            <div className="form-group">
                              <AutoComplete disabled={campList.length?false:true} hintText="Type camp name"	 floatingLabelText={campList.length?"Select camp":"No camps"} dataSource={campList} onNewRequest={campSelectChange} dataSourceConfig={dataSourceConfig}  filter={AutoComplete.noFilter}
                    openOnFocus={true}/>
                            </div>

                        </CardText>

                        <CardActions>

                            <RaisedButton label="Submit" disabled={(Object.getOwnPropertyNames(companySelected).length)&&(Object.getOwnPropertyNames(campSelected).length)?false:true} primary={true} style={style} className="pull-right" onClick={onSubmitHandler} />
                        </CardActions>

                    </div>
                )
            } else {
                //  console.log("spinner");
                return (
                    <div>
                        <CardText className="text-center">

                        </CardText>
                    </div>
                )
            }
        };

        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/> {renderBody()}
                <Card></Card>
            </div>

        )
    }
});

export default Redux.connect((state) => {
    return {corporate: state.corporate, report: state.report}
})(SelectCompanyAndCamp);

// <AutoComplete hintText="Type camp name" floatingLabelText="Select Camp" dataSource={options} onUpdateInput={logChange} filter={AutoComplete.noFilter} openOnFocus={true}/>

// <Select name="form-field-name" value="name" options={corporate} onChange={logChange}/>
// <div className="col-lg-6">
//     <div className="panel panel-default">
//         <div className="panel-heading">
//             <h3 className="panel-title">Company selection</h3>
//         </div>
//         <div className="panel-body">
//             <div className="form-group">
//                 <label>Company Name</label><br/>
//                 <AutoComplete hintText="Type company name" dataSource={options} onUpdateInput={logChange} dataSourceConfig={dataSourceConfig}/>
//
//             </div>
//
//             <div className="form-group">
//                 <label>Camp</label><br/>
//                 <AutoComplete hintText="Type company name" dataSource={options} onUpdateInput={logChange} dataSourceConfig={dataSourceConfig} filter={AutoComplete.noFilter}
// openOnFocus={true}/>
//             </div>
//         </div>
//         <div className="panel-footer">
//             <button type="button" className="btn btn-success" onClick={this.onClickHandler}>Submit</button>
//         </div>
//     </div>
// </div>
