import React, { Component } from "react";

class menu extends Component {
  render() {
    return (
      <div id="header">
        <div>
          {/* 메인 로고 및 홈 버튼 */}
          <a id="hd-log" to="/" href="/">
            IT Campus
          </a>
        </div>
      </div>
    );
  }
}

export default menu;
