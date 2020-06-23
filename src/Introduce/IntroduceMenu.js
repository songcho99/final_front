import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./IntroduceMenu.scss";

class IntroduceMenu extends Component {
  render() {
    return (
      <div>
        <div id="introduceMenu">
          <div id="introMenu">학원 소개</div>
          <div id="introMenu2">학원 시설</div>
          <div id="introMenu3">오시는 길</div>
        </div>
      </div>
    );
  }
}
export default IntroduceMenu;
