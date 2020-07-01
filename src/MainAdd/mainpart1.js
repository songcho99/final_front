import React, { Component } from "react";
import "./mainpart1.scss";
import Image from "../image/worker.jpg";
//비디오 삽입
import MainVideo from "../Video/Circuit.mp4";

// 마테리얼 아바타
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

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
            <label id="part1sublabel">사람</label>과
            <label id="part1sublabel">사람</label> 사이 느낌을 주는 교육
          </div>
        </div>

        <div id="part1con2">
          <div id={this.props.black} onClick={this.props.Con4X}>
            <i className="far fa-times-circle"></i>
          </div>
          <div className="part1tagbox" onClick={this.props.AllClick}>
            <div className={this.props.part1Alltag}>
              <i className="fas fa-globe"></i>
            </div>
            <div className="part1tagtext">All</div>
          </div>
          <div className="part1tagbox" onClick={this.props.PHPClick}>
            <div className={this.props.part1PHPtag}>
              <i className="fas fa-database"></i>
            </div>
            <div className="part1tagtext">빅데이터</div>
          </div>
          <div className="part1tagbox" onClick={this.props.ReactClick}>
            <div className={this.props.part1Reacttag}>
              <i className="fas fa-cloud"></i>
            </div>
            <div className="part1tagtext">클라우드</div>
          </div>
          <div className="part1tagbox" onClick={this.props.JavaClick}>
            <div className={this.props.part1Javatag}>
              <i className="fas fa-brain"></i>
            </div>
            <div className="part1tagtext">인공지능</div>
          </div>
        </div>

        {/* 전체 가로 슬라이드 박스 */}
        <div id={this.props.part1slide}>
          <div id="part1slidarrow1">
            <i className="fas fa-angle-left"></i>
          </div>
          <ul id="part1slidul">
            {/* 이안에서 로직 돌리면됨  */}
            <li>
              <div className="curricard3">
                {/* 헤드 부분 */}
                <div className="curricardhd3">
                  <div className="curricarthdtit3">모집중</div>
                  <div className="curricarthdsub3">인공지능</div>
                </div>

                {/* 몸통 부분 */}
                <div className="curricardmain3">
                  <div className="curricardmainimgbox3">
                    <img alt="" className="curricardimg" />
                  </div>

                  <div className="curricardmainback3"></div>
                  <Link className="curricardmaintext3">
                    <div className="studylistcardAvatar3">
                      <Avatar style={{ width: "40px", height: "40px" }} />
                    </div>
                    <div className="curricardmainnav">제목</div>
                  </Link>
                </div>

                {/* 바닥 */}
                <div className="currifooter3">
                  <div>시작날짜 끝날짜</div>
                </div>
              </div>
            </li>
            {/* 여기서 끝나 */}
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
            {/* 이안에서 로직 돌리면됨  */}
            <li>
              <div className="curricard3">
                {/* 헤드 부분 */}
                <div className="curricardhd3">
                  <div className="curricarthdtit3">모집중</div>
                  <div className="curricarthdsub3">인공지능</div>
                </div>

                {/* 몸통 부분 */}
                <div className="curricardmain3">
                  <div className="curricardmainimgbox3">
                    <img alt="" className="curricardimg" />
                  </div>

                  <div className="curricardmainback3"></div>
                  <Link className="curricardmaintext3">
                    <div className="studylistcardAvatar3">
                      <Avatar style={{ width: "40px", height: "40px" }} />
                    </div>
                    <div className="curricardmainnav">제목</div>
                  </Link>
                </div>

                {/* 바닥 */}
                <div className="currifooter3">
                  <div>시작날짜 끝날짜</div>
                </div>
              </div>
            </li>
            {/* 여기서 끝나 */}
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
            {/* 이안에서 로직 돌리면됨  */}
            <li>
              <div className="curricard3">
                {/* 헤드 부분 */}
                <div className="curricardhd3">
                  <div className="curricarthdtit3">모집중</div>
                  <div className="curricarthdsub3">인공지능</div>
                </div>

                {/* 몸통 부분 */}
                <div className="curricardmain3">
                  <div className="curricardmainimgbox3">
                    <img alt="" className="curricardimg" />
                  </div>

                  <div className="curricardmainback3"></div>
                  <Link className="curricardmaintext3">
                    <div className="studylistcardAvatar3">
                      <Avatar style={{ width: "40px", height: "40px" }} />
                    </div>
                    <div className="curricardmainnav">제목</div>
                  </Link>
                </div>

                {/* 바닥 */}
                <div className="currifooter3">
                  <div>시작날짜 끝날짜</div>
                </div>
              </div>
            </li>
            {/* 여기서 끝나 */}
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
            {/* 이안에서 로직 돌리면됨  */}
            <li>
              <div className="curricard3">
                {/* 헤드 부분 */}
                <div className="curricardhd3">
                  <div className="curricarthdtit3">모집중</div>
                  <div className="curricarthdsub3">인공지능</div>
                </div>

                {/* 몸통 부분 */}
                <div className="curricardmain3">
                  <div className="curricardmainimgbox3">
                    <img alt="" className="curricardimg" />
                  </div>

                  <div className="curricardmainback3"></div>
                  <Link className="curricardmaintext3">
                    <div className="studylistcardAvatar3">
                      <Avatar style={{ width: "40px", height: "40px" }} />
                    </div>
                    <div className="curricardmainnav">제목</div>
                  </Link>
                </div>

                {/* 바닥 */}
                <div className="currifooter3">
                  <div>시작날짜 끝날짜</div>
                </div>
              </div>
            </li>
            {/* 여기서 끝나 */}
          </ul>
          <div id="part1slidarrow2">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>

        {/* 뒤에 깔리는 검은 배경  */}
        <div id={this.props.part1back}></div>
      </div>
    );
  }
}

export default mainpart1;
