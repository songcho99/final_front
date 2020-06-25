import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CurriculumMenu.scss";

class CurriculumMenu extends Component {
  constructor(props) {
    super(props);
    console.log("1:" + props);
  }
  fun1 = () => {
    this.props.test();
  };
  render() {
    const { CurrilistOn } = this.props;
    return (
      <div id="curriMenu">
        <div className="curriMenunav" onClick={this.props.CurrilistOn}>
          수강과정 목록
        </div>{" "}
        <div className="curriMenunav" onClick={this.props.calenderOn}>
          수강과정 일정
        </div>{" "}
      </div>
    );
  }
}
export default CurriculumMenu;
