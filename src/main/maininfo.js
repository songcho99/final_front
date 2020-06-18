import React, { Component } from "react";
import "./maininfo.css";

class maininfo extends Component {
  constructor() {
    super();

    this.state = {
      slideno: 0,
      scrolled: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 20;
      console.log(window.scrollY);
      if (isTop !== true) {
        this.setState({ scrolled: false });
      } else {
        this.setState({ scrolled: true });
      }
    });
  }
  slide = () => {
    setInterval(() => {
      if (this.state.slideno === 2) {
        this.setState({
          slideno: 0,
        });
      } else {
        this.setState({
          slideno: ++this.state.slideno,
        });
      }
    }, 5000);
  };

  render() {
    return (
      <div>
        <div id="main-con">
          <div
            className="main-slide"
            id={this.state.slideno === 0 ? "slidon" : ""}
          >
            <div>IT / SW Training Experts Course</div>
            <div>
              클라우드 시스템
              <span>제묵스성현아 배가 고프다리</span>
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
        <div id="main-con2">학원 설명</div>
        <div id="main-con3">
          GooDee Course 기업이 "신입" 에게 바라는 것은 SW 개발의 기본을 출실히
          알고 있는가? 입니다. 6개월이 지난 후 기업 실무현장에서의 당신은
          "당당합니다." 진행하고 있는 과정
        </div>
        <div id="main-con4">스터디 + 채용공고</div>
      </div>
    );
  }
}
export default maininfo;
