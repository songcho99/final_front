import React, { Component } from "react";
import "./qna.scss";
import Sid from "../Notice/noticeSid";
class qna extends Component {
  render() {
    return (
      <div>
        <div id="qnaimgbox">
          <img src={require("../Notice/noticeback.jpg")} id="qnaimg"></img>
          <div id="qnaimgtext">
            <div id="qnaimgtit">IT Campus Service</div>
            <div id="qnaimgsub">IT Campus Service</div>
          </div>
        </div>
        <div>
          <div>Q&A</div>
          <div>IT Campus 관련한 모든 궁금증을 해결해 드립니다.</div>
        </div>
        <Sid></Sid>
      </div>
    );
  }
}

export default qna;
