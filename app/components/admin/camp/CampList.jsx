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
import ContentBack from 'material-ui/svg-icons/content/undo';
import RaisedButton from 'material-ui/RaisedButton';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Edit from 'material-ui/svg-icons/image/edit';
import Delete from 'material-ui/svg-icons/action/delete';

const style = {
    marginRight: 20
};

const styleB = {
    margin: 12
};

export var CampList = React.createClass({
    componentDidMount: function() {
        var {dispatch} = this.props;
        CoporateHealthProAPI.getCampData(this.props.params.corId).then(function(response) {
            //    console.log(dispatch(actions.setCorporateData(response)));
            dispatch(actions.setCampData(response));
        }, function(err) {
            alert(err);
        });
    },
    render() {
        var {list,dispatch} = this.props;
        var corId = this.props.params.corId;
        //    console.log(this.props);
        //    debugger;
        //        console.log(list);
        var renderBody = function() {
            if (!list) {
                return (
                    <tr>
                        <td className="text-center" colSpan="8">No camp data</td>
                    </tr>
                );
            }

            return list.map((camp) => {
                return (
                    <tr key={camp.id}>
                        <td>{camp.id}</td>
                        <td>
                            {camp.name}
                        </td>
                        <td>{camp.startDate}</td>
                        <td>{camp.endDate}</td>
                        <td>
                            <Link to={'/Admin/Camp/' + corId + '/View/' + camp.id}>
                                <FloatingActionButton mini={true} secondary={true} style={style}>
                                    <RemoveRedEye/>
                                </FloatingActionButton>
                            </Link>
                        </td>
                        <td>
                            <Link to={'/Admin/Camp/' + corId + '/Edit/' + camp.id}>
                                <FloatingActionButton mini={true} secondary={true} style={style}>
                                    <Edit/>
                                </FloatingActionButton>
                            </Link>

                        </td>
                        <td>
                            <FloatingActionButton onTouchTap={() => {
                                dispatch({type: "SET_DELETE_MODAL_STATE", isDeleteModalOpen: true})
                            }} mini={true} secondary={true} style={style}>
                                <Delete/>
                            </FloatingActionButton>

                        </td>
                    </tr>
                )
            })
        };

        return (
            <div>
                <ContentBodyHeader path={this.props.location.pathname}/>
                <Card>
                    <CardHeader>
                        <Link to="/Admin/Camp/1/Add">
                            <FloatingActionButton primary={true} mini={true} className="pull-right" style={style}>
                                <ContentAdd/>
                            </FloatingActionButton>
                        </Link>
                        <Link to='/Admin/Camp/SelectCompany'>
                            <FloatingActionButton secondary={true} mini={true} className="pull-right" style={style}>
                                <ContentBack/>
                            </FloatingActionButton>
                        </Link>

                    </CardHeader>
                    <CardText>
                        <div className="panel-body table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>View</th>
                                        <th>Edit</th>
                                        <th>Delet</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderBody()}
                                </tbody>
                            </table>
                        </div>
                    </CardText>
                </Card>
            </div>
        )
    }
});

export default Redux.connect((state) => {
    return state.camp
})(CampList);

//
// <div className="col-lg-8">
//     <div className="panel panel-default">
//         <div className="panel-heading">
//             <div className="row">
//                 <div className="col-lg-1">
//                     <lable>
//                         Search</lable>
//                 </div>
//                 <div className="col-lg-8">
//                     <input type="text" className="form-control" placeholder="Search"></input>
//                 </div>
//                 <div className="col-lg-3">
//                     <div className="pull-right">
//                         <Link to='/Admin/Camp/1/Add' className="btn btn-primary">
//                             Add</Link>
//                         <Link to='/Admin/Camp/SelectCompany' className="btn btn-success">
//                             Back</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="panel-body table-responsive">
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>S.No</th>
//                         <th>Name</th>
//                         <th>Start Date</th>
//                         <th>End Date</th>
//                         <th>View</th>
//                         <th>Edit</th>
//                         <th>Delet</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                   {renderBody()}
//                 </tbody>
//             </table>
//         </div>
//     </div>
// </div>
