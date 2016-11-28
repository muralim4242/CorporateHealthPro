import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {blue500} from 'material-ui/styles/colors';

export var GrowthAndDevelopment = React.createClass({
    render() {
        return (
            <div>
                <h1 style={{backgroundColor:blue500,padding:"5px" }}>Basic Health Detail</h1>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>
                                        Height</th>
                                    <td>6.5 ft</td>
                                    <th>
                                        Weight</th>
                                    <td>80 kg</td>
                                </tr>
                                <tr>
                                    <th>
                                        BMI</th>
                                    <td>12</td>
                                    <th>

                                        GRBS/PPBS</th>
                                    <td>23</td>
                                </tr>

                                <tr>
                                    <th>
                                        Blood Pressure</th>
                                    <td>20</td>
                                    <th>
                                        ECG</th>
                                    <td>
                                        dasdas
                                        <a href="#">File Name</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>
                                        Any breathing problem/ Asthma?</th>
                                    <td>No</td>
                                </tr>

                                <tr>
                                    <th>
                                        Does the employee have any Nasal allergies?</th>
                                    <td>Yes</td>
                                </tr>

                                <tr>
                                    <th>
                                        Does the employee have any Skin Allergies?</th>
                                    <td>Yes</td>

                                </tr>

                                <tr>
                                    <th>
                                        Does the employee Smoke?</th>
                                    <td>Yes</td>

                                </tr>
                                <tr>
                                    <th>
                                        Does the employee consume Alcohol?</th>
                                    <td>Yes</td>
                                </tr>

                                <tr>
                                    <th>
                                        Do you experience Swelling in any body parts (abdomen, leg, hand)?</th>
                                    <td>Yes in leg</td>
                                </tr>

                                <tr>
                                    <th>
                                        History of any head injury?</th>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <th>
                                        Are you Under any medication or treatment?</th>
                                    <td>Yes</td>
                                </tr>

                                <tr>
                                    <th>
                                        Does the employee has any Hunger problem?</th>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <th>
                                        Does the Employee has normal Sleep?</th>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <th>
                                        Does the employee has any Cardiac problem?</th>
                                    <td>Yes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{backgroundColor:blue500,padding:"5px" }}>
                            Comments
                        </h2>
                        <p>Reffer to ENT</p>
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect()(GrowthAndDevelopment);
