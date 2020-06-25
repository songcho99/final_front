import React, { Component } from "react";
import CurriculumMenu from "../Curriculum/CurriculumMenu";
import "./CurriculumList.scss";

class CurriculumList extends Component {
  render() {
    return (
      <div id={this.props.currilist}>
        <div id="curriListback">
          <div>수강과정 목록입니다</div>
        </div>
      </div>
    );
  }
}
export default CurriculumList;
