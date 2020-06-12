import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
// import "./main.css";
import "./menu.css";
import Checkbox from "@material-ui/core/Checkbox";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class menu extends Component {
  state = {
    num: 0,
    hid: "hd-off",
    on: true,
    login: false,
    modalOpen: false, //모달 열고 닫기
    modalno: 0, // 11이 올라갈때 마다 모달이 올라가고 닫치고를 경정한다.
    modalid: "login-modal",
    sing: true,
    find: "", //최초 로그인 창에 아이디 값 부여하여 display:none 으로 숨기기
    loginform: "login-hide", //아이디 비밀번호 찾기 아이디 부여 display:none
    findid: "active", //아이디 찾기 아이디에 아이디명 전환
    findpw: "", //비밀번호 찾기 아이디에 아이디명 전환
    findidform: "", //아이디 찾기 폼으로 전환
    findpwform: "findidform", //비밀번호 찾기 폼으로 전환
    findpwmodal: false, //비밀번호 찾기 모달 오픈
  };

  // 비밀번호 찾기 모달 오픈
  FindpwModal = () => {
    this.setState({
      findpwmodal: true,
      modalOpen: false,
    });
  };

  //비밀번호 재설정 모달에서 모든 창 닫기
  FindpwClose = () => {
    this.setState({
      findpwmodal: false,
      modalOpen: false,
      loginform: "login-hide",
      find: "",
      modalno: ++this.state.modalno,
    });
  };
  //아이디 찾기 폼 전환 메서드
  FindId = () => {
    this.setState({
      findid: "active",
      findpw: "",
      findidform: "",
      findpwform: "findidform",
    });
  };
  //비밀번호 찾기 폼 전환 메서드
  FindPw = () => {
    this.setState({
      findid: "",
      findpw: "active",
      findidform: "findidform",
      findpwform: "",
    });
  };

  Find = () => {
    this.setState({
      find: "login-hide",
      loginform: "",
      findidform: "",
      findpwform: "findidform",
      findid: "active",
      findpw: "",
    });
  };

  Login = () => {
    this.setState({
      loginform: "login-hide",
      find: "",
    });
  };
  SingUp = () => {
    this.setState({
      sing: false,
      modalid: "singup",
    });
  };

  SingIn = () => {
    this.setState({
      sing: true,
      modalid: "login-modal",
    });
  };

  // 사진 아이콘 클릭시 모달창 뜨는 메서드
  LoginClick = () => {
    console.log(this.state.modalOpen);
    this.setState({
      modalno: ++this.state.modalno,
      modalOpen: this.state.modalno % 2 == 0 ? false : true,
      login: "login-hide",
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
    const IdCheck = styled(Checkbox)({
      color: "#2a9d8f",
    });

    const LoginBtn = styled(Button)({
      color: "#2a9d8f",
      borderColor: "#2a9d8f",
    });
    return (
      <div id="header">
        <div>
          {/* 메인 로고 및 홈 버튼 */}
          <a id="hd-log" to="/" href="/">
            IT Campus
          </a>
        </div>
        <div id="hd-login">
          {this.state.loginform && <div id="hd-login-box">로그인</div>}
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

        <Modal isOpen={this.state.modalOpen} id={this.state.modalid}>
          {this.state.sing && (
            // 로그인 화면
            <div id="login-back">
              <div id="login" className={this.state.find}>
                <div id="login-up" onClick={this.SingUp.bind(this)}>
                  <i class="fas fa-pencil-alt"></i>
                </div>
                <div id="login-tit">로그인</div>
                <div className="login-box">
                  <div className="login-lable">아이디</div>
                  <input
                    type="text"
                    className="login-input"
                    placeholder="아이디"
                  ></input>
                  <div className="login-i"></div>
                </div>
                <div className="login-box">
                  <div className="login-lable">비밀번호</div>
                  <input
                    type="password"
                    className="login-input"
                    placeholder="비밀번호"
                  ></input>
                  <div className="login-i"></div>
                </div>
                <div id="login-chec">
                  <IdCheck
                    defaultChecked
                    color="#2a9d8f"
                    size="small"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  아이디 저장
                </div>
                <a id="login-find" href="#" onClick={this.Find.bind(this)}>
                  아이디 / 비밀번호 분실
                </a>
                <div>
                  <button id="login-btn" onClick={this.LoginClick.bind(this)}>
                    로그인
                  </button>
                </div>
                <div>
                  <button id="login-btn2" onClick={this.LoginClick.bind(this)}>
                    취소
                  </button>
                </div>
              </div>

              {/* 아이디 / 비밀번호 찾기 */}
              <div className={this.state.loginform}>
                <div id="find-tit">
                  <a
                    href="#"
                    className="find-idpw"
                    id={this.state.findid}
                    onClick={this.FindId.bind(this)}
                  >
                    아이디 찾기
                  </a>
                  <a
                    href="#"
                    className="find-idpw"
                    id={this.state.findpw}
                    onClick={this.FindPw.bind(this)}
                  >
                    비밀번호 찾기
                  </a>
                </div>

                {/* 아이디 찾기 폼 */}
                <div id={this.state.findidform}>
                  <div className="find-box">
                    <div className="login-lable">이름</div>
                    <input
                      type="text"
                      className="login-input"
                      placeholder="이름"
                    ></input>
                    <div className="login-i"></div>
                  </div>

                  <div className="find-box">
                    <div className="login-lable">이메일</div>
                    <input
                      type="text"
                      className="login-input"
                      placeholder="이메일"
                    ></input>
                    <div className="login-i"></div>
                  </div>

                  <div className="find-box" id="find-tel">
                    <div id="find-telinput">
                      <div className="login-lable">핸드폰 번호</div>
                      <input
                        type="text"
                        className="login-input"
                        placeholder="핸드폰 번호"
                      ></input>
                      <div className="login-i"></div>
                    </div>
                    <div>
                      <button className="singup-btntel">인증번호 발송</button>
                    </div>
                  </div>

                  <div id="sns-box">
                    <div id="sns-lable">인증번호</div>
                    <input
                      type="text"
                      id="sns-input"
                      placeholder="인증번호"
                    ></input>
                    <div className="sns-i"></div>
                  </div>

                  <div id="find-btn">
                    <LoginBtn
                      variant="outlined"
                      className="singup-btn"
                      onClick={this.Login.bind(this)}
                    >
                      확인
                    </LoginBtn>
                    <LoginBtn
                      variant="outlined"
                      className="singup-btn"
                      onClick={this.Login.bind(this)}
                    >
                      취소
                    </LoginBtn>
                  </div>
                </div>

                {/* 비밀번호 찾기 폼 */}
                <div id={this.state.findpwform}>
                  <div className="find-box">
                    <div className="login-lable">이름</div>
                    <input
                      type="text"
                      className="login-input"
                      placeholder="이름"
                    ></input>
                    <div className="login-i"></div>
                  </div>

                  <div className="find-box">
                    <div className="login-lable">아이디</div>
                    <input
                      type="text"
                      className="login-input"
                      placeholder="아이디"
                    ></input>
                    <div className="login-i"></div>
                  </div>

                  <div className="find-box" id="find-tel">
                    <div id="find-telinput">
                      <div className="login-lable">핸드폰 번호</div>
                      <input
                        type="text"
                        className="login-input"
                        placeholder="핸드폰 번호"
                      ></input>
                      <div className="login-i"></div>
                    </div>
                    <div>
                      <button className="singup-btntel">인증번호 발송</button>
                    </div>
                  </div>

                  <div id="sns-box">
                    <div id="sns-lable">인증번호</div>
                    <input
                      type="text"
                      id="sns-input"
                      placeholder="인증번호"
                    ></input>
                    <div className="sns-i"></div>
                  </div>

                  <div id="find-btn">
                    <LoginBtn
                      variant="outlined"
                      className="singup-btn"
                      onClick={this.FindpwModal.bind(this)}
                    >
                      확인
                    </LoginBtn>
                    <LoginBtn
                      variant="outlined"
                      className="singup-btn"
                      onClick={this.Login.bind(this)}
                    >
                      취소
                    </LoginBtn>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!this.state.sing && (
            <div id="singup-form">
              <div id="singup-sid"></div>
              <div id="singup-text">
                <div id="login-tit">회원가입</div>

                <div className="singup-box">
                  <div className="singup-lable">이름</div>
                  <input
                    type="text"
                    className="singup-input"
                    placeholder="이름"
                  ></input>
                  <div className="singup-i"></div>
                </div>

                <div className="singup-box">
                  <div className="singup-lable">아이디</div>
                  <input
                    type="text"
                    className="singup-input"
                    placeholder="아이디"
                  ></input>
                  <div className="singup-i"></div>
                </div>

                <div className="singup-box">
                  <div className="singup-lable">비밀번호</div>
                  <input
                    type="password"
                    className="singup-input"
                    placeholder="비밀번호"
                  ></input>
                  <div className="singup-i"></div>
                </div>

                <div className="singup-box">
                  <div className="singup-lable">비밀번호 확인</div>
                  <input
                    type="text"
                    className="singup-input"
                    placeholder="비밀번호 확인"
                  ></input>
                  <div className="singup-i"></div>
                </div>

                <div className="singup-box" id="singup-tel">
                  <div>
                    <div className="singup-lable">핸드폰 번호</div>
                    <input
                      type="text"
                      className="singup-input"
                      placeholder="핸드폰 번호"
                    ></input>
                    <div className="singup-i"></div>
                  </div>
                  <div>
                    <button className="singup-btntel">인증번호 받기</button>
                  </div>
                </div>

                <div className="singup-box">
                  <div className="singup-lable">이메일</div>
                  <input
                    type="text"
                    className="singup-input"
                    placeholder="이메일"
                  ></input>
                  <div className="singup-i"></div>
                </div>

                <div className="singup-box" id="singup-add">
                  <div>
                    <div className="singup-lable">주소</div>
                    <input
                      type="text"
                      className="singup-input"
                      placeholder="주소"
                    ></input>
                    <div className="singup-i"></div>
                  </div>
                  <div>
                    <button className="singup-btntel">주소 검색</button>
                  </div>
                </div>

                <div className="singup-box">
                  <div className="singup-lable">상세주소</div>
                  <input
                    type="text"
                    className="singup-input"
                    placeholder="상세주소"
                  ></input>
                  <div className="singup-i"></div>
                </div>

                <div id="singup-btn">
                  <button
                    className="singup-btn"
                    onClick={this.SingIn.bind(this)}
                  >
                    회원가입
                  </button>
                  <button
                    className="singup-btn"
                    onClick={this.SingIn.bind(this)}
                  >
                    취소
                  </button>
                </div>
              </div>
            </div>
          )}
        </Modal>
        <Modal isOpen={this.state.findpwmodal} id="findpwmodal">
          <div id="findpw-back">
            <div id="findpw-tit">비밀번호 재설정</div>

            <div className="login-box">
              <div className="login-lable">비밀번호</div>
              <input
                type="password"
                className="login-input"
                placeholder="비밀번호"
              ></input>
              <div className="login-i"></div>
            </div>

            <div className="login-box">
              <div className="login-lable">비밀번호 확인</div>
              <input
                type="password"
                className="login-input"
                placeholder="비밀번호 확인"
              ></input>
              <div className="login-i"></div>
            </div>
            <LoginBtn
              variant="outlined"
              id="findpwbtn"
              onClick={this.FindpwClose.bind(this)}
            >
              재설정
            </LoginBtn>
          </div>
        </Modal>
        {this.state.on && (
          // 메뉴 목록 버튼 기본 형태
          <a href="#" id="hd-btn" onClick={this.hdbtnClick.bind(this)}>
            <i class="fas fa-bars"></i>
          </a>
        )}

        {!this.state.on && (
          //메뉴 목록 클릭시 나오는 형태
          <a href="#" id="hd-btnx" onClick={this.hdbtnClick.bind(this)}>
            <i class="fas fa-times"></i>
          </a>
        )}

        {/* 강의자료 */}
        <a href="#" className={this.state.hid} id="hd-btn-note">
          <i class="fas fa-sticky-note"></i>
        </a>

        {/* 스터디 */}
        <a
          href="/studylist"
          className={this.state.hid}
          id="hd-btn-book"
          to="/studylist"
        >
          <i class="fas fa-book"></i>
        </a>

        {/* 스케줄 */}
        <a
          href="/schedule"
          className={this.state.hid}
          id="hd-btn-sch"
          to="/schedule"
        >
          <i class="far fa-calendar-alt"></i>
        </a>

        {/* 차트 */}
        <a href="#" className={this.state.hid} id="hd-btn-cha">
          <i class="fas fa-chart-bar"></i>
        </a>

        {/* 마이페이지 */}
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
