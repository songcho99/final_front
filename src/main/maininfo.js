import React, { Component } from "react";
import "./maininfo.css";

class maininfo extends Component {
  constructor() {
    super();

    this.state = {
      slideno: 0,
      show: 1,
      num: "",
      num2: "none",
      num3: "none",
      num4: "none",
    };
  }

  //화면 내려가는 함수
  DownHandle = () => {
    if (this.state.show === 1) {
      this.setState({
        show: 2,
        num: "none",
        num2: "",
        num3: "none",
        num4: "none",
      });
    } else if (this.state.show === 2) {
      this.setState({
        show: 3,
        num: "none",
        num2: "none",
        num3: "",
        num4: "none",
      });
    } else if (this.state.show === 3) {
      this.setState({
        show: 4,
        num: "none",
        num2: "none",
        num3: "none",
        num4: "",
      });
    } else if (this.state.show === 4) {
      this.setState({
        show: 1,
        num: "",
        num2: "none",
        num3: "none",
        num4: "none",
      });
    }
  };

  // 화면 올라가는 함수
  UpHandle = () => {
    if (this.state.show === 1) {
      this.setState({
        show: 4,
        num: "none",
        num2: "none",
        num3: "none",
        num4: "",
      });
    } else if (this.state.show === 2) {
      this.setState({
        show: 1,
        num: "",
        num2: "none",
        num3: "none",
        num4: "none",
      });
    } else if (this.state.show === 3) {
      this.setState({
        show: 2,
        num: "none",
        num2: "",
        num3: "none",
        num4: "none",
      });
    } else if (this.state.show === 4) {
      this.setState({
        show: 3,
        num: "none",
        num2: "none",
        num3: "",
        num4: "none",
      });
    }
  };

  slide = () => {
    setInterval(() => {
      if (this.state.slideno === 2) {
        this.setState({
          slideno: 0,
        });
      } else {
        this.setState({
          slideno: +this.state.slideno,
        });
      }
    }, 5000);
  };

  render() {
    return (
      <div>
        <div id="main-con" className={this.state.num}>
          {/* 첫번째 화면  */}
          <div
            className="main-slide"
            id={this.state.slideno === 0 ? "slidon" : ""}
          >
            <div>IT / SW Training Experts Course</div>
            <div>
              클라우드 시스템
              <span>성현아 배가 고프다리</span>
            </div>
          </div>

          <div
            className="main-slide"
            id={this.state.slideno === 1 ? "slidon" : ""}
          >
            <div>IT / SW Training Experts Course</div>
            <div>
              자바 SW 개발
              <span>성현아 지도가 보고 싶구나</span>
            </div>
          </div>

          <div
            className="main-slide"
            id={this.state.slideno === 2 ? "slidon" : ""}
          >
            <div>IT / SW Training Experts Course</div>
            <div>
              빅데이터 전문가
              <span>성현아 집에는 언제가지?</span>
            </div>
          </div>
        </div>
        {/* 두번째 화면  */}
        <div id="main-con2" className={this.state.num2}>
          학원 설명
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

        {/* 오른쪽 화면 전환 버튼  */}
        <div id="rightbox">
          {/* 1번 */}
          <div>
            <i className="far fa-circle"></i>
          </div>
          {/* 2번 */}
          <div>
            <i className="far fa-circle"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default maininfo;
