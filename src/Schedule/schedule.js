import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./schedule.scss";

class schedule extends Component {
  render() {
    return (
      <div>
        <h2>스케쥴입니다</h2>
        <Link to="/">
          <button>홈으로</button>
        </Link>
        <div>
          <div>김성현 생일 06.20</div>
          <button>Open</button>
        </div>

        <div>
          <div>성현이 생일을 축하 합니다.</div>
          <button>Close</button>
        </div>
      </div>
    );
  }
}
export default schedule;
