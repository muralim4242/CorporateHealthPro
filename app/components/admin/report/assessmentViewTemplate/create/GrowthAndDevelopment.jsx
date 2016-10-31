import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var GrowthAndDevelopment = React.createClass({
    render() {
        return (
            <div>
                <h1 className="bg-primary">Basic Health Detail</h1>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered text-left">
                            <tbody>
                                <tr>
                                    <th>
                                        Height</th>
                                    <td><input type="text" className="form-control"/>
                                    </td>
                                    <th>
                                        Weight</th>
                                    <td><input type="text" className="form-control"/></td>
                                </tr>
                                <tr>
                                    <th>
                                        BMI</th>
                                    <td><input type="text" className="form-control"/></td>
                                    <th>

                                        GRBS/PPBS</th>
                                    <td><input type="text" className="form-control"/></td>
                                </tr>

                                <tr>
                                    <th>
                                        Blood Pressure</th>
                                    <td><input type="text" className="form-control"/></td>
                                    <th>
                                        ECG</th>
                                    <td>
                                      <input type="text" className="form-control"/>
                                        <input type="file" className="form-control"/>
                                        Upload Image
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered text-left">
                            <tbody>
                                <tr>
                                    <th>
                                        Any breathing problem/ Asthma?</th>
                                    <td>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                            Yes
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="No"/>
                                            No
                                        </label>
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        Does the employee have any Nasal allergies?</th>
                                    <td>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                            Yes
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="No"/>
                                            No
                                        </label>
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        Does the employee have any Skin Allergies?</th>
                                    <td>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                            Yes
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="No"/>
                                            No
                                        </label>
                                    </td>

                                </tr>

                                <tr>
                                    <th>
                                        Does the employee Smoke?</th>
                                    <td>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                            Yes
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="No"/>
                                            No
                                        </label>
                                    </td>

                                </tr>
                                <tr>
                                    <th>
                                        Does the employee consume Alcohol?</th>
                                    <td>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                            Yes
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="No"/>
                                            No
                                        </label>
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        Do you experience Swelling in any body parts (abdomen, leg, hand)?</th>
                                    <td>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                            Yes
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="No"/>
                                            No
                                        </label>
                                        <input type="text" className="form-control"/></td>
                                </tr>

                                <tr>
                                    <th>
                                        History of any head injury?</th>
                                    <td>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                            Yes
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="No"/>
                                            No
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Are you Under any medication or treatment?</th>
                                    <td>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                            Yes
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="No"/>
                                            No
                                        </label>
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        Does the employee has any Hunger problem?</th>
                                    <td>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                            Yes
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="No"/>
                                            No
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Does the Employee has normal Sleep?</th>
                                    <td>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                            Yes
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="No"/>
                                            No
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Does the employee has any Cardiac problem?</th>
                                    <td>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                            Yes
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="No"/>
                                            No
                                        </label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="bg-primary">
                            Comments
                        </h2 >
                        <textarea className="form-control"></textarea>
                    </div>

                </div>
            </div>
        )
    }
});

export default Redux.connect()(GrowthAndDevelopment);
