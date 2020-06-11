import React, { Component, useState } from "react";
import "./menu.css";

class menu extends Component {
  state = {
    hid: true,
    hid2: true,
    hid3: true,
    hid4: true,
  };

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
    // const [isShown, setIsShown] = useState(false);

    return (
      <div id="menu">
        <div className="menu-con" id="menu-con1">
          <div className="menu-container" id="menu-big">
            <div>취업 공고 크롤링</div>
          </div>
          <div className="menu-container" id="menu-sm">
            <div>스터디</div>
          </div>
        </div>
        <div className="menu-con">
          <div
            className="menu-container2"
            id="menu-con"
            onMouseEnter={this.MouseEnter.bind(this)}
            onMouseLeave={this.MouseLeave.bind(this)}
          >
            <div className="menu-nav">
              {this.state.hid && <div>강의노트</div>}
              {!this.state.hid && <div>숨김</div>}
            </div>
          </div>
          <div
            className="menu-container2"
            id="menu-con2"
            onMouseEnter={this.MouseEnter2.bind(this)}
            onMouseLeave={this.MouseLeave2.bind(this)}
          >
            <div className="menu-nav">
              {this.state.hid2 && <div>수업자료</div>}
              {!this.state.hid2 && <div>숨김</div>}
            </div>
          </div>
          <div
            className="menu-container2"
            id="menu-con3"
            onMouseEnter={this.MouseEnter3.bind(this)}
            onMouseLeave={this.MouseLeave3.bind(this)}
          >
            <div className="menu-nav">
              {this.state.hid3 && <div>스케줄러</div>}
              {!this.state.hid3 && <div>숨김</div>}
            </div>
          </div>
          <div
            className="menu-container2"
            id="menu-con4"
            onMouseEnter={this.MouseEnter4.bind(this)}
            onMouseLeave={this.MouseLeave4.bind(this)}
          >
            <div className="menu-nav">
              {this.state.hid4 && <div>메모 & 차트</div>}
              {!this.state.hid4 && (
                <div>
                  <div>메모</div>
                  <di>차트</di>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default menu;
