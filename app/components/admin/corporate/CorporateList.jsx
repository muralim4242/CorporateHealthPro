import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
var {Link} = require("react-router");
import ContentBodyHeader from 'common/ContentBodyHeader';
import CoporateHealthProAPI from 'CoporateHealthProAPI';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Edit from 'material-ui/svg-icons/image/edit';
import Delete from 'material-ui/svg-icons/action/delete';
// import CircularProgress from 'material-ui/CircularProgress';

const style = {
    marginRight: 20
};

const styleB = {
    margin: 12
};

export var CorporateList = React.createClass({
    componentDidMount: function() {
        var {dispatch} = this.props;
      //    dispatch({type:"SET_REFRESH_INDICATOR_STATE",refreshIndicator:"loading"})
          CoporateHealthProAPI.getCorporateData().then(function(response) {
            //    console.log(dispatch(actions.setCorporateData(response)));
            dispatch(actions.setCorporateData(response));
              dispatch({type:"SET_REFRESH_INDICATOR_STATE",refreshIndicator:"hide"})
        }, function(err) {
            alert(err);
        });
    },
    render() {
        var {list,dispatch,isDeleteModalOpen} = this.props;
        //    console.log(this.props);
        //    debugger;
        //        console.log(list);
        // var renderList = function() {
        //     if (!list.length) {
        //         return (
        //             <tr>
        //               <td colSpan="7">
        //               <div>
        //                 <CardText className="text-center">
        //
        //                 </CardText>
        //               </div>
        //               </td>
        //             </tr>
        //         );
        //     }
        //
        //     return list.map((corporate) => {
        //         return (
        //             <tr key={corporate.id}>
        //                 <td>{corporate.id}</td>
        //                 <td>
        //                     <img width="50px" src={corporate.companyLogoPath} className="img-responsiv"></img>
        //                 </td>
        //                 <td>{corporate.name}</td>
        //                 <td>{corporate.representativeName}</td>
        //
        //                 <td>
        //                     <Link to={'/Admin/Corporate/View/' + corporate.id}>
        //
        //                         <FloatingActionButton mini={true} secondary={true} style={style}>
        //                             <RemoveRedEye/>
        //                         </FloatingActionButton>
        //                     </Link>
        //                 </td>
        //                 <td>
        //                     <Link to={'/Admin/Corporate/Edit/' + corporate.id}>
        //                         <FloatingActionButton mini={true} secondary={true} style={style}>
        //                             <Edit/>
        //                         </FloatingActionButton>
        //                     </Link>
        //
        //                 </td>
        //                 <td>
        //                     <FloatingActionButton onTouchTap={() => {
        //                         dispatch({type: "SET_DELETE_MODAL_STATE", isDeleteModalOpen: true})
        //                     }} mini={true} secondary={true} style={style} data-toggle="modal" data-target="#deleteModal">
        //                         <Delete/>
        //                     </FloatingActionButton>
        //
        //                 </td>
        //             </tr>
        //         )
        //     })
        // };
        var renderList1 = function() {
            if (!list.length) {
                return (
                  <Card>

                  </Card>
                );
            }

            return list.map((corporate) => {
                return (
                  <div  key={corporate.id}>
                  <Card>
                    <CardHeader  title={corporate.name}

                                  avatar={corporate.companyLogoPath}>

                    </CardHeader>
                    <CardText>
                          <label>Corporate Id:  </label>{corporate.id}<br/>
                          <label>Representative Name:  </label>  {corporate.representativeName}
                    </CardText>
                    <CardActions >
                        <div >
                          <Link to={'/Admin/Corporate/View/' + corporate.id}>

                              <FloatingActionButton mini={true} secondary={true} style={style}>
                                  <RemoveRedEye/>
                              </FloatingActionButton>
                          </Link>

                          <Link to={'/Admin/Corporate/Edit/' + corporate.id}>
                              <FloatingActionButton mini={true} secondary={true} style={style}>
                                  <Edit/>
                              </FloatingActionButton>
                          </Link>


                          <FloatingActionButton onTouchTap={() => {
                              dispatch({type: "SET_DELETE_MODAL_STATE", isDeleteModalOpen: true})
                          }} mini={true} secondary={true} style={style} data-toggle="modal" data-target="#deleteModal">
                              <Delete/>
                          </FloatingActionButton>
                          </div>
                    </CardActions>
                  </Card>
                  <br/>
                  </div>

                )
            })
        };
        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                  <Card>
                    <CardHeader>
                      <Link to='/Admin/Corporate/Add'>
                          <FloatingActionButton primary={true} mini={true} className="pull-right" style={style}>
                              <ContentAdd/>
                          </FloatingActionButton>
                      </Link>
                    </CardHeader>
                    <CardText>
                      <br/>
                        {renderList1()}
                    </CardText>
                  </Card>
            </div>
        )
    }
});

export default Redux.connect((state) => {
    return state.corporate
})(CorporateList);

// <Table>
//     <TableHeader displaySelectAll={false}>
//         <TableRow>
//             <TableHeaderColumn>S.No</TableHeaderColumn>
//             <TableHeaderColumn>Log</TableHeaderColumn>
//             <TableHeaderColumn>Name</TableHeaderColumn>
//             <TableHeaderColumn>View</TableHeaderColumn>
//             <TableHeaderColumn>Edit</TableHeaderColumn>
//             <TableHeaderColumn>Delete</TableHeaderColumn>
//         </TableRow>
//     </TableHeader>
//     <TableBody displayRowCheckbox={false}>
//         {renderList()}
//     </TableBody>
// </Table>

// <TableRow key={corporate.id}>
//     <TableRowColumn>{corporate.id}</TableRowColumn>
//     <TableRowColumn>
//         <img width="50px" src={corporate.companyLogoPath} className="img-responsiv"></img>
//     </TableRowColumn>
//     <TableRowColumn>{corporate.name}</TableRowColumn>
//     <TableRowColumn>{corporate.representativeName}</TableRowColumn>
//     <TableRowColumn>
//         <Link to={'/Admin/Corporate/View/' + corporate.id}>
//             <RaisedButton label="View" style={style}/></Link>
//     </TableRowColumn>
//     <TableRowColumn>
//         <Link to={'/Admin/Corporate/Edit/' + corporate.id}>
//             <RaisedButton label="Edit" primary={true} style={style}/></Link>
//     </TableRowColumn>
//     <TableRowColumn>
//         <RaisedButton label="Delete" secondary={true} style={style} data-toggle="modal" data-target="#deleteModal"/>
//     </TableRowColumn>
// </TableRow>

// <div className="col-lg-8">
//     <div className="panel panel-default">
//         <div className="panel-heading">
//             <div className="row">
//                 <div className="col-lg-1">
//                     <lable>
//                         Search</lable>
//                 </div>
//                 <div className="col-lg-9">
//                     <input type="text" className="form-control" placeholder="Search"></input>
//                 </div>
//                 <div className="col-lg-2">
//                     <Link to='/Admin/Corporate/Add' className="btn btn-primary pull-right">
//                         Add</Link>
//                 </div>
//             </div>
//         </div>
//         <div className="panel-body table-responsive">
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>S.No</th>
//                         <th>Log</th>
//                         <th>Name</th>
//                         <th>MD/HR</th>
//                         <th>View</th>
//                         <th>Edit</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {renderList()}
//                 </tbody>
//             </table>
//         </div>
//     </div>
// </div>

// <tr key={corporate.id}>
//     <td>{corporate.id}</td>
//     <td>
//         <img width="50px" src={corporate.companyLogoPath} className="img-responsiv"></img>
//     </td>
//     <td>{corporate.name}</td>
//     <td>{corporate.representativeName}</td>
//
//     <td>
//         <Link to={'/Admin/Corporate/View/' + corporate.id} className="btn btn-success btn-sm">
//             View</Link>
//     </td>
//     <td>
//         <Link to={'/Admin/Corporate/Edit/' + corporate.id} className="btn btn-warning btn-sm">
//             Edit</Link>
//     </td>
//     <td>
//         <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal">Delete</button>
//     </td>
// </tr>

// <RaisedButton label="Delete" secondary={true} style={style} data-toggle="modal" data-target="#deleteModal"/>
