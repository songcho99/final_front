import React, { Component } from "react";
import "./findid.css";

//마테리얼
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class findpw extends Component {
  //인증번호 받기 누르면 인증번호 input 에 포커스
  MessageFocus = () => {
    document.getElementById("findidinp").focus();
  };

  render() {
    const LoginBtn = styled(Button)({
      color: "#2a9d8f",
      borderColor: "#2a9d8f",
    });
    return (
      <div id="findid">
        <form id="findidback">
          {/* 아이디 비밀번호 찾기 타이틀 박스 */}
          <div id="findidtitbox">
            <span id="findpwtit1" onClick={this.props.FindPwModalClose}>
              아이디 찾기
            </span>
            <span id="findpwtit2" onClick={this.props.FindPwModalOpen}>
              비밀번호 찾기
            </span>
          </div>

          {/* 아이디 찾기 폼 */}
          <div className="loginbox">
            <div className="loginlabel">여기에 필요한 검증 문구 삽입</div>
            <input
              type="text"
              className="logininput"
              placeholder="이름"
            ></input>
            <div className="logini"></div>
          </div>

          {/* 아이디 박스 */}
          <div className="loginbox">
            <div className="loginlabel">여기에 필요한 검증 문구 삽입</div>
            <input
              type="text"
              className="logininput"
              placeholder="아이디"
            ></input>
            <div className="logini"></div>
          </div>

          {/* 휴대폰 번호 박스 */}
          <div id="findidtelback">
            <div id="findidtelbox">
              <div className="loginlabel">여기에 필요한 검증 문구 삽입</div>
              <input
                type="text"
                className="logininput"
                placeholder="휴대폰 번호"
              ></input>
              <div className="logini"></div>
            </div>

            <div>
              <LoginBtn
                variant="outlined"
                className="findidbtns"
                onClick={this.MessageFocus.bind(this)}
              >
                인증번호 받기
              </LoginBtn>
            </div>
          </div>

          {/* 경고 문구 출력 창  */}
          <div className="loginlabel">여기다가 필요한 검증 문구 삽임</div>

          {/* 인증번호 입력 박스  */}
          <div id="findidbox">
            <input type="text" placeholder="인증번호" id="findidinp"></input>
          </div>

          {/* 버튼 박스 */}
          <div id="findidbtnbox">
            <LoginBtn
              onClick={this.props.PwResetOpen}
              variant="outlined"
              className="findidbtnm"
              id="findidbtnm1"
            >
              확인
            </LoginBtn>
            <LoginBtn
              onClick={this.props.FindIdModalClose}
              variant="outlined"
              className="findidbtnm"
            >
              취소
            </LoginBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default findpw;
