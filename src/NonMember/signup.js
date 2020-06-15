import React, { Component } from "react";
import MyPageMenu from "../MyPage/mypagemenu";
import { Link } from "react-router-dom";
import "./signup.css";

class SignUp extends Component {
  render() {
    return (
      <div id="signupback">
        <MyPageMenu />
        <div id="signupback2">
          {/* 타이틀 박스 */}
          <div id="signuptitbox">
            <div id="signuptit">수강 신청 현황</div>
            <div id="signuplabel">
              등록된 수강 신청 현황을 확인 할 수 있습니다.
            </div>
          </div>

          {/* 테이블  */}
          <div id="signuptablebox">
            <table id="signuptable">
              <tr>
                <td className="signup-con1">
                  <div className="signup-tabox">
                    <div>번호</div>
                  </div>
                </td>
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
                    <div>주소</div>
                  </div>
                </td>

                <td className="signup-con7">
                  <div className="signup-tabox">
                    <div></div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
