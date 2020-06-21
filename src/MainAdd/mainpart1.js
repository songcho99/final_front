import React, { Component } from "react";
import "./mainpart1.scss";
import Image from "../image/worker.jpg";
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

        <div id={this.props.part1}>
          <div id="part1tit">IT Campus</div>
          <div id="part1sub">
            <span id="part1sublabel">사람</span>과{" "}
            <span id="part1sublabel">사람</span> 사이 느낌을 주는 교육
          </div>
        </div>

        <div id="part1con2">
          <div className="part1tagbox" onClick={this.props.AllClick}>
            <div className={this.props.part1Alltag}>
              <i className="fas fa-globe"></i>
            </div>
            <div className="part1tagtext">All</div>
          </div>
          <div className="part1tagbox" onClick={this.props.PHPClick}>
            <div className={this.props.part1PHPtag}>
              <i className="fab fa-php"></i>
            </div>
            <div className="part1tagtext">PHP</div>
          </div>
          <div className="part1tagbox" onClick={this.props.ReactClick}>
            <div className={this.props.part1Reacttag}>
              <i className="fab fa-react"></i>
            </div>
            <div className="part1tagtext">React</div>
          </div>
          <div className="part1tagbox" onClick={this.props.JavaClick}>
            <div className={this.props.part1Javatag}>
              <i className="fab fa-java"></i>
            </div>
            <div className="part1tagtext">JAVA</div>
          </div>
        </div>

        {/* 전체 가로 슬라이드 박스 */}
        <div id={this.props.part1slide}>
          <div id="part1slidarrow1">
            <i className="fas fa-angle-left"></i>
          </div>
          <ul id="part1slidul">
            <li>1번 박스</li>
            <li>2번 박스</li>
            <li>3번 박스</li>
            <li>4번 박스</li>
          </ul>
          <div id="part1slidarrow2">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>

        {/* PHP 가로 슬라이드 박스 */}
        <div id={this.props.part1PHP}>
          <div id="part1slidarrow1">
            <i className="fas fa-angle-left"></i>
          </div>
          <ul id="part1slidul">
            <li>1번 박스</li>
            <li>2번 박스</li>
            <li>3번 박스</li>
            <li>4번 박스</li>
          </ul>
          <div id="part1slidarrow2">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>

        {/* React 가로 슬라이드 박스 */}
        <div id={this.props.part1React}>
          <div id="part1slidarrow1">
            <i className="fas fa-angle-left"></i>
          </div>
          <ul id="part1slidul">
            <li>
              <div className="part1imgbox">
                <div>1번 박스</div>
              </div>
            </li>
            <li>
              <div
                className="part1imgbox"
                style={{ backgroundImage: 'url(require("../image/sea.jpg"))' }}
              >
                <div>1번 박스</div>
              </div>
            </li>
            <li>
              <div
                className="part1imgbox"
                style={{
                  backgroundImage: 'url(require("../image/worker.jpg"))',
                }}
              >
                <div>1번 박스</div>
              </div>
            </li>
            <li>4번 박스</li>
          </ul>
          <div id="part1slidarrow2">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>

        {/* Java 가로 슬라이드 박스 */}
        <div id={this.props.Part1Java}>
          <div id="part1slidarrow1">
            <i className="fas fa-angle-left"></i>
          </div>
          <ul id="part1slidul">
            <li>1번 박스</li>
            <li>2번 박스</li>
            <li>3번 박스</li>
            <li>4번 박스</li>
          </ul>
          <div id="part1slidarrow2">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>

        {/* 뒤에 깔리는 검은 배경  */}
        <div id={this.props.part1back}>
          <div id="part1con4x" onClick={this.props.Con4X}>
            <i className="far fa-times-circle"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default mainpart1;
