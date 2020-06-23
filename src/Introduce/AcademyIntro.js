import React, { Component } from "react";
import { Link } from "react-router-dom";
import IntroduceMenu from "../Introduce/IntroduceMenu";
import "./AcademyIntro.scss";

class AcademyIntro extends Component {
  render() {
    let date = new Date();

    let deg = {
      transform:
        "rotate(" + ((date.getSeconds() / 60) * 360 - 90).toString() + "deg)",
      transformOrigin: "center",
    };

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <IntroduceMenu />
        <h2>학원소개 페이지입니다</h2>

        <hr />

        <div>
          <img src={require("../image/core.jpg")} id="Acback"></img>
        </div>

        <div>
          <img
            src={require("../image/core.jpg")}
            id="Acback2"
            style={{ deg }}
          ></img>
        </div>
      </div>
    );
  }
}
export default AcademyIntro;
