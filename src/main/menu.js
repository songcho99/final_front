import React, { Component } from "react";
import Modal from "react-modal";
// import "./main.css";
import "./menu.css";
import Checkbox from "@material-ui/core/Checkbox";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

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
    member_id: "",
    member_password: "",
    check: "",
    failmsg: "",
    member_name: "로그인",
    loginchange: false,

    join_member_name: "",
    join_member_id: "",
    join_member_password: "",
    join_member_passwordcheck: "",
    join_member_phone: "",
    join_member_email: "",
    join_member_address: "",
    join_member_detailaddr: "",

    idcheck: "",

    join_modalOpen: false,
  };

  //회원가입 보이는 화면 html body에 js import
  componentDidMount() {
    const script = document.createElement("script");

    script.src =
      "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;

    document.body.appendChild(script);
  }

  //입력할때마다 태그name과 state변수명이 같은거면 입력한 값 넣기
  onKeyChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //폰번호 실시간 입력 검증
  onPhoneChange = (e) => {
    this.setState({
      join_member_phone: autoHypenPhone(e.target.value.replace(/[^0-9]/g, "")),
    });
  };

  //아이디체크 (길이 8자부터 검증시작)
  OnIdCheck = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    if (this.state.join_member_id.length >= 8) {
      let url =
        "http://localhost:8000/project/member/idcheck?id=" +
        this.state.join_member_id;
      axios
        .get(url)
        .then((res) => {
          this.setState({
            idcheck: res.data,
          });
          console.log(this.state.idcheck);

          if (this.state.idcheck === 0) {
            this.setState({
              idcheck: "",
            });
            this.setState({
              idcheck: "사용가능한 아이디입니다",
            });
          } else {
            this.setState({
              idcheck: "이미 사용중인 아이디입니다",
            });
          }
        })
        .catch((err) => {
          console.log("아이디체크 에러 :" + err);
        });
    }
  };

  //주소검색 버튼 클릭 -> 다음 주소api 창이 뜨도록 환경설정
  onSearchAddress = (e) => {
    e.preventDefault();
    this.setState({
      join_modalOpen: true,
    });
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    document.head.appendChild(script);

    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=39f4584eccca7de06e40936fd4433af5&libraries=services";
    document.head.appendChild(script);
  };

  //주소검색 modal 창 끄기
  closeModal = (e) => {
    this.setState({
      join_modalOpen: false,
    });
  };

  //주소검색 api 이 modal창에 뜨도록 설정, 주소검색 목록 출력, 클릭시 modal창 꺼짐
  handleAddress = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'

    this.setState({
      join_member_address: fullAddress,
    });

    this.setState({
      join_modalOpen: false,
    });
  };

  //상세주소에 커서가 위치하면 실행되는 이벤트. value값을 state변수에 넣기
  onAddressChange = (e) => {
    this.setState({
      join_member_address: this.refs.join_member_address.value,
    });
  };

  //회원가입 submit 이벤트, 회원가입이 이뤄지는 이벤트
  onInsertSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    if (this.state.join_member_name === "") {
      console.log("이름을 입력해주세요");
      this.refs.join_member_name.focus();

      return false;
    }
    if (this.state.join_member_id === "") {
      console.log("아이디를 입력해주세요");
      this.refs.join_member_id.focus();
      return false;
    }
    if (
      this.state.join_member_password === "" ||
      this.state.join_member_passwordcheck === ""
    ) {
      console.log("비밀번호를 입력해주세요");
      this.refs.join_member_password.value = "";
      this.refs.join_member_passwordcheck.value = "";

      this.refs.join_member_password.focus();

      return false;
    }

    if (this.refs.join_member_phone.value === "") {
      this.refs.join_member_phone.focus();
      console.log("폰번호를 입력해주세요");
      return false;
    }
    if (this.state.join_member_email === "") {
      console.log("이메일을 입력해주세요");
      this.refs.join_member_email.focus();
      return false;
    }
    if (this.state.join_member_address === "") {
      console.log("주소를 입력해주세요");
      return false;
    }
    if (this.state.join_member_detailaddr === "") {
      console.log("상세주소 입력해주세요");
      this.refs.join_member_detailaddr.focus();
      return false;
    }

    var regex = /^[A-Za-z0-9]{8,15}$/;
    if (!regex.test(this.state.join_member_id)) {
      this.setState({
        idcheck:
          "아이디는 영어(소문자)와 숫자 조합으로 최소8자 최대 15자로 생성이 가능합니다",
      });
      return false;
    }

    if (
      this.state.join_member_password !== this.state.join_member_passwordcheck
    ) {
      this.setState({
        idcheck: "입력하신 비밀번호가 일치하지 않습니다",
      });
      this.refs.join_member_password.focus();

      return false;
    } else {
      var regex2 = /^.*(?=^.{10,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
      if (!regex2.test(this.state.join_member_password)) {
        this.setState({
          idcheck:
            "비밀번호는 영문,숫자,특수문자(!@#$%^&+=) 조합으로 최소10자 최대 20자로 생성이 가능합니다",
        });
        return false;
      }
    }

    var emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!emailRule.test(this.state.join_member_email)) {
      this.setState({
        idcheck: "이메일 형식이 올바르지 않습니다",
      });
      return false;
    }

    let url = "http://localhost:8000/project/member/insert";

    const formData = new FormData();

    formData.append("member_name", this.state.join_member_name);
    formData.append("member_id", this.state.join_member_id);
    formData.append("member_password", this.state.join_member_password);
    formData.append("member_phone", this.state.join_member_phone);
    formData.append("member_email", this.state.join_member_email);
    formData.append("member_address", this.state.join_member_address);
    formData.append("member_detailaddr", this.state.join_member_detailaddr);

    axios
      .post(url, formData)
      .then((res) => {
        this.SingIn.bind(this);
      })
      .catch((err) => {
        console.log("회원가입 에러 : " + err);
      });
  };

  //로그인 시 로그아웃버튼 생기게하고 로그아웃 시, 로그인 폼 나오게 하기
  LoginChange = () => {
    this.setState({
      loginchange: this.state.loginchange === true ? false : true,
    });
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
      modalno: this.state.modalno + 1,
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
      modalno: this.state.modalno + 1,
      modalOpen: this.state.modalno % 2 === 0 ? false : true,
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
      num: this.state.num + 1,
      hid: this.state.num % 2 === 0 ? "hd-off" : "hid-on",
      on: this.state.num % 2 === 0 ? true : false,
    });
  };

  //아이디 입력값 넣기
  onKeyIdChange = (e) => {
    e.preventDefault();
    this.setState({
      member_id: e.target.value,
    });
    console.log("id:" + this.state.member_id);
  };
  //비밀번호 입력값 넣기
  onKeyPwChange = (e) => {
    e.preventDefault();
    this.setState({
      member_password: e.target.value,
    });
    console.log("password:" + this.state.member_password);
  };
  //아이디 저장 값 넣기
  idSave = (e) => {
    console.log(e.target.checked);

    if (e.target.checked) {
      this.setState({
        check: e.target.checked,
      });
      localStorage.check = "checked";
    } else {
      localStorage.check = "unchecked";
      localStorage.saveid = "";
      this.setState({
        check: e.target.unchecked,
      });
    }
  };
  //로그인 검증
  isLogin = (e) => {
    e.preventDefault();
    let url =
      "http://localhost:8000/project/login/loginck?member_id=" +
      this.state.member_id +
      "&member_password=" +
      this.state.member_password;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        if (res.data.success === "success") {
          localStorage.loginok = "success";
          if (localStorage.check !== "unchecked")
            localStorage.saveid = this.state.member_id;
          this.setState({
            modalno: this.state.modalno + 1,
            modalOpen: this.state.modalno % 2 === 0 ? false : true,
            login: "login-hide",
            failmsg: "",
            member_name: res.data.member_name,
            loginchange: true,
          });
        } else {
          this.setState({
            failmsg: "아이디 또는 비밀번호를 확인하세요",
          });
          localStorage.loginok = "fail";
        }
      })
      .catch((err) => {
        console.log("로그인 에러:" + err);
      });
  };
  //로그아웃
  isLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("loginok");
    if (localStorage.check === "checked") {
      this.setState({
        member_id: localStorage.saveid,
        check: localStorage.check,
        member_name: "로그인",
        loginchange: false,
      });
    } else {
      localStorage.check = "unchecked";
      this.setState({
        member_id: localStorage.saveid,
        check: e.target.unchecked,
        member_name: "로그인",
        loginchange: false,
      });
      localStorage.removeItem("saveid");
    }
  };
  render() {
    const post = () => {
      new window.daum.Postcode({
        oncomplete: function (data) {
          const zonecode = data.zonecode;
          const roadAddr = data.address;
          const str = "(" + zonecode + ")" + roadAddr;
          document.getElementById("join_member_address").value = str;
        },
      }).open();
    };

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
          {this.state.loginform && (
            <div id="hd-login-box">{this.state.member_name}</div>
          )}
          {this.state.loginchange && (
            <div>
              <button type="button" onClick={this.isLogOut.bind(this)}>
                로그아웃
              </button>
            </div>
          )}

          {!this.state.loginchange && (
            <div>
              <a
                href="/#"
                id="hd-login-back"
                onMouseEnter={this.logininter.bind(this)}
                onMouseLeave={this.loginleave.bind(this)}
                onClick={this.LoginClick.bind(this)}
              >
                <i className="fas fa-user-circle" id="he-login-i"></i>
              </a>
            </div>
          )}
        </div>

        <Modal isOpen={this.state.modalOpen} id={this.state.modalid}>
          {this.state.sing && (
            // 로그인 화면
            <div id="login-back">
              <div id="login" className={this.state.find}>
                <div id="login-up" onClick={this.SingUp.bind(this)}>
                  <i className="fas fa-pencil-alt"></i>
                </div>
                <div id="login-tit">로그인</div>
                <div className="login-box">
                  <div className="login-lable">아이디</div>
                  <input
                    type="text"
                    className="login-input"
                    placeholder="아이디"
                    name="member_id"
                    value={this.state.member_id}
                    onChange={this.onKeyIdChange.bind(this)}
                  ></input>
                  <div className="login-i"></div>
                </div>
                <div className="login-box">
                  <div className="login-lable">비밀번호</div>
                  <input
                    type="password"
                    className="login-input"
                    placeholder="비밀번호"
                    name="member_password"
                    onKeyUp={this.onKeyPwChange.bind(this)}
                  ></input>
                  <div className="login-i"></div>
                </div>
                <br></br>
                <b style={{ color: "red" }}>{this.state.failmsg}</b>
                <div id="login-chec">
                  <IdCheck
                    checked={this.state.check}
                    color="#2a9d8f"
                    size="small"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                    onChange={this.idSave.bind(this)}
                  />
                  아이디 저장
                </div>
                <a id="login-find" href="/#" onClick={this.Find.bind(this)}>
                  아이디 / 비밀번호 분실
                </a>
                <div>
                  <button id="login-btn" onClick={this.isLogin.bind(this)}>
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
                    href="/#"
                    className="find-idpw"
                    id={this.state.findid}
                    onClick={this.FindId.bind(this)}
                  >
                    아이디 찾기
                  </a>
                  <a
                    href="/#"
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

                {/* 에러,안내 메세지 라벨 */}
                <span>{this.state.idcheck}</span>

                <form onSubmit={this.onInsertSubmit.bind(this)}>
                  <div className="singup-box">
                    <div className="singup-lable">이름</div>
                    <input
                      type="text"
                      className="singup-input"
                      placeholder="이름"
                      name="join_member_name"
                      onChange={this.onKeyChange.bind(this)}
                      ref="join_member_name"
                    ></input>
                    <div className="singup-i"></div>
                  </div>

                  <div className="singup-box">
                    <div className="singup-lable">아이디</div>
                    <input
                      type="text"
                      className="singup-input"
                      placeholder="아이디"
                      name="join_member_id"
                      onKeyUp={this.OnIdCheck.bind(this)}
                      onChange={this.onKeyChange.bind(this)}
                      ref="join_member_id"
                    ></input>
                    <div className="singup-i"></div>
                  </div>

                  <div className="singup-box">
                    <div className="singup-lable">비밀번호</div>
                    <input
                      type="password"
                      className="singup-input"
                      placeholder="비밀번호"
                      name="join_member_password"
                      onChange={this.onKeyChange.bind(this)}
                      ref="join_member_password"
                    ></input>
                    <div className="singup-i"></div>
                  </div>

                  <div className="singup-box">
                    <div className="singup-lable">비밀번호 확인</div>
                    <input
                      type="password"
                      className="singup-input"
                      placeholder="비밀번호 확인"
                      name="join_member_passwordcheck"
                      onChange={this.onKeyChange.bind(this)}
                      ref="join_member_passwordcheck"
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
                        name="join_member_phone"
                        ref="join_member_phone"
                        value={this.state.join_member_phone}
                        onChange={this.onPhoneChange.bind(this)}
                        maxLength="13"
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
                      name="join_member_email"
                      onChange={this.onKeyChange.bind(this)}
                      ref="join_member_email"
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
                        readOnly="readonly"
                        id="join_member_address"
                        name="join_member_address"
                        onChange={this.onKeyChange.bind(this)}
                        ref="join_member_address"
                      ></input>
                      <div className="singup-i"></div>
                    </div>
                    <div>
                      <button className="singup-btntel" onClick={post}>
                        주소 검색
                      </button>
                    </div>
                  </div>

                  <div className="singup-box">
                    <div className="singup-lable">상세주소</div>
                    <input
                      type="text"
                      className="singup-input"
                      placeholder="상세주소"
                      name="join_member_detailaddr"
                      onFocus={this.onAddressChange.bind(this)}
                      onChange={this.onKeyChange.bind(this)}
                      ref="join_member_detailaddr"
                    ></input>
                    <div className="singup-i"></div>
                  </div>

                  <div id="singup-btn">
                    <button type="submit" className="singup-btn">
                      회원가입
                    </button>
                    <button
                      className="singup-btn"
                      onClick={this.SingIn.bind(this)}
                    >
                      취소
                    </button>
                  </div>
                </form>
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
          <a href="/#" id="hd-btn" onClick={this.hdbtnClick.bind(this)}>
            <i className="fas fa-bars"></i>
          </a>
        )}

        {!this.state.on && (
          //메뉴 목록 클릭시 나오는 형태
          <a href="/#" id="hd-btnx" onClick={this.hdbtnClick.bind(this)}>
            <i className="fas fa-times"></i>
          </a>
        )}

        {/* 강의자료 */}
        <a href="/#" className={this.state.hid} id="hd-btn-note">
          <i className="fas fa-sticky-note"></i>
        </a>

        {/* 스터디 */}
        <a
          href="/studylist"
          className={this.state.hid}
          id="hd-btn-book"
          to="/studylist"
        >
          <i className="fas fa-book"></i>
        </a>

        {/* 스케줄 */}
        <a
          href="/schedule"
          className={this.state.hid}
          id="hd-btn-sch"
          to="/schedule"
        >
          <i className="far fa-calendar-alt"></i>
        </a>

        {/* 차트 */}
        <a href="/#" className={this.state.hid} id="hd-btn-cha">
          <i className="fas fa-chart-bar"></i>
        </a>

        {/* 마이페이지 */}
        <a
          href="/mypageupdate"
          className={this.state.hid}
          id="hd-btn-my"
          to="/mypageupdate"
        >
          <i className="far fa-address-book"></i>
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

function autoHypenPhone(str) {
  var tmp = "";
  if (str.length < 4) {
    return str;
  } else if (str.length < 7) {
    tmp += str.substr(0, 3);
    tmp += "-";
    tmp += str.substr(3);
    return tmp;
  } else if (str.length < 11) {
    tmp += str.substr(0, 3);
    tmp += "-";
    tmp += str.substr(3, 3);
    tmp += "-";
    tmp += str.substr(6);
    return tmp;
  } else {
    tmp += str.substr(0, 3);
    tmp += "-";
    tmp += str.substr(3, 4);
    tmp += "-";
    tmp += str.substr(7);
    return tmp;
  }

  return str;
}

export default menu;
