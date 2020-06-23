import React, { Component } from "react";
import { Link } from "react-router-dom";
import IntroduceMenu from "../Introduce/IntroduceMenu";
import "./AcademyIntro.scss";

class AcademyIntro extends Component {
  state = {
    date: new Date(),
  };

  componentWillMount() {
    // setInterval(() => {
    //   console.log("돌아라 돌아라 아주돌아");
    //   this.setState({
    //     date: new Date(),
    //   });
    // }, 1000);
  }
  render() {
    let deg = {
      transform:
        "rotate(" +
        ((this.state.date.getSeconds() / 60) * 360 - 90).toString() +
        "deg)",
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
            style={deg}
          ></img>
        </div>
      </div>
    );
  }
}
export default AcademyIntro;
