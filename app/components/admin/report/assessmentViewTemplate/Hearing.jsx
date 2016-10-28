import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Hearing = React.createClass({
    cellClickHandler: (e) => {
        // console.log(e.target.id);
        // var element = document.getElementById(e.target.id);
        // if (element.innerHTML) {
        //     element.innerHTML = "";
        // } else {
        //     element.innerHTML = "<div class='dot'></div>";
        // }

    },
    render() {
        return (
            <div>
                <h1>Hearing Detail</h1>
                <div className="row">
                    <div className="col-md-6">
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
                                    <td className="info" id="rec0*125" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec0*250" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec0*500" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec0*1000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec0*2000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec0*4000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec0*8000" onClick={this.cellClickHandler}></td>
                                </tr>
                                <tr>
                                    <td className="num-color">10</td>
                                    <td className="info" id="rec10*125" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec10*250" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec10*500" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec10*1000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec10*2000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec10*4000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec10*8000" onClick={this.cellClickHandler}></td>
                                </tr>
                                <tr>
                                    <td className="num-color">20</td>
                                    <td className="info" id="rec20*125" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec20*250" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec20*500" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec20*1000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec20*2000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec20*4000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec20*8000" onClick={this.cellClickHandler}></td>
                                </tr>
                                <tr>
                                    <td className="num-color">30</td>
                                    <td className="info" id="rec30*125" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec30*250" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec30*500" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec30*1000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec30*2000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec30*4000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec30*8000" onClick={this.cellClickHandler}></td>
                                </tr>
                                <tr>
                                    <td className="num-color">40</td>
                                    <td className="info" id="rec40*125" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec40*250" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec40*500" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec40*1000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec40*2000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec40*4000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec40*8000" onClick={this.cellClickHandler}></td>
                                </tr>
                                <tr>
                                    <td className="num-color">50</td>
                                    <td className="info" id="rec50*125" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec50*250" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec50*500" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec50*1000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec50*2000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec50*4000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec50*8000" onClick={this.cellClickHandler}></td>
                                </tr>
                                <tr>
                                    <td className="num-color">60</td>
                                    <td className="info" id="rec60*125" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec60*250" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec60*500" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec60*1000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec60*2000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec60*4000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec60*8000" onClick={this.cellClickHandler}></td>
                                </tr>
                                <tr>
                                    <td className="num-color">70</td>
                                    <td className="info" id="rec70*125" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec70*250" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec70*500" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec70*1000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec70*2000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec70*4000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec70*8000" onClick={this.cellClickHandler}></td>
                                </tr>
                                <tr>
                                    <td className="num-color">80</td>
                                    <td className="info" id="rec80*125" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec80*250" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec80*500" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec80*1000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec80*2000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec80*4000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec80*8000" onClick={this.cellClickHandler}></td>
                                </tr>
                                <tr>
                                    <td className="num-color">90</td>
                                    <td className="info" id="rec90*125" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec90*250" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec90*500" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec90*1000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec90*2000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec90*4000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec90*8000" onClick={this.cellClickHandler}></td>
                                </tr>
                                <tr>
                                    <td className="num-color">100</td>
                                    <td className="info" id="rec100*125" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec100*250" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec100*500" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec100*1000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec100*2000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec100*4000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec100*8000" onClick={this.cellClickHandler}></td>
                                </tr>
                                <tr>
                                    <td className="num-color">110</td>
                                    <td className="info" id="rec110*125" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec110*250" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec110*500" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec110*1000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec110*2000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec110*4000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec110*8000" onClick={this.cellClickHandler}></td>
                                </tr>
                                <tr>
                                    <td className="num-color">120</td>
                                    <td className="info" id="rec120*125" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec120*250" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec120*500" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec120*1000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec120*2000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec120*4000" onClick={this.cellClickHandler}></td>
                                    <td className="info" id="rec120*8000" onClick={this.cellClickHandler}></td>
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
                    <div className="col-md-6">
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
                                  <td className="info" id="lec0*125" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec0*250" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec0*500" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec0*1000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec0*2000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec0*4000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec0*8000" onClick={this.cellClickHandler}></td>
                              </tr>
                              <tr>
                                  <td className="num-color">10</td>
                                  <td className="info" id="lec10*125" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec10*250" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec10*500" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec10*1000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec10*2000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec10*4000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec10*8000" onClick={this.cellClickHandler}></td>
                              </tr>
                              <tr>
                                  <td className="num-color">20</td>
                                  <td className="info" id="lec20*125" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec20*250" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec20*500" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec20*1000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec20*2000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec20*4000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec20*8000" onClick={this.cellClickHandler}></td>
                              </tr>
                              <tr>
                                  <td className="num-color">30</td>
                                  <td className="info" id="lec30*125" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec30*250" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec30*500" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec30*1000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec30*2000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec30*4000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec30*8000" onClick={this.cellClickHandler}></td>
                              </tr>
                              <tr>
                                  <td className="num-color">40</td>
                                  <td className="info" id="lec40*125" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec40*250" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec40*500" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec40*1000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec40*2000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec40*4000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec40*8000" onClick={this.cellClickHandler}></td>
                              </tr>
                              <tr>
                                  <td className="num-color">50</td>
                                  <td className="info" id="lec50*125" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec50*250" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec50*500" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec50*1000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec50*2000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec50*4000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec50*8000" onClick={this.cellClickHandler}></td>
                              </tr>
                              <tr>
                                  <td className="num-color">60</td>
                                  <td className="info" id="lec60*125" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec60*250" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec60*500" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec60*1000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec60*2000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec60*4000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec60*8000" onClick={this.cellClickHandler}></td>
                              </tr>
                              <tr>
                                  <td className="num-color">70</td>
                                  <td className="info" id="lec70*125" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec70*250" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec70*500" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec70*1000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec70*2000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec70*4000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec70*8000" onClick={this.cellClickHandler}></td>
                              </tr>
                              <tr>
                                  <td className="num-color">80</td>
                                  <td className="info" id="lec80*125" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec80*250" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec80*500" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec80*1000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec80*2000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec80*4000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec80*8000" onClick={this.cellClickHandler}></td>
                              </tr>
                              <tr>
                                  <td className="num-color">90</td>
                                  <td className="info" id="lec90*125" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec90*250" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec90*500" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec90*1000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec90*2000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec90*4000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec90*8000" onClick={this.cellClickHandler}></td>
                              </tr>
                              <tr>
                                  <td className="num-color">100</td>
                                  <td className="info" id="lec100*125" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec100*250" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec100*500" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec100*1000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec100*2000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec100*4000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec100*8000" onClick={this.cellClickHandler}></td>
                              </tr>
                              <tr>
                                  <td className="num-color">110</td>
                                  <td className="info" id="lec110*125" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec110*250" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec110*500" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec110*1000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec110*2000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec110*4000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec110*8000" onClick={this.cellClickHandler}></td>
                              </tr>
                              <tr>
                                  <td className="num-color">120</td>
                                  <td className="info" id="lec120*125" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec120*250" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec120*500" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec120*1000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec120*2000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec120*4000" onClick={this.cellClickHandler}></td>
                                  <td className="info" id="lec120*8000" onClick={this.cellClickHandler}></td>
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
        )
    }
});

export default Redux.connect()(Hearing);
