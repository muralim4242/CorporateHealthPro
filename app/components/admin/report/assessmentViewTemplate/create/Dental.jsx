import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Dental = React.createClass({
    onTeathClickHandler: (e) => {
        var element = document.getElementsByClassName(e.target.className.split(' ')[1]);
        console.log(document.getElementsByClassName(e.target.className.split(' ')[1]));

    },
    render() {
        return (
            <div>
                <h2 className="bg-primary">Dental Detail</h2>

                <table className="table table-bordered text-left">
                    <tbody>
                        <tr>
                            <th>
                                Mouth Hygiene
                            </th>
                            <td>
                                <input type="text" className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Condition Of Gum
                            </th>
                            <td>
                                <input type="text" className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Indicate if cross-bite
                            </th>
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
                                Is the student using dental braises?
                            </th>
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
                                Is the student in the habit of thumb sucking?
                            </th>
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
                                Does the student need Dental alignment correction?
                            </th>
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
                                Indications to be checked by the dentist?
                            </th>
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

                <div className="row">
                    <div className="col-md-6">
                        <div className="dental">
                            <img src={require('app/images/jaws.png')} className="img-thumbnail"></img>
                            <div className="teath teath-one" onClick={this.onTeathClickHandler}></div>
                            <div className="teath teath-two"></div>
                            <div className="teath teath-three"></div>
                            <div className="teath teath-four"></div>
                            <div className="teath teath-five"></div>
                            <div className="teath teath-six"></div>
                            <div className="teath teath-seven"></div>
                            <div className="teath teath-eight"></div>
                            <div className="teath teath-nine"></div>
                            <div className="teath teath-ten"></div>
                            <div className="teath teath-eleven"></div>
                            <div className="teath teath-twele"></div>
                            <div className="teath teath-thirteen"></div>
                            <div className="teath teath-fourteen"></div>
                            <div className="teath teath-fifteen"></div>
                            <div className="teath teath-sixteen"></div>
                            <div className="teath teath-seventeen"></div>
                            <div className="teath teath-eighteen"></div>
                            <div className="teath teath-nithteen"></div>
                            <div className="teath teath-twenty"></div>
                            <div className="teath teath-twenty-one"></div>
                            <div className="teath teath-twenty-two"></div>
                            <div className="teath teath-twenty-three"></div>
                            <div className="teath teath-twenty-four"></div>
                            <div className="teath teath-twenty-five"></div>
                            <div className="teath teath-twenty-six"></div>
                            <div className="teath teath-twenty-seven"></div>
                            <div className="teath teath-twenty-eight"></div>
                            <div className="teath teath-twenty-nine"></div>
                            <div className="teath teath-thirty"></div>
                            <div className="teath teath-thirty-one"></div>
                            <div className="teath teath-thirty-two"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Color codes</h3>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>
                                        Capped Tooth
                                    </th>
                                    <td style={{
                                        background: "#FF00CC"
                                    }}></td>
                                </tr>
                                <tr>
                                    <th>
                                        Cap Fallen
                                    </th>
                                    <td style={{
                                        background: "#0000FF"
                                    }}></td>
                                </tr>
                                <tr>
                                    <th>
                                        Capped Tooth
                                    </th>
                                    <td style={{
                                        background: "#FFFF00"
                                    }}></td>
                                </tr>
                                <tr>
                                    <th>
                                        Capped Tooth
                                    </th>
                                    <td style={{
                                        background: "#000000"
                                    }}></td>
                                </tr>
                                <tr>
                                    <th>
                                        Capped Tooth
                                    </th>
                                    <td style={{
                                        background: "#FF6600"
                                    }}></td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="row text-center">
                            <h3 className="bg-primary">Comments</h3>
                            <textarea className="form-control"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect()(Dental);
