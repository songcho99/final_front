import React, { Component } from "react";
import "./menu.css";

// https://stackoverrun.com/ko/q/12079239

class menu extends Component {
  state = {
    hid: true,
    hid2: true,
    hid3: true,
    hid4: true,
    notichid: true,
  };

  // 스크롤 이벤트
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isNotic = window.scrollY < 45;
      // console.log(window.scrollY);
      if (isNotic !== true) {
        this.setState({ notichid: false });
      } else {
        this.setState({ notichid: true });
      }
    });
  }

  // 호버 이벤트
  MouseEnter = () => {
    this.setState({
      hid: false,
    });
  };

  MouseLeave = () => {
    this.setState({
      hid: true,
    });
  };
  MouseEnter2 = () => {
    this.setState({
      hid2: false,
    });
  };

  MouseLeave2 = () => {
    this.setState({
      hid2: true,
    });
  };
  MouseEnter3 = () => {
    this.setState({
      hid3: false,
    });
  };

  MouseLeave3 = () => {
    this.setState({
      hid3: true,
    });
  };
  MouseEnter4 = () => {
    this.setState({
      hid4: false,
    });
  };

  MouseLeave4 = () => {
    this.setState({
      hid4: true,
    });
  };

  render() {
    return (
      <div id="menu">
        <ul className="menu-con" id="menu-con1">
          <li id="menu-con1-1">취업 공고 크롤링</li>
          <li id="menu-con1-2">스터디</li>
        </ul>
        <ul className="menu-con" id="menu-con2">
          <li
            id="menu-con2-1"
            onMouseEnter={this.MouseEnter.bind(this)}
            onMouseLeave={this.MouseLeave.bind(this)}
          >
            {this.state.hid && (
              <div c lassName="menu-con2-on">
                강의 노트
              </div>
            )}
            {!this.state.hid && <div className="menu-con2-off">hidden</div>}
            <div> </div>
          </li>
          <li
            id="menu-con2-2"
            onMouseEnter={this.MouseEnter2.bind(this)}
            onMouseLeave={this.MouseLeave2.bind(this)}
          >
            {this.state.hid2 && (
              <div c lassName="menu-con2-on">
                수업자료
              </div>
            )}
            {!this.state.hid2 && <div className="menu-con2-off">hidden</div>}
          </li>
          <li
            id="menu-con2-3"
            onMouseEnter={this.MouseEnter3.bind(this)}
            onMouseLeave={this.MouseLeave3.bind(this)}
          >
            {this.state.hid3 && (
              <div c lassName="menu-con2-on">
                스케줄러
              </div>
            )}
            {!this.state.hid3 && <div className="menu-con2-off">hidden</div>}
          </li>
          <li
            id="menu-con2-4"
            onMouseEnter={this.MouseEnter4.bind(this)}
            onMouseLeave={this.MouseLeave4.bind(this)}
          >
            {this.state.hid4 && (
              <div c lassName="menu-con2-on">
                메모 & 차트
              </div>
            )}
            {!this.state.hid4 && (
              <div className="menu-con2-off" id="menu-con2-off4">
                <div>메모</div>
                <div>차트</div>
              </div>
            )}
          </li>
        </ul>
        <div
          id="main-notic"
          className={this.state.notichid ? "main-noticon" : "main-noticoff"}
        >
          공지사항
        </div>
      </div>
    );
  }
}

export default menu;
