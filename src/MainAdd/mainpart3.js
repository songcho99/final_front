import React, { Component } from "react";
import "./mainpart3.scss";
import { tr } from "date-fns/locale";

class mainpart3 extends Component {
  state = {
    page: true,
    box: "part3slid",
    box2: "part3slidch2",
  };

  slidbox = () => {
    this.setState({
      page: false,
      box: "part3slid",
      box2: "part3slidch2",
    });
  };

  slidbox2 = () => {
    this.setState({
      page: true,
      box: "part3slidch",
      box2: "part3slid2",
    });
  };

  render() {
    return (
      <div id="part3back">
        <div id="part3back2"></div>
        <div id="part3box">
          <div id="part3textbox">
            <div id="part3texttit">
              IT Campus Study
              <span id="part3texttitspan">
                <i className="fas fa-pencil-alt"></i>
              </span>
            </div>
            <div className="part3textlabel">
              "인간다움"을 존중하는 소통과 공감을 소중하게 생각합니다.
            </div>
            <div className="part3textlabel">취업에 휴머니즘을 덥다.</div>
          </div>
          <div id="part3slidbox">
            <div id="part3slidbtnbox">
              <button
                className="part3slidbtn"
                onClick={this.slidbox.bind(this)}
              ></button>
              <button
                className="part3slidbtn"
                onClick={this.slidbox2.bind(this)}
              ></button>
            </div>
            <div id="part3slidtext">
              {/* 첫번째 박스 */}
              <ul id={this.state.box} className="part3slidch">
                <li>
                  <div className="part3slidli">
                    <div className="part3slidboxin">
                      <img
                        src={require("../image/worker.jpg")}
                        className="part3slidimg"
                      ></img>
                    </div>
                    <div className="part3slidboxin">
                      <div className="part3intit">김성현의 강남역 모임</div>
                      <div className="part3insub">
                        시작날짜: 2020-06-22 ~ 끝날짜: 2020-07-1
                      </div>
                      <div className="partinlabel">
                        코딩으로 세계 정복할 파티원 구합니다.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="part3slidli">
                    <div className="part3slidboxin">
                      <img
                        src={require("../image/worker.jpg")}
                        className="part3slidimg"
                      ></img>
                    </div>
                    <div className="part3slidboxin">
                      <div className="part3intit">김성현의 강남역 모임</div>
                      <div className="part3insub">
                        시작날짜: 2020-06-22 ~ 끝날짜: 2020-07-1
                      </div>
                      <div className="partinlabel">
                        코딩으로 세계 정복할 파티원 구합니다.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="part3slidli">
                    <div className="part3slidboxin">
                      <img
                        src={require("../image/worker.jpg")}
                        className="part3slidimg"
                      ></img>
                    </div>
                    <div className="part3slidboxin">
                      <div className="part3intit">김성현의 강남역 모임</div>
                      <div className="part3insub">
                        시작날짜: 2020-06-22 ~ 끝날짜: 2020-07-1
                      </div>
                      <div className="partinlabel">
                        코딩으로 세계 정복할 파티원 구합니다.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="part3slidlilast">
                    <div className="part3slidboxin">
                      <img
                        src={require("../image/worker.jpg")}
                        className="part3slidimg"
                      ></img>
                    </div>
                    <div className="part3slidboxin">
                      <div className="part3intit">김성현의 강남역 모임</div>
                      <div className="part3insub">
                        시작날짜: 2020-06-22 ~ 끝날짜: 2020-07-1
                      </div>
                      <div className="partinlabel">
                        코딩으로 세계 정복할 파티원 구합니다.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              {/* 두번째 박스 */}
              <ul id={this.state.box2}>
                <li>
                  <div className="part3slidli">
                    <div className="part3slidboxin">
                      <img
                        src={require("../image/core.jpg")}
                        className="part3slidimg"
                      ></img>
                    </div>
                    <div className="part3slidboxin">
                      <div className="part3intit">김성현의 강남역 모임</div>
                      <div className="part3insub">
                        시작날짜: 2020-06-22 ~ 끝날짜: 2020-07-1
                      </div>
                      <div className="partinlabel">
                        김성현의 팝업아티스트의 모든것
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="part3slidli">
                    <div className="part3slidboxin">
                      <img
                        src={require("../image/core.jpg")}
                        className="part3slidimg"
                      ></img>
                    </div>
                    <div className="part3slidboxin">
                      <div className="part3intit">김성현의 강남역 모임</div>
                      <div className="part3insub">
                        시작날짜: 2020-06-22 ~ 끝날짜: 2020-07-1
                      </div>
                      <div className="partinlabel">
                        김성현의 팝업아티스트의 모든것
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="part3slidli">
                    <div className="part3slidboxin">
                      <img
                        src={require("../image/core.jpg")}
                        className="part3slidimg"
                      ></img>
                    </div>
                    <div className="part3slidboxin">
                      <div className="part3intit">김성현의 강남역 모임</div>
                      <div className="part3insub">
                        시작날짜: 2020-06-22 ~ 끝날짜: 2020-07-1
                      </div>
                      <div className="partinlabel">
                        김성현의 팝업아티스트의 모든것
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="part3slidlilast">
                    <div className="part3slidboxin">
                      <img
                        src={require("../image/core.jpg")}
                        className="part3slidimg"
                      ></img>
                    </div>
                    <div className="part3slidboxin">
                      <div className="part3intit">김성현의 강남역 모임</div>
                      <div className="part3insub">
                        시작날짜: 2020-06-22 ~ 끝날짜: 2020-07-1
                      </div>
                      <div className="partinlabel">
                        코딩으로 세계 정복할 파티원 구합니다.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default mainpart3;
