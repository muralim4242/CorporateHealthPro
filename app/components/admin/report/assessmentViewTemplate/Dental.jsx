import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Dental = React.createClass({
    render() {
        return (
            <div>
                <h2>Dental Detail</h2>
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
                                Indicate if cross-bite
                            </th>
                            <td>
                                No
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Is the student using dental braises?
                            </th>
                            <td>
                                No
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Is the student in the habit of thumb sucking?
                            </th>
                            <td>
                                No
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Does the student need Dental alignment correction?
                            </th>
                            <td>
                                Yes
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Indications to be checked by the dentist?
                            </th>
                            <td>
                                Yes
                            </td>
                        </tr>
                    </tbody>
                </table>
              
                <div className="row">
                    <div className="col-lg-5">
                        <img src={require('app/images/jaws.png')} className="img-thumbnail"></img>
                    </div>
                    <div className="col-lg-6">
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
                            <h3>Comments</h3>
                            <p>
                                Refer to dentist
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect()(Dental);
