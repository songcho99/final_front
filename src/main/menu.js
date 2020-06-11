import React, { Component } from "react";
import { Link } from "react-router-dom";
import Model from "react-modal";
// import "./main.css";
import "./menu.css";

class menu extends Component {
  state = {
    num: 0,
    hid: "hd-off",
    on: true,
    login: false,
    modalOpen: false,
    modalno: 0,
  };
  LoginClick = () => {
    console.log(this.state.modalOpen);
    this.setState({
      modalno: ++this.state.modalno,
      modalOpen: this.state.modalno % 2 == 0 ? true : false,
    });
  };

  logininter = () => {
    this.setState({
      login: true,
    });
  };

  loginleave = () => {
    this.setState({
      login: false,
    });
  };

  hdbtnClick = () => {
    // console.log("hdbtnClick 출력" + this.state.num);
    this.setState({
      num: ++this.state.num,
      hid: this.state.num % 2 == 0 ? "hd-off" : "hid-on",
      on: this.state.num % 2 == 0 ? true : false,
    });
  };
  render() {
    return (
      <div id="header">
        <div>
          <a id="hd-log" to="/" href="/">
            IT Campus
          </a>
        </div>
        <div id="hd-login">
          {this.state.login && <div id="hd-login-box">로그인</div>}
          <a
            href="#"
            id="hd-login-back"
            onMouseEnter={this.logininter.bind(this)}
            onMouseLeave={this.loginleave.bind(this)}
            onClick={this.LoginClick.bind(this)}
          >
            <i class="fas fa-user-circle" id="he-login-i"></i>
          </a>
        </div>

        <Model isOpen={this.state.modalOpen} id="login-modal">
          <a onClick={this.LoginClick.bind(this)}>
            <i class="fas fa-times"></i>
          </a>
          <div id="login-tit">로그인</div>
          <div id="login-box">
            <div className="login-lable">아이디</div>
            <input
              type="text"
              className="login-input"
              placeholder="아이디"
            ></input>
            <div className="login-i"></div>
          </div>
          <div id="login-box2">
            <div className="login-lable">비밀번호</div>
            <input
              type="password"
              className="login-input"
              placeholder="비밀번호"
            ></input>
            <div className="login-i"></div>
          </div>
          <a id="login-find" href="#">
            아이디 / 비밀번호 분실
          </a>
          <div>
            <button id="login-btn">로그인</button>
          </div>
        </Model>

        {this.state.on && (
          <a href="#" id="hd-btn" onClick={this.hdbtnClick.bind(this)}>
            <i class="fas fa-bars"></i>
          </a>
        )}

        {!this.state.on && (
          <a href="#" id="hd-btnx" onClick={this.hdbtnClick.bind(this)}>
            <i class="fas fa-times"></i>
          </a>
        )}

        <a href="#" className={this.state.hid} id="hd-btn-note">
          <i class="fas fa-sticky-note"></i>
        </a>
        <a
          href="/studylist"
          className={this.state.hid}
          id="hd-btn-book"
          to="/studylist"
        >
          <i class="fas fa-book"></i>
        </a>
        <a
          href="/schedule"
          className={this.state.hid}
          id="hd-btn-sch"
          to="/schedule"
        >
          <i class="far fa-calendar-alt"></i>
        </a>
        <a href="#" className={this.state.hid} id="hd-btn-cha">
          <i class="fas fa-chart-bar"></i>
        </a>
        <a
          href="/mypageupdate"
          className={this.state.hid}
          id="hd-btn-my"
          to="/mypageupdate"
        >
          <i class="far fa-address-book"></i>
        </a>

        {/* <div>
          <Link to="/classnote">
                <button type="button">강의노트</button>
                </Link> &nbsp;&nbsp;
                <Link to="/classdata">
                <button type="button">수업자료</button>
                </Link> &nbsp;&nbsp; */}
        {/* <Link to="/introduce">
            <button type="button">소개</button>
          </Link>{" "}
          &nbsp;&nbsp;
          <Link to="/curriculum">
            <button type="button">교육 과정</button>
          </Link>{" "}
          &nbsp;&nbsp;
          <Link to="/studylist">
            <button type="button">스터디</button>
          </Link>
        </div> */}
      </div>
    );
  }
}
export default menu;
