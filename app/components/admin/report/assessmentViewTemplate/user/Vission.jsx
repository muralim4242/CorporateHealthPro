import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {blue500} from 'material-ui/styles/colors';

export var Vission = React.createClass({
    render() {
        return (
            <div>
                <h1 style={{backgroundColor:blue500,padding:"5px" }}>Vission Detail</h1>
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
                                        Color vision</th>
                                    <td>Normal</td>
                                    <th>

                                        Cataract</th>
                                    <td>No</td>
                                </tr>

                                <tr>
                                    <th>
                                        Pterygium</th>
                                    <td>No</td>
                                    <th>
                                        Glaucoma</th>
                                    <td>No</td>
                                </tr>

                                <tr>
                                    <th>
                                        Is the employee wearing spectacles or lens?</th>
                                    <td>No</td>
                                    <th>
                                        Is there any red or watery crust in the eye?</th>
                                    <td>Yes</td>
                                </tr>

                                <tr>
                                    <th>
                                        Is the Employee rubbing eyes frequently?</th>
                                    <td>Yes</td>
                                    <th>
                                        Is the Employee unusually sensitive to bright light?</th>
                                    <td>Yes</td>
                                </tr>

                                <tr>
                                    <th>
                                        Does the Employee have night blindness?</th>
                                    <td>Yes</td>
                                    <th>
                                        Does the Employee has headache after working for long time?</th>
                                    <td>Yes</td>
                                </tr>

                                <tr>
                                    <th>
                                        Does the Employee has Discharge from eyes / Sticky eyes?</th>
                                    <td>Yes</td>
                                    <th>
                                        Does The employee referred to ophthalmologist?</th>
                                    <td>Yes</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>
                                        EYE
                                    </th>
                                    <th>
                                        Acurity
                                    </th>
                                    <th>
                                        Spherical
                                    </th>
                                    <th>
                                        Cylindrical
                                    </th>
                                    <th>
                                        Axis
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        Left
                                    </th>
                                    <td>
                                        6/6
                                    </td>
                                    <td>
                                        0.76
                                    </td>
                                    <td>
                                        0.75
                                    </td>
                                    <td>
                                        129
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Right
                                    </th>
                                    <td>
                                        6/6
                                    </td>
                                    <td>
                                        0.76
                                    </td>
                                    <td>
                                        0.75
                                    </td>
                                    <td>
                                        129
                                    </td>
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

export default Redux.connect()(Vission);
