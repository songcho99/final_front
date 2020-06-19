import React, { Component } from "react";
import "./mainpart1.scss";

//비디오 삽입
import MainVideo from "../Video/Circuit.mp4";

class mainpart1 extends Component {
  render() {
    return (
      <div id="part1back">
        <div id="part1videobox" style={{ width: "100%" }} align="center">
          <video
            src={MainVideo}
            id="mainvideo"
            loop
            autoPlay
            style={{ zIndex: "0" }}
          >
            <source type="video/mp4"></source>
          </video>
        </div>
        <div id="part1con">
          <div id="part1tit">IT Campus</div>
          <div id="part1sub">
            <span id="part1sublabel">사람</span>과{" "}
            <span id="part1sublabel">사람</span> 사이 느낌을 주는 교육
          </div>
        </div>
        <div id="part2con">
          <div className="part2tagbox">
            <div className="part2tagimg">
              <a href="https://icons8.com/icon/38294/java"></a>
            </div>
            <div>JAVA</div>
          </div>
        </div>
      </div>
    );
  }
}

export default mainpart1;
