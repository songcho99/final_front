import React, { Component } from "react";
import "./menu.css";
import LoginMain from "../Login/loginmain";

// 모달
import Modal from "react-modal";

class menu extends Component {
  state = {
    LoginModal: true,
  };

  LoginModalOpen = () => {
    this.setState({
      LoginModal: true,
    });
  };
  LoginModalClose = () => {
    this.setState({
      LoginModal: false,
    });
    console.log("로그인 닫기창: " + this.state.LoginModal);
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
        <Modal
          isOpen={this.state.LoginModal}
          ariaHideApp={false}
          id="loginModal"
        >
          <LoginMain LoginModalClose={this.LoginModalClose.bind(this)} />
        </Modal>
      </div>
    );
  }
}

export default menu;
