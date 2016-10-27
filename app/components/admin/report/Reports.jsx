import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Camps = React.createClass({
    render() {
        return (
            <div>
                <div className="container-fluid">
                    {this.props.children}
                    <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h4 className="modal-title" id="gridSystemModalLabel">Delete record</h4>
                                </div>
                                <div className="modal-body">
                                    <p className="leaner">Do you want to delete list item</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">No</button>
                                    <button type="button" className="btn btn-primary">Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="uploadModal" tabIndex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h4 className="modal-title" id="gridSystemModalLabel">Upload report</h4>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label for="exampleInputFile">File input</label>
                                        <input type="file" id="exampleInputFile"/>
                                        <p className="help-block">Upload only excel file.</p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">No</button>
                                    <button type="button" className="btn btn-primary">Upload</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
});

export default Redux.connect()(Camps);
