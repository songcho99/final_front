import React, { Component } from "react";
import "./sidmenu.css";

class sidmenu extends Component {
  state = {
    SidMenuOpen: "", //사이드바 여는 변수
    SidMenuClose: "sidsub hid", //사이드바 닫는 변수
    HoverClass: "sidhover vishid", //강의 자료 호버
    HoverStudy: "sidhover vishid", //스터디 호버
    Hoverschedule: "sidhover vishid", //스케줄 호버
    HoverChat: "sidhover vishid", //차트 호버
    HoverMyPage: "sidhover vishid", //마이페이지 호버
  };
  //sidmenu 일정 범위를 벋어 났을때 자동으로 기본 버튼으로 돌아감
  HoverSidMenu = () => {
    this.setState({
      SidMenuOpen: "", //사이드바 여는 변수
      SidMenuClose: "sidsub hid", //사이드바 닫는 변수
      HoverClass: "sidhover vishid", //강의 자료 호버
      HoverStudy: "sidhover vishid", //스터디 호버
      Hoverschedule: "sidhover vishid", //스케줄 호버
      HoverChat: "sidhover vishid", //차트 호버
      HoverMyPage: "sidhover vishid", //마이페이지 호버
    });
  };

  //강의자료 호버 토글 함수
  HoverClassOpen = () => {
    // console.log("호버열림");
    if (this.state.HoverClass === "sidhover vishid") {
      this.setState({
        HoverClass: "sidhover",
      });
    } else {
      this.setState({
        HoverClass: "sidhover vishid",
      });
    }
  };

  //스터디 호버 토글 함수
  HoverStudyOpen = () => {
    // console.log("호버열림");
    if (this.state.HoverStudy === "sidhover vishid") {
      this.setState({
        HoverStudy: "sidhover",
      });
    } else {
      this.setState({
        HoverStudy: "sidhover vishid",
      });
    }
  };

  //스케줄 호버 토글 함수
  HoverscheduleOpen = () => {
    // console.log("호버열림");
    if (this.state.Hoverschedule === "sidhover vishid") {
      this.setState({
        Hoverschedule: "sidhover",
      });
    } else {
      this.setState({
        Hoverschedule: "sidhover vishid",
      });
    }
  };

  //차트 호버 토글 함수
  HoverChatOpen = () => {
    // console.log("호버열림");
    if (this.state.HoverChat === "sidhover vishid") {
      this.setState({
        HoverChat: "sidhover",
      });
    } else {
      this.setState({
        HoverChat: "sidhover vishid",
      });
    }
  };

  //마이페이지 호버시 토글 함수
  HoverMyPageOpen = () => {
    // console.log("호버열림");
    if (this.state.HoverMyPage === "sidhover vishid") {
      this.setState({
        HoverMyPage: "sidhover",
      });
    } else {
      this.setState({
        HoverMyPage: "sidhover vishid",
      });
    }
  };
  //사이드바 닫는 함수
  SideMenuClose = () => {
    this.setState({
      SidMenuOpen: "",
      SidMenuClose: "sidsub hid",
    });
  };

  // 사이드바 여는 함수
  SideMenuOpen = () => {
    this.setState({
      SidMenuOpen: "hid",
      SidMenuClose: "sidsub",
    });
  };
  render() {
    return (
      <div>
        <div id="sidmenu" onMouseLeave={this.HoverSidMenu.bind(this)}>
          {/* 기본 사이드 버튼 */}
          <a
            id="sidmenumain"
            onClick={this.SideMenuOpen.bind(this)}
            className={this.state.SidMenuOpen}
          >
            <i className="fas fa-align-justify"></i>
          </a>

          {/* 변경된 사이드 버튼 */}
          <a
            id="sidmenumain2"
            onClick={this.SideMenuClose.bind(this)}
            className={this.state.SidMenuClose}
          >
            <i className="fas fa-times"></i>
          </a>
          {/* 강의 자료 */}
          <div className={this.state.SidMenuClose}>
            <div className={this.state.HoverClass}>강의자료</div>
            <a
              id="sidmenumain2"
              className={this.state.SidMenuClose}
              onMouseEnter={this.HoverClassOpen.bind(this)}
              onMouseLeave={this.HoverClassOpen.bind(this)}
            >
              <i className="fas fa-sticky-note"></i>
            </a>
          </div>

          {/* 스터디 */}
          <div className={this.state.SidMenuClose}>
            <div className={this.state.HoverStudy}>스터디</div>
            <a
              href="/studylist"
              id="sidmenumain2"
              className={this.state.SidMenuClose}
              onMouseEnter={this.HoverStudyOpen.bind(this)}
              onMouseLeave={this.HoverStudyOpen.bind(this)}
            >
              <i className="fas fa-book"></i>
            </a>
          </div>

          {/* 스케줄 */}
          <div className={this.state.SidMenuClose}>
            <div className={this.state.Hoverschedule}>스케줄</div>
            <a
              href="/schedule"
              id="sidmenumain2"
              className={this.state.SidMenuClose}
              onMouseEnter={this.HoverscheduleOpen.bind(this)}
              onMouseLeave={this.HoverscheduleOpen.bind(this)}
            >
              <i className="far fa-calendar-alt"></i>
            </a>
          </div>

          {/* 차트 */}
          <div className={this.state.SidMenuClose}>
            <div className={this.state.HoverChat}>차트</div>
            <a
              id="sidmenumain2"
              className={this.state.SidMenuClose}
              onMouseEnter={this.HoverChatOpen.bind(this)}
              onMouseLeave={this.HoverChatOpen.bind(this)}
            >
              <i className="fas fa-chart-bar"></i>
            </a>
          </div>

          {/* 마이페이지 */}
          <div className={this.state.SidMenuClose}>
            <div className={this.state.HoverMyPage}>마이페이지</div>
            <a
              href="/mypageupdate"
              className={this.state.SidMenuClose}
              id="sidmenumain2"
              onMouseEnter={this.HoverMyPageOpen.bind(this)}
              onMouseLeave={this.HoverMyPageOpen.bind(this)}
            >
              <i className="far fa-address-book"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default sidmenu;
