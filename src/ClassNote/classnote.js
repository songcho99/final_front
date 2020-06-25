import React, { Component } from "react";
import { Link } from "react-router-dom";

class classnote extends Component {
  state = {
    searchgroup: [{ asd: "" }, { asd: 0 }, { fdf: "분야" }],
  };
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>강의노트입니다!</h2>
        <Link to="/">
          <button>홈으로</button>
        </Link>
      </div>
    );
  }
}
export default classnote;
