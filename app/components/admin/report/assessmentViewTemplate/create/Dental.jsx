import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Dental = React.createClass({
    componentDidMount() {
        var teath = document.getElementsByClassName('teath');
        for (var i = 0; i < teath.length; i++) {
            teath[i].addEventListener("click", this.onTeathClickHandler);
        }
    },
    hexc(colorval) {
        var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        delete(parts[0]);
        for (var i = 1; i <= 3; ++i) {
            parts[i] = parseInt(parts[i]).toString(16);
            if (parts[i].length == 1)
                parts[i] = '0' + parts[i];
            }
        return '#' + parts.join('');
    },
    onTeathClickHandler(e) {
        var element = document.getElementsByClassName(e.target.className.split(' ')[1]);
        var color = undefined;
        if (element[0].style.backgroundColor) {
            color = this.hexc(element[0].style.backgroundColor);
        }
        if (!color) {
            element[0].style.backgroundColor = "#ffa500";
        } else if (color === "#ffa500") {
            element[0].style.backgroundColor = "#ff0000";
        } else if (color === "#ff0000") {
            element[0].style.backgroundColor = "#ffff00";
        } else if (color === "#ffff00") {
            element[0].style.backgroundColor = "#000000";
        } else if (color === "#000000") {
            element[0].style.backgroundColor = "#ffc0cb";
        } else if (color === "#ffc0cb") {
            element[0].style.backgroundColor = "#008000";
        } else if (color === "#008000") {
            element[0].style.backgroundColor = "#a52a2a";
        } else {
            element[0].style.backgroundColor = ""
        }
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
                                Does the Employee have any Bad Breathe?
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
                                Does the Employee have any Bleeding gums?
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
                                Does the Employee have any Sensitivity problem?
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
                                Does the Employee have any Discoloured or Yellowish teeth?
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
                                Does the Employee have Smoking habit?
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
                                Does the Employee use any Mouth wash?
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
                                Any RefeCaries Toothist?
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
                            <div className="teath teath-one"></div>
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
                                        background: "#ffa500"
                                    }}></td>
                                </tr>
                                <tr>
                                    <th>
                                        Bleeding Gums
                                    </th>
                                    <td style={{
                                        background: "#ff0000"
                                    }}></td>
                                </tr>
                                <tr>
                                    <th>
                                        Stains & Calculus
                                    </th>
                                    <td style={{
                                        background: "#ffff00"
                                    }}></td>
                                </tr>
                                <tr>
                                    <th>
                                        Caries Tooth
                                    </th>
                                    <td style={{
                                        background: "#000000"
                                    }}></td>
                                </tr>
                                <tr>
                                    <th>
                                        Tooth upon Tooth
                                    </th>
                                    <td style={{
                                        background: "#ffc0cb"
                                    }}></td>
                                </tr>
                                <tr>
                                    <th>
                                        Fractured tooth
                                    </th>
                                    <td style={{
                                        background: "#008000"
                                    }}></td>
                                </tr>
                                <tr>
                                    <th>
                                        Non vital tooth
                                    </th>
                                    <td style={{
                                        background: "#a52a2a"
                                    }}></td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="row text-center">
                            <div className="col-md-12">
                                <h3 className="bg-primary">Comments</h3>
                                <textarea className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect()(Dental);
