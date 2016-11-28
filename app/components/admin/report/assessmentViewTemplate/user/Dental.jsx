import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {blue500} from 'material-ui/styles/colors';

export var Dental = React.createClass({
    render() {
        return (
            <div>
                <h2 style={{backgroundColor:blue500,padding:"5px" }}>Dental Detail</h2>

                <table className="table table-bordered text-left">
                    <tbody>
                        <tr>
                            <th>
                                Mouth Hygiene
                            </th>
                            <td>
                                bad
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Condition Of Gum
                            </th>
                            <td>
                                normal
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Does the Employee have any Bad Breathe?
                            </th>
                            <td>
                                No
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Does the Employee have any Tooth Pain?
                            </th>
                            <td>
                                No
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Does the Employee have any Bleeding gums?
                            </th>
                            <td>
                                No
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Does the Employee have any Sensitivity problem?
                            </th>
                            <td>
                                Yes
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Does the Employee have any Discoloured or Yellowish teeth?
                            </th>
                            <td>
                                Yes
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Does the Employee have Smoking habit?
                            </th>
                            <td>
                                Yes
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Does the Employee use any Mouth wash?
                            </th>
                            <td>
                                Yes
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Any Referral to dentist?
                            </th>
                            <td>
                                Yes
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
                                <h3 style={{backgroundColor:blue500,padding:"5px" }}>Comments</h3>
                                <p>
                                    Refer to dentist
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect()(Dental);
