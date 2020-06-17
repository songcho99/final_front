import React, { Component } from "react";
import "./menu.css";
import LoginForm from "../Login/loginform"; //로그인 첫 페이지
import SideMenu from "./sidmenu"; //사이드 버튼 메뉴
import FindId from "../Login/findid"; //아이디 찾기
import FindPw from "../Login/findpw"; //비밀번호 찾기
import PwReset from "../Login/pwreset"; //비밀번호 재설정
import SingUp from "../Login/singup"; //회원가입

// 모달
import Modal from "react-modal";

class menu extends Component {
  state = {
    LoginModal: false, //로그인 모달창 열고 닫는 변수
    FindIdModal: false, //findid창이 뜨는 창
    FindPwModal: false, //비밀번호 찾기 열고 닫는 변수
    PwReset: false, //비밀번호 재설정 창 열고 닫는 변수
    SingUp: false, //회원가입 열고 닫는 변수
  };

  //회원가입창 닫기
  SingUpClose = () => {
    this.setState({
      SingUp: false,
      LoginModal: true,
    });
  };

  //회원가입창 열기
  SingUpOpen = () => {
    this.setState({
      SingUp: true,
      LoginModal: false,
    });
  };

  // 비밀번호 재설정 닫기
  PwResetClose = () => {
    this.setState({
      PwReset: false,
      LoginModal: false,
      FindIdModal: false,
      FindPwModal: false,
    });
  };

  // 비밀번호 재설정 창 열기
  PwResetOpen = () => {
    this.setState({
      PwReset: true,
      LoginModal: false,
      FindIdModal: false,
      FindPwModal: false,
    });
  };
  //비밀번호 찾기 창 닫는 함수
  FindPwModalClose = () => {
    this.setState({
      FindIdModal: true,
      FindPwModal: false,
    });
    // console.log("비밀번호 찾기 닫쳐: " + this.state.FindPwModal);
  };

  //비밀번호 찾기 창 여는 함수
  FindPwModalOpen = () => {
    this.setState({
      FindIdModal: false,
      FindPwModal: true,
    });
  };

  //아이디 찾기 창 닫는 함수
  FindIdModalClose = () => {
    this.setState({
      FindIdModal: false,
      LoginModal: true,
      FindPwModal: false,
    });
    // console.log("로그인 닫기창: " + this.state.LoginModal);
  };

  //아이디 찾기 창 여는 메서드
  FindIdModalOpen = () => {
    this.setState({
      FindIdModal: true,
      LoginModal: false,
    });
  };

  //로그인창 여는 메서드
  LoginModalOpen = () => {
    this.setState({
      LoginModal: true,
    });
  };

  //로그인창 닫는 메서드
  LoginModalClose = () => {
    this.setState({
      LoginModal: false,
    });
    // console.log("로그인 닫기창: " + this.state.LoginModal);
  };

  // LoginData = (LoginModal) => {
  //   console.log("로그인 변수값 전송 :" + LoginModal);
  //   this.setState({
  //     LoginModal: LoginModal,
  //   });
  // };
  render() {
    return (
      <div id="header">
        <div id="hdback">
          <div id="hdbox">
            {/* 메인 로고 및 홈 버튼 */}
            <a id="hdlog" to="/" href="/">
              IT Campus
            </a>
          </div>
          <div id="hdbox2" onClick={this.LoginModalOpen.bind(this)}>
            <div id="hdspan">로그인</div>
            <div id="hdlabel">
              <i className="fas fa-user-circle"></i>
            </div>
          </div>
        </div>

        {/* 로그인 창 모달 */}
        <Modal
          isOpen={this.state.LoginModal}
          ariaHideApp={false}
          id="loginModal"
        >
          <LoginForm
            LoginModalClose={this.LoginModalClose.bind(this)}
            FindIdModalOpen={this.FindIdModalOpen.bind(this)}
            SingUpOpen={this.SingUpOpen.bind(this)}
          />
        </Modal>

        {/* 아이디 찾기 창 모달 */}
        <Modal
          isOpen={this.state.FindIdModal}
          ariaHideApp={false}
          id="findidModal"
        >
          <FindId
            FindIdModalClose={this.FindIdModalClose.bind(this)}
            FindPwModalOpen={this.FindPwModalOpen.bind(this)}
            FindPwModalClose={this.FindPwModalClose.bind(this)}
          ></FindId>
        </Modal>

        {/* 비밀번호 찾기 모달 창  */}
        <Modal
          isOpen={this.state.FindPwModal}
          ariaHideApp={false}
          id="findidModal"
        >
          <FindPw
            FindIdModalClose={this.FindIdModalClose.bind(this)}
            FindPwModalOpen={this.FindPwModalOpen.bind(this)}
            FindPwModalClose={this.FindPwModalClose.bind(this)}
            PwResetOpen={this.PwResetOpen.bind(this)}
          ></FindPw>
          {/* <FindPw
            FindIdModalClose={this.FindIdModalClose.bind(this)}
            FindPwModalOpen={this.FindPwModalOpen.bind(this)}
            FindPwModalClose={this.FindPwModalClose.bind(this)}
          ></FindPw> */}
        </Modal>
        {/* 비밀번호 재설정 모달  */}
        <Modal
          isOpen={this.state.PwReset}
          ariaHideApp={false}
          id="PwResetModal"
        >
          <PwReset PwResetClose={this.PwResetClose.bind(this)}></PwReset>
        </Modal>

        {/* 회원가입 모달  */}
        <Modal isOpen={this.state.SingUp} ariaHideApp={false} id="SingUpModal">
          <SingUp SingUpClose={this.SingUpClose.bind(this)}></SingUp>
        </Modal>

        {/* 사이드 바 */}
        <SideMenu></SideMenu>
      </div>
    );
  }
}

export default menu;
