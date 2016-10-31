import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Hearing = React.createClass({
    componentDidMount() {
        var info = document.getElementsByClassName('info');
        for (var i = 0; i < info.length; i++) {
            info[i].addEventListener("click", this.cellClickHandler);
        }
    },
    cellClickHandler(e) {
        //    console.log(e.target);
        var element = document.getElementById(e.target.id);
        //      console.log(element.style.backgroundColor);
        var color = undefined;
        if (element.style.backgroundColor) {
            color = this.hexc(element.style.backgroundColor);
        }
        //  console.log(color);
        if (color === "#ec971f") {
            element.style.backgroundColor = "#d9edf7";
        } else {
            // element.innerHTML = "<div class='dot'></div>";
            element.style.backgroundColor = "#ec971f";
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
    render() {
        return (
            <div>
                <h1 className="bg-primary">Hearing Detail</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="table-responsive">
                            <table className="table-custom">
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td colSpan="7">
                                            Right Ear Audiogram
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan="16">
                                            Hearing Level
                                        </td>
                                        <td className="num-color">0</td>
                                        <td className="info" id="rec0*125"></td>
                                        <td className="info" id="rec0*250"></td>
                                        <td className="info" id="rec0*500"></td>
                                        <td className="info" id="rec0*1000"></td>
                                        <td className="info" id="rec0*2000"></td>
                                        <td className="info" id="rec0*4000"></td>
                                        <td className="info" id="rec0*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">10</td>
                                        <td className="info" id="rec10*125"></td>
                                        <td className="info" id="rec10*250"></td>
                                        <td className="info" id="rec10*500"></td>
                                        <td className="info" id="rec10*1000"></td>
                                        <td className="info" id="rec10*2000"></td>
                                        <td className="info" id="rec10*4000"></td>
                                        <td className="info" id="rec10*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">20</td>
                                        <td className="info" id="rec20*125"></td>
                                        <td className="info" id="rec20*250"></td>
                                        <td className="info" id="rec20*500"></td>
                                        <td className="info" id="rec20*1000"></td>
                                        <td className="info" id="rec20*2000"></td>
                                        <td className="info" id="rec20*4000"></td>
                                        <td className="info" id="rec20*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">30</td>
                                        <td className="info" id="rec30*125"></td>
                                        <td className="info" id="rec30*250"></td>
                                        <td className="info" id="rec30*500"></td>
                                        <td className="info" id="rec30*1000"></td>
                                        <td className="info" id="rec30*2000"></td>
                                        <td className="info" id="rec30*4000"></td>
                                        <td className="info" id="rec30*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">40</td>
                                        <td className="info" id="rec40*125"></td>
                                        <td className="info" id="rec40*250"></td>
                                        <td className="info" id="rec40*500"></td>
                                        <td className="info" id="rec40*1000"></td>
                                        <td className="info" id="rec40*2000"></td>
                                        <td className="info" id="rec40*4000"></td>
                                        <td className="info" id="rec40*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">50</td>
                                        <td className="info" id="rec50*125"></td>
                                        <td className="info" id="rec50*250"></td>
                                        <td className="info" id="rec50*500"></td>
                                        <td className="info" id="rec50*1000"></td>
                                        <td className="info" id="rec50*2000"></td>
                                        <td className="info" id="rec50*4000"></td>
                                        <td className="info" id="rec50*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">60</td>
                                        <td className="info" id="rec60*125"></td>
                                        <td className="info" id="rec60*250"></td>
                                        <td className="info" id="rec60*500"></td>
                                        <td className="info" id="rec60*1000"></td>
                                        <td className="info" id="rec60*2000"></td>
                                        <td className="info" id="rec60*4000"></td>
                                        <td className="info" id="rec60*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">70</td>
                                        <td className="info" id="rec70*125"></td>
                                        <td className="info" id="rec70*250"></td>
                                        <td className="info" id="rec70*500"></td>
                                        <td className="info" id="rec70*1000"></td>
                                        <td className="info" id="rec70*2000"></td>
                                        <td className="info" id="rec70*4000"></td>
                                        <td className="info" id="rec70*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">80</td>
                                        <td className="info" id="rec80*125"></td>
                                        <td className="info" id="rec80*250"></td>
                                        <td className="info" id="rec80*500"></td>
                                        <td className="info" id="rec80*1000"></td>
                                        <td className="info" id="rec80*2000"></td>
                                        <td className="info" id="rec80*4000"></td>
                                        <td className="info" id="rec80*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">90</td>
                                        <td className="info" id="rec90*125"></td>
                                        <td className="info" id="rec90*250"></td>
                                        <td className="info" id="rec90*500"></td>
                                        <td className="info" id="rec90*1000"></td>
                                        <td className="info" id="rec90*2000"></td>
                                        <td className="info" id="rec90*4000"></td>
                                        <td className="info" id="rec90*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">100</td>
                                        <td className="info" id="rec100*125"></td>
                                        <td className="info" id="rec100*250"></td>
                                        <td className="info" id="rec100*500"></td>
                                        <td className="info" id="rec100*1000"></td>
                                        <td className="info" id="rec100*2000"></td>
                                        <td className="info" id="rec100*4000"></td>
                                        <td className="info" id="rec100*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">110</td>
                                        <td className="info" id="rec110*125"></td>
                                        <td className="info" id="rec110*250"></td>
                                        <td className="info" id="rec110*500"></td>
                                        <td className="info" id="rec110*1000"></td>
                                        <td className="info" id="rec110*2000"></td>
                                        <td className="info" id="rec110*4000"></td>
                                        <td className="info" id="rec110*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">120</td>
                                        <td className="info" id="rec120*125"></td>
                                        <td className="info" id="rec120*250"></td>
                                        <td className="info" id="rec120*500"></td>
                                        <td className="info" id="rec120*1000"></td>
                                        <td className="info" id="rec120*2000"></td>
                                        <td className="info" id="rec120*4000"></td>
                                        <td className="info" id="rec120*8000"></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="num-color">125</td>
                                        <td className="num-color">250</td>
                                        <td className="num-color">500</td>
                                        <td className="num-color">1000</td>
                                        <td className="num-color">2000</td>
                                        <td className="num-color">4000</td>
                                        <td className="num-color">8000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td colSpan="7">
                                            Hearing Frequency
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="table-responsive">
                            <table className="table-custom">
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td colSpan="7">
                                            Left Ear Audiogram
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan="16">
                                            Hearing Level
                                        </td>
                                        <td className="num-color">0</td>
                                        <td className="info" id="lec0*125"></td>
                                        <td className="info" id="lec0*250"></td>
                                        <td className="info" id="lec0*500"></td>
                                        <td className="info" id="lec0*1000"></td>
                                        <td className="info" id="lec0*2000"></td>
                                        <td className="info" id="lec0*4000"></td>
                                        <td className="info" id="lec0*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">10</td>
                                        <td className="info" id="lec10*125"></td>
                                        <td className="info" id="lec10*250"></td>
                                        <td className="info" id="lec10*500"></td>
                                        <td className="info" id="lec10*1000"></td>
                                        <td className="info" id="lec10*2000"></td>
                                        <td className="info" id="lec10*4000"></td>
                                        <td className="info" id="lec10*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">20</td>
                                        <td className="info" id="lec20*125"></td>
                                        <td className="info" id="lec20*250"></td>
                                        <td className="info" id="lec20*500"></td>
                                        <td className="info" id="lec20*1000"></td>
                                        <td className="info" id="lec20*2000"></td>
                                        <td className="info" id="lec20*4000"></td>
                                        <td className="info" id="lec20*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">30</td>
                                        <td className="info" id="lec30*125"></td>
                                        <td className="info" id="lec30*250"></td>
                                        <td className="info" id="lec30*500"></td>
                                        <td className="info" id="lec30*1000"></td>
                                        <td className="info" id="lec30*2000"></td>
                                        <td className="info" id="lec30*4000"></td>
                                        <td className="info" id="lec30*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">40</td>
                                        <td className="info" id="lec40*125"></td>
                                        <td className="info" id="lec40*250"></td>
                                        <td className="info" id="lec40*500"></td>
                                        <td className="info" id="lec40*1000"></td>
                                        <td className="info" id="lec40*2000"></td>
                                        <td className="info" id="lec40*4000"></td>
                                        <td className="info" id="lec40*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">50</td>
                                        <td className="info" id="lec50*125"></td>
                                        <td className="info" id="lec50*250"></td>
                                        <td className="info" id="lec50*500"></td>
                                        <td className="info" id="lec50*1000"></td>
                                        <td className="info" id="lec50*2000"></td>
                                        <td className="info" id="lec50*4000"></td>
                                        <td className="info" id="lec50*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">60</td>
                                        <td className="info" id="lec60*125"></td>
                                        <td className="info" id="lec60*250"></td>
                                        <td className="info" id="lec60*500"></td>
                                        <td className="info" id="lec60*1000"></td>
                                        <td className="info" id="lec60*2000"></td>
                                        <td className="info" id="lec60*4000"></td>
                                        <td className="info" id="lec60*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">70</td>
                                        <td className="info" id="lec70*125"></td>
                                        <td className="info" id="lec70*250"></td>
                                        <td className="info" id="lec70*500"></td>
                                        <td className="info" id="lec70*1000"></td>
                                        <td className="info" id="lec70*2000"></td>
                                        <td className="info" id="lec70*4000"></td>
                                        <td className="info" id="lec70*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">80</td>
                                        <td className="info" id="lec80*125"></td>
                                        <td className="info" id="lec80*250"></td>
                                        <td className="info" id="lec80*500"></td>
                                        <td className="info" id="lec80*1000"></td>
                                        <td className="info" id="lec80*2000"></td>
                                        <td className="info" id="lec80*4000"></td>
                                        <td className="info" id="lec80*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">90</td>
                                        <td className="info" id="lec90*125"></td>
                                        <td className="info" id="lec90*250"></td>
                                        <td className="info" id="lec90*500"></td>
                                        <td className="info" id="lec90*1000"></td>
                                        <td className="info" id="lec90*2000"></td>
                                        <td className="info" id="lec90*4000"></td>
                                        <td className="info" id="lec90*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">100</td>
                                        <td className="info" id="lec100*125"></td>
                                        <td className="info" id="lec100*250"></td>
                                        <td className="info" id="lec100*500"></td>
                                        <td className="info" id="lec100*1000"></td>
                                        <td className="info" id="lec100*2000"></td>
                                        <td className="info" id="lec100*4000"></td>
                                        <td className="info" id="lec100*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">110</td>
                                        <td className="info" id="lec110*125"></td>
                                        <td className="info" id="lec110*250"></td>
                                        <td className="info" id="lec110*500"></td>
                                        <td className="info" id="lec110*1000"></td>
                                        <td className="info" id="lec110*2000"></td>
                                        <td className="info" id="lec110*4000"></td>
                                        <td className="info" id="lec110*8000"></td>
                                    </tr>
                                    <tr>
                                        <td className="num-color">120</td>
                                        <td className="info" id="lec120*125"></td>
                                        <td className="info" id="lec120*250"></td>
                                        <td className="info" id="lec120*500"></td>
                                        <td className="info" id="lec120*1000"></td>
                                        <td className="info" id="lec120*2000"></td>
                                        <td className="info" id="lec120*4000"></td>
                                        <td className="info" id="lec120*8000"></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="num-color">125</td>
                                        <td className="num-color">250</td>
                                        <td className="num-color">500</td>
                                        <td className="num-color">1000</td>
                                        <td className="num-color">2000</td>
                                        <td className="num-color">4000</td>
                                        <td className="num-color">8000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td colSpan="7">
                                            Hearing Frequency
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>
                                        Does the employee has any history of ear Discharge?</th>
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
                                        Does the employee has any history of Vertigo?</th>
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
                                        Rinne's Tuning Fork (512 Hz) Hearing Assessment Right?</th>
                                    <td><input type="text" className="form-control"/></td>
                                </tr>
                                <tr>
                                    <th>
                                        Weber's Tuning Fork (512 Hz) Hearing Assessment Right?</th>
                                    <td><input type="text" className="form-control"/></td>
                                </tr>
                                <tr>
                                    <th>
                                        Rinne's Tuning Fork (512 Hz) Hearing Assessment Lef?</th>
                                    <td><input type="text" className="form-control"/></td>
                                </tr>
                                <tr>
                                    <th>
                                        Weber's Tuning Fork (512 Hz) Hearing Assessment Lef?</th>
                                    <td><input type="text" className="form-control"/></td>
                                </tr>
                                <tr>
                                    <th>
                                        Does the employee has Ringing sensation in the ear?</th>
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
                                        Does the employee Need Detailed Hearing Evaluation?</th>
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
                                      Any Referral to ENT specialist?</th>
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
                                      Any Referral to Audiologistl?</th>
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
                    <div className="col-md-6 text-center">
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

export default Redux.connect()(Hearing);
