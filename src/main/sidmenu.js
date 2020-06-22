import React, { Component } from "react";
import "./sidmenu.scss";

class sidmenu extends Component {
  state = {
    sidlecture: "hid",
    sidstudy: "hid",
    sidschedule: "hid",
    sidchart: "hid",
    sidmypage: "hid",
  };

  //마이페이지 목록창 여는 함수
  sidmypageOn = () => {
    this.setState({
      sidmypage: "",
    });
  };

  //마이페이지 목록창 닫는 함수
  sidmypageOff = () => {
    this.setState({
      sidmypage: "hid",
    });
  };

  //차트 목록창 여는 함수
  sidchartOn = () => {
    this.setState({
      sidchart: "",
    });
  };

  //차트 목록창 닫는 함수
  sidchartOff = () => {
    this.setState({
      sidchart: "hid",
    });
  };

  //스케줄 목록창 여는 함수
  sidscheduleOn = () => {
    this.setState({
      sidschedule: "",
    });
  };

  //스케줄 목록창 닫는 함수
  sidscheduleOff = () => {
    this.setState({
      sidschedule: "hid",
    });
  };

  //스터디 목록창 여는 함수
  sidstudyOn = () => {
    this.setState({
      sidstudy: "",
    });
  };
  //스터디 목록창 닫는 함수
  sidstudyOff = () => {
    this.setState({
      sidstudy: "hid",
    });
  };

  //강의 목록창 영는 함수
  SidLectureOn = () => {
    this.setState({
      sidlecture: "",
    });
  };

  //강의 목록창 닫는 함수
  SidLectureOff = () => {
    this.setState({
      sidlecture: "hid",
    });
  };

  render() {
    return (
      <div>
        <div id="sidmenu">
          {/* 학원 소개 */}
          <div id="lecturebox">
            <div id="lecturesub">학원소개</div>
            <a id="lecturemain" href="/academyintro">
              <i className="far fa-building"></i>
            </a>
          </div>

          {/* 공지사항 */}
          <div id="studybox">
            <div id="studysub">공지사항</div>
            <a href="/noticelist" id="studymain">
              <i className="fas fa-bullhorn"></i>
            </a>
          </div>

          {/* 수강과정 */}
          <div id="sidschedulebox">
            <div id="sidschedulesub">수강과정</div>
            <a href="/curriculumlist" id="sidschedulemain">
              <i className="far fa-calendar-alt"></i>
            </a>
          </div>

          {/* 스터디 */}
          <div
            id="sidchartbox"
            onMouseEnter={this.sidchartOn.bind(this)}
            onMouseLeave={this.sidchartOff.bind(this)}
          >
            <div className="sidsub" id="sidchartsub">
              스터디
            </div>
            <a id="sidchartmain" href="/studylist">
              <i className="fas fa-user-friends"></i>
            </a>
          </div>

          {/* 채용공고 or 리뷰 */}
          <div id="mypagebox">
            <div id="mypagesub">채용공고</div>
            <a href="/mypageupdate" id="mypagemain">
              <i className="far fa-address-card"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default sidmenu;
