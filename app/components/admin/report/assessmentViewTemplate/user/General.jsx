import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {blue500} from 'material-ui/styles/colors';

export var General = React.createClass({
    render() {
        return (
            <div>
                <h1 style={{backgroundColor:blue500,padding:"5px" }}>General Detail</h1>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>
                                        Squint</th>
                                    <td>No</td>
                                    <th>
                                        Conjunctiva</th>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <th>
                                        Cornea</th>
                                    <td>No</td>
                                    <th>

                                        Is there any white pupil?</th>
                                    <td>No</td>
                                </tr>

                                <tr>
                                    <th>
                                        Is the eye wandering?</th>
                                    <td>No</td>
                                    <th>
                                        Is the student color blind??</th>
                                    <td>No</td>
                                </tr>

                                <tr>
                                    <th>
                                        Is the student night blind?</th>
                                    <td>No</td>
                                    <th>
                                        Is the student suffering from Ocular alignment (Squint)?</th>
                                    <td>Yes</td>
                                </tr>

                                <tr>
                                    <th>
                                        Is the student wearing spectacles or lens?</th>
                                    <td>Yes</td>
                                    <th>
                                        Is there red or watery crust in the eye?</th>
                                    <td>Yes</td>
                                </tr>

                                <tr>
                                    <th>
                                        Is the student rubbing eyes frequently?</th>
                                    <td>Yes</td>
                                    <th>
                                        Is the student unusually sensitive to bright light?</th>
                                    <td>Yes</td>
                                </tr>

                                <tr>
                                    <th>
                                        Does the student suffer from nausea while studying?</th>
                                    <td>Yes</td>
                                    <th>
                                        Does the student suffer from headache after or while reading?</th>
                                    <td>Yes</td>
                                </tr>

                                <tr>
                                    <th>
                                        Is the student thrusting his head forward or backward while looking at distant object?</th>
                                    <td>Yes</td>
                                    <th>
                                        Is the student turning or tilting the head to one side while reading?</th>
                                    <td>Yes</td>
                                </tr>

                                <tr>
                                    <th>
                                        Is the student placing the head close to book while reading?</th>
                                    <td>Yes</td>
                                    <th>
                                        Does the student suffer from blurred vision or double image?</th>
                                    <td>Yes</td>
                                </tr>

                                <tr>
                                    <th>
                                        Indication for consultation with an Ophthalmologist?</th>
                                    <td>Yes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <h2 style={{backgroundColor:blue500,padding:"5px" }}>
                        Comments
                    </h2>
                    <p>Reffer to ENT</p>
                </div>
            </div>
        )
    }
});

export default Redux.connect()(General);
