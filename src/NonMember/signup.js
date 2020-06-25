import React, { Component } from "react";
import MyPageMenu from "../MyPage/mypagemenu";
import { Link } from "react-router-dom";
import "./signup.css";
import SignupModal from "./signupmodal";

// 모달
import Modal from "react-modal";

// 마테리얼
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class SignUp extends Component {
  state = {
    modalOpen: false,
  };

  modalOpen = () => {
    this.setState({
      modalOpen: true,
    });
  };

  modaldata = (modalOpen) => {
    this.setState({
      modalOpen: modalOpen,
    });
  };
  render() {
    const MypageupButton = styled(Button)({
      color: "#2a9d8f",
      borderColor: "#2a9d8f",
      fontWeight: "bold",
    });
    return (
      <div id="signupback">
        <MyPageMenu />
        <div id="signupback2">
          {/* 타이틀 박스 */}
          <div id="signuptitbox">
            <div id="signuptit">수강 신청 현황</div>
            <div id="signuplabel">수강 신청 현황을 확인 할 수 있습니다.</div>
          </div>

          {/* 테이블  */}
          <div id="signuptablebox">
            <table id="signuptable">
              <tbody>
                <tr>
                  <td className="signup-con2">
                    <div className="signup-tabox">
                      <div>과정명</div>
                    </div>
                  </td>
                  <td className="signup-con3">
                    <div className="signup-tabox">
                      <div>이름</div>
                    </div>
                  </td>
                  <td className="signup-con4">
                    <div className="signup-tabox">
                      <div>핸드폰</div>
                    </div>
                  </td>
                  <td className="signup-con5">
                    <div className="signup-tabox">
                      <div>이메일</div>
                    </div>
                  </td>
                  <td className="signup-con6">
                    <div className="signup-tabox">
                      <div>
                        {/* <MypageupButton variant="outlined">승인</MypageupButton> */}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* 추가 되는 내용 해당 위치에 생성 */}
            <form>
              <table id="signuptable">
                <tbody>
                  <tr>
                    <td className="signup-con2">
                      <div className="signup-tabox">
                        <div className="signup-font">
                          Spring Java 개발자 양성 과정
                        </div>
                      </div>
                    </td>
                    <td className="signup-con3">
                      <div className="signup-tabox">
                        <div
                          className="signup-font"
                          id="signup-cursor"
                          onClick={this.modalOpen.bind(this)}
                        >
                          임제묵
                        </div>
                      </div>
                    </td>
                    <td className="signup-con4">
                      <div className="signup-tabox">
                        <div className="signup-font">010-7307-1716</div>
                      </div>
                    </td>
                    <td className="signup-con5">
                      <div className="signup-tabox">
                        <div className="signup-font">dlawpanr@naver.com</div>
                      </div>
                    </td>
                    <td className="signup-con6">
                      <div className="signup-tabox">
                        <div className="signup-font">승인 / 거절</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            {/* 추가 할꺼면 이 위에 쪽에서 해야해 */}
            <div id="mystudylist-hr"></div>
            <Modal
              isOpen={this.state.modalOpen}
              id="signupmodal"
              ariaHideApp={false}
            >
              <SignupModal modaldata={this.modaldata.bind(this)}></SignupModal>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
