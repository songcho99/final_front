import React, { Component } from "react";
import "./mainpart3.scss";

class mainpart3 extends Component {
  render() {
    return (
      <div id="part3back">
        <div id="part3back2"></div>
        <div id="part3box">
          <div id="part3textbox">
            <div id="part3texttit">
              IT Campus Story{" "}
              <span id="part3texttitspan">
                <i className="fab fa-canadian-maple-leaf"></i>
              </span>
            </div>
            <div className="part3textlabel">
              "인간다움"을 존중하는 소통과 공감을 소중하게 생각합니다.
            </div>
            <div className="part3textlabel">취업에 휴머니즘을 덥다.</div>
          </div>
          <div id="part3slidbox">
            <div id="part3slidbtnbox">
              <button className="part3slidbtn"></button>
              <button className="part3slidbtn"></button>
            </div>
            <div id="part3slidtext">
              <ul id="part3slid">
                <li>
                  <div className="part3slidli">
                    <div>사진</div>
                    <div>글</div>
                  </div>
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default mainpart3;
