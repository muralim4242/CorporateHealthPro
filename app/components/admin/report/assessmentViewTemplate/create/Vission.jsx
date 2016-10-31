import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Vission = React.createClass({
    render() {
        return (
            <div>
                <h1 className="bg-primary">Vission Detail</h1>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered text-left">
                            <tbody>
                                <tr>
                                    <th>
                                        Squint</th>
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
                                        Conjunctiva</th>
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
                                        Color vision</th>
                                    <td>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="Yes"/>
                                            Abnormal
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" value="No"/>
                                            Normal
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <th>

                                        Cataract</th>
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
                                        Pterygium</th>
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
                                        Glaucoma</th>
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
                        <table className="table table-bordered text-left">
                            <tbody>
                                <tr>
                                    <th>
                                        Is the employee wearing spectacles or lens?</th>
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
                                        Is there any red or watery crust in the eye?</th>
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
                                        Is the Employee rubbing eyes frequently?</th>
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
                                        Is the Employee unusually sensitive to bright light?</th>
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
                                        Does the Employee have night blindness?</th>
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
                                        Does the Employee has headache after working for long time?</th>
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
                                        Does the Employee has Discharge from eyes / Sticky eyes?</th>
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
                                        Does The employee referred to ophthalmologist?</th>
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
                                        <input type="text" className="form-control"/>
                                    </td>
                                    <td>
                                        <input type="text" className="form-control"/>
                                    </td>
                                    <td>
                                        <input type="text" className="form-control"/>
                                    </td>
                                    <td>
                                        <input type="text" className="form-control"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Right
                                    </th>
                                    <td>
                                        <input type="text" className="form-control"/>
                                    </td>
                                    <td>
                                        <input type="text" className="form-control"/>
                                    </td>
                                    <td>
                                        <input type="text" className="form-control"/>
                                    </td>
                                    <td>
                                        <input type="text" className="form-control"/>
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
                        </h2>
                        <textarea className="form-control"></textarea>
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect()(Vission);
