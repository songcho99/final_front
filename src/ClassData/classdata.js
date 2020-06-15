import React, { Component } from "react";
import { Link } from "react-router-dom";

class classdata extends Component {
  render() {
    return (
      <div>
        <h2>수업자료입니다!</h2>
        <Link to="/writedata">
          <button>자료 작성</button>
        </Link>
        <br></br>
        <br></br>
        <Link to="/datadetail">
          <a href="#">스프링 프레임 워크 개념</a>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <hr />
        <Link to="/">
          <button>홈으로</button>
        </Link>
      </div>
    );
  }
}
export default classdata;
