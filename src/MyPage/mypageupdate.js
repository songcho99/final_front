import React, { Component } from "react";
import MyPageMenu from "../MyPage/mypagemenu";
import "./mypageupdate.css";

// 마테리얼
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class MyPageUpdate extends Component {
  render() {
    const MypageupButton = styled(Button)({
      color: "#2a9d8f",
      borderColor: "#2a9d8f",
      fontWeight: "bold",
    });

    return (
      <div id="mypageupdate">
        <MyPageMenu />
        {/* 프로필 타이틀 */}
        <div id="mypagup-tit">
          <div id="mypageup-span">프로필 수정</div>
          <div id="mypageup-label">
            IT Campus 대표 프로필과 정보를 수정 하실 수 있습니다.
          </div>
        </div>
        <form id="mypageup-box" action="" method="post">
          <div id="mypageup-photo">
            <div id="mypageup-profilebox">
              <i class="fas fa-user-circle" id="mypageup-profile"></i>
            </div>
            <div className="filebox">
              <label for="ex_file">사진 변경</label>
              <input type="file" id="ex_file"></input>
            </div>
          </div>
          {/* 프로필 테이블 창*/}
          <div id="mypageup-taback">
            <table id="mypageup-ta">
              <tr>
                <td className="mypageupta-cel1">이름</td>
                <td className="mypageupta-cel2">임제묵</td>
              </tr>
              <tr>
                <td className="mypageupta-cel1">과정</td>
                <td className="mypageupta-cel2">Spring Web 개발자 양성 과정</td>
              </tr>
              <tr>
                <td className="mypageupta-cel1">생년월일</td>
                <td className="mypageupta-cel2">
                  <div>
                    <input type="date" className="mypageup-input"></input>
                    <div className="mypageup-i"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="mypageupta-cel1">핸드폰</td>
                <td className="mypageupta-cel2">
                  <div id="mypageup-tel">
                    <div id="mypageup-telbox">
                      <input
                        type="text"
                        id="mypageup-tel1"
                        className="mypageup-input"
                      ></input>
                      <div className="mypageup-i"></div>
                    </div>
                    <div id="mypageup-telbox2">
                      <input
                        type="text"
                        id="mypageup-tel2"
                        className="mypageup-input"
                      ></input>
                      <div className="mypageup-i"></div>
                    </div>
                    <div id="mypageup-telbox3">
                      <input
                        type="text"
                        id="mypageup-tel3"
                        className="mypageup-input"
                      ></input>
                      <div className="mypageup-i"></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="mypageupta-cel1">이메일</td>
                <td className="mypageupta-cel2">
                  <div>
                    <input type="text" className="mypageup-input"></input>
                    <div className="mypageup-i"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td id="mypageupta-last1">주소</td>
                <td id="mypageupta-last2">
                  <div id="mypageup-addr">
                    <div id="mypageup-addrtop">
                      <input
                        type="text"
                        className="mypageup-input"
                        id="mypageup-addrinp"
                      ></input>
                      <div className="mypageup-i"></div>
                    </div>
                    <div>
                      <MypageupButton variant="outlined" id="mypage-addrbtn">
                        주소 검색
                      </MypageupButton>
                    </div>
                  </div>
                  <div id="mypageup-addrbot">
                    <input
                      type="text"
                      className="mypageup-input"
                      id="mypageup-addrinp2"
                    ></input>
                    <div className="mypageup-i"></div>
                  </div>
                </td>
              </tr>
            </table>
            <div id="mypage-btn">
              <MypageupButton
                variant="outlined"
                className="mypage-sub"
                id="mypage-sub"
              >
                적용
              </MypageupButton>
              <MypageupButton variant="outlined" className="mypage-sub">
                취소
              </MypageupButton>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default MyPageUpdate;
