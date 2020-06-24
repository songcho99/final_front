import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./IntroduceMenu.scss";

class IntroduceMenu extends Component {
  state = {
    Intro: 0,
    house: window.innerHeight,
    road: window.innerHeight * 2,
    introOn: "introMenuColor",
    houseOn: "",
    roadOn: "",
    standad: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      // console.log(window.innerHeight);
      // console.log(window.scrollY);
      let scrollY = window.scrollY;
      // console.log("scrollY: " + scrollY);

      if (scrollY >= 0 && scrollY < window.innerHeight) {
        // console.log("학원소개");
        this.setState({
          introOn: "introMenuColor",
          houseOn: "",
          roadOn: "",
        });
      } else if (
        scrollY >= window.innerHeight &&
        scrollY < window.innerHeight * 2
      ) {
        // console.log("학원 시설");
        this.setState({
          introOn: "",
          houseOn: "introMenuColor",
          roadOn: "",
        });
      } else if (scrollY >= window.innerHeight * 2) {
        // console.log("오시는길");
        this.setState({
          introOn: "",
          houseOn: "",
          roadOn: "introMenuColor",
        });
      }
    });
  }

  //소개페이지 이동
  Intro = () => {
    // console.log("소개페이지로");
    window.scrollTo({ top: this.state.Intro, left: 0, behavior: "smooth" });
  };

  //학원시설로 이동
  House = () => {
    // console.log("학원시설로");
    window.scrollTo({ top: this.state.house, left: 0, behavior: "smooth" });
  };

  //오시는길 이동
  Road = () => {
    // console.log("오시는길로");
    window.scrollTo({ top: this.state.road, left: 0, behavior: "smooth" });
  };

  render() {
    return (
      <div>
        <div id="introduceMenu">
          <div
            id="introMenu"
            onClick={this.Intro.bind(this)}
            className={this.state.introOn}
          >
            학원 소개
          </div>
          <div
            id="introMenu2"
            onClick={this.House.bind(this)}
            className={this.state.houseOn}
          >
            학원 시설
          </div>
          <div
            id="introMenu3"
            onClick={this.Road.bind(this)}
            className={this.state.roadOn}
          >
            오시는 길
          </div>
        </div>
      </div>
    );
  }
}
export default IntroduceMenu;
