import React, { Component } from "react";
import { Link } from "react-router-dom";
import IntroduceMenu from "../Introduce/IntroduceMenu";
import "./AcademyIntro.scss";

class AcademyIntro extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
    });
  }
  render() {
    return (
      <div id="academyintro">
        <IntroduceMenu />

        <div id="academyintroback">
          <div id="academyintrobox">가만두지 않을거에요 학원 소개</div>
          <div id="academyintrobox">학원 시설</div>
          <div id="academyintrobox">오시는길</div>
        </div>
      </div>
    );
  }
}
export default AcademyIntro;
