import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CurriculumMenu.scss";

class CurriculumMenu extends Component {
  render() {
    return (
      <div id="curriMenu">
        <div id="curriMenuback"></div>
        <div className="curriMenunav" onClick={this.props.calenderOn}>
          수강과정 일정
        </div>
        <div className="curriMenunav" onClick={this.props.CurrilistOn}>
          수강과정 목록
        </div>
      </div>
    );
  }
}
export default CurriculumMenu;
