import React, { Component } from "react";
import "./maininfo.scss";
import MainPart1 from "../MainAdd/mainpart1";
import MianPart2 from "../MainAdd/mainpart2";

import image from "../image/worker.jpg";

class maininfo extends Component {
  constructor() {
    super();

    this.state = {
      show: 1,
      num: "",
      num2: "none",
      num3: "none",
      num4: "none",

      // part1 에 사용하는  슬라이드 변수
      part1: "part1con", //타이틀 사라지는 변수
      part1back: "part1con4After", //백그라운드 변수
      part1slide: "hid", //전체 슬라이드 변수
      part1PHP: "hid", //PHP 슬라이드 변수
      part1React: "hid", //React 슬라이드 변수
      Part1Java: "hid", //Java 슬라이드 변수

      //part1 에 버튼 색상 변경 변수
      part1Alltag: "part1tagimg ",
      part1PHPtag: "part1tagimg ",
      part1Reacttag: "part1tagimg ",
      part1Javatag: "part1tagimg ",
    };
  }

  //con4 x 버튼
  Con4X = () => {
    this.setState({
      //박스들
      part1: "part1con",
      part1back: "part1con4After",
      part1slide: "hid",
      part1PHP: "hid",
      part1React: "hid",
      Part1Java: "hid",

      // 버튼
      part1Alltag: "part1tagimg",
      part1PHPtag: "part1tagimg",
      part1Reacttag: "part1tagimg",
      part1Javatag: "part1tagimg",
    });
  };

  //All 클릭시 힘스
  AllClick = () => {
    this.setState({
      part1: "part1conAfter",
      part1back: "part1con4",
      part1slide: "part1con3",
      part1PHP: "hid",
      part1React: "hid",
      Part1Java: "hid",

      // 버튼
      part1Alltag: "part1tagimgafter",
      part1PHPtag: "part1tagimg",
      part1Reacttag: "part1tagimg",
      part1Javatag: "part1tagimg",
    });
  };

  //React 클릭시 함수
  ReactClick = () => {
    this.setState({
      part1: "part1conAfter",
      part1back: "part1con4",
      part1slide: "hid",
      part1PHP: "hid",
      part1React: "part1con3",
      Part1Java: "hid",

      // 버튼
      part1Alltag: "part1tagimg",
      part1PHPtag: "part1tagimg",
      part1Reacttag: " part1tagimgafter",
      part1Javatag: "part1tagimg",
    });
  };

  //PHP 클릭시 함수
  PHPClick = () => {
    this.setState({
      // 박스들
      part1: "part1conAfter",
      part1back: "part1con4",
      part1slide: "hid",
      part1PHP: "part1con3",
      part1React: "hid",
      Part1Java: "hid",

      // 버튼
      part1Alltag: "part1tagimg",
      part1PHPtag: " part1tagimgafter",
      part1Reacttag: "part1tagimg",
      part1Javatag: "part1tagimg",
    });
  };

  //Java 클릭시 함수
  JavaClick = () => {
    this.setState({
      //박스들
      part1: "part1conAfter",
      part1back: "part1con4",
      part1slide: "hid",
      part1PHP: "hid",
      part1React: "hid",
      Part1Java: "part1con3",

      // 버튼
      part1Alltag: "part1tagimg",
      part1PHPtag: "part1tagimg",
      part1Reacttag: "part1tagimg",
      part1Javatag: " part1tagimgafter",
    });
  };

  //화면 내려가는 함수
  DownHandle = () => {
    if (this.state.show === 1) {
      this.setState({
        show: 2,
        num: "",
        num2: "nonedown",
        num3: "none",
        num4: "none",

        // part1 에 사용하는  슬라이드 변수
        part1: "part1con", //타이틀 사라지는 변수
        part1back: "part1con4After", //백그라운드 변수
        part1slide: "hid", //전체 슬라이드 변수
        part1PHP: "hid", //PHP 슬라이드 변수
        part1React: "hid", //React 슬라이드 변수
        Part1Java: "hid", //Java 슬라이드 변수

        //part1 에 버튼 색상 변경 변수
        part1Alltag: "part1tagimg ",
        part1PHPtag: "part1tagimg ",
        part1Reacttag: "part1tagimg ",
        part1Javatag: "part1tagimg ",
      });
    } else if (this.state.show === 2) {
      this.setState({
        show: 3,
        num: "",
        num2: "",
        num3: "nonedown",
        num4: "none",
      });
    } else if (this.state.show === 3) {
      this.setState({
        show: 4,
        num: "",
        num2: "",
        num3: "",
        num4: "nonedown",
      });
    } else if (this.state.show === 4) {
      this.setState({
        show: 1,
        num: "maininfoshowlast",
        num2: "nonedownlast4",
        num3: "nonedownlast3",
        num4: "nonedownlast2",
      });
    }
  };

  // 화면 올라가는 함수
  UpHandle = () => {
    if (this.state.show === 1) {
      this.setState({
        show: 4,
        num: "noneup",
        num2: "noneup",
        num3: "noneup",
        num4: "maininfoUp",

        // part1 에 사용하는  슬라이드 변수
        part1: "part1con", //타이틀 사라지는 변수
        part1back: "part1con4After", //백그라운드 변수
        part1slide: "hid", //전체 슬라이드 변수
        part1PHP: "hid", //PHP 슬라이드 변수
        part1React: "hid", //React 슬라이드 변수
        Part1Java: "hid", //Java 슬라이드 변수

        //part1 에 버튼 색상 변경 변수
        part1Alltag: "part1tagimg ",
        part1PHPtag: "part1tagimg ",
        part1Reacttag: "part1tagimg ",
        part1Javatag: "part1tagimg ",
      });
    } else if (this.state.show === 2) {
      this.setState({
        show: 1,
        num: "maininfoUp",
        num2: "noneup",
        num3: "noneup",
        num4: "noneup",
      });
    } else if (this.state.show === 3) {
      this.setState({
        show: 2,
        num: "noneup",
        num2: "maininfoUp",
        num3: "noneup",
        num4: "noneup",
      });
    } else if (this.state.show === 4) {
      this.setState({
        show: 3,
        num: "noneup",
        num2: "noneup",
        num3: "maininfoUp",
        num4: "noneup",
      });
    }
  };

  render() {
    return (
      <div>
        {/* 첫번째 화면  */}
        <div id="main-con" className={this.state.num}>
          <MainPart1
            // 박스 변수
            part1={this.state.part1}
            part1back={this.state.part1back}
            part1slide={this.state.part1slide}
            part1PHP={this.state.part1PHP}
            part1React={this.state.part1React}
            Part1Java={this.state.Part1Java}
            // 버튼 변수
            part1Alltag={this.state.part1Alltag}
            part1PHPtag={this.state.part1PHPtag}
            part1Reacttag={this.state.part1Reacttag}
            part1Javatag={this.state.part1Javatag}
            //이벤트 함수
            AllClick={this.AllClick.bind(this)}
            PHPClick={this.PHPClick.bind(this)}
            ReactClick={this.ReactClick.bind(this)}
            JavaClick={this.JavaClick.bind(this)}
            Con4X={this.Con4X.bind(this)}
          ></MainPart1>
        </div>
        {/* 두번째 화면  */}
        <div id="main-con2" className={this.state.num2}>
          <MianPart2></MianPart2>
        </div>
        {/* 세번째 화면  */}
        <div id="main-con3" className={this.state.num3}>
          GooDee Course 기업이 "신입" 에게 바라는 것은 SW 개발의 기본을 출실히
          알고 있는가? 입니다. 6개월이 지난 후 기업 실무현장에서의 당신은
          "당당합니다." 진행하고 있는 과정
        </div>
        {/* 네번째 화면  */}
        <div id="main-con4" className={this.state.num4}>
          스터디 + 채용공고
        </div>

        {/* 화면 이동 화살표 박스  */}
        <div id="mainiffoarrowbox">
          {/* 올라가는 화살표  */}
          <div className="mainiffoarrow" onClick={this.UpHandle.bind(this)}>
            <i className="fas fa-chevron-up"></i>
          </div>

          {/* 내려가는 화살표 */}
          <div className="mainiffoarrow" onClick={this.DownHandle.bind(this)}>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default maininfo;
