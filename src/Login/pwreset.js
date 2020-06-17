import React, { Component } from "react";
import "./pwreset.css";

//마테리얼
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class pwreset extends Component {
  render() {
    const LoginBtn = styled(Button)({
      color: "#2a9d8f",
      borderColor: "#2a9d8f",
    });
    return (
      <div id="pwreset">
        <form id="pwresetback">
          {/* 타이틀 */}
          <div id="pwresettit">비밀번호 재설정</div>

          {/* 비밀번호 재설정 */}
          <div className="loginbox">
            <div className="loginlabel">여기에 필요한 검증 문구 삽입</div>
            <input
              type="password"
              className="logininput"
              placeholder="비밀번호"
            ></input>
            <div className="logini"></div>
          </div>

          {/* 비밀번호 재설정 확인 */}
          <div className="loginbox">
            <div className="loginlabel">여기에 필요한 검증 문구 삽입</div>
            <input
              type="password"
              className="logininput"
              placeholder="비밀번호 확인"
            ></input>
            <div className="logini"></div>
          </div>

          <div className="loginlabel" id="pwresetlabel">
            여기에다가 필요한 검증 문구 삽입
          </div>
          {/* 버튼 박스 */}
          <div id="pwresetbtnbox">
            <LoginBtn
              onClick={this.props.PwResetClose}
              variant="outlined"
              className="findidbtnm"
              id="findidbtnm1"
            >
              확인
            </LoginBtn>
            <LoginBtn
              onClick={this.props.PwResetClose}
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

export default pwreset;
