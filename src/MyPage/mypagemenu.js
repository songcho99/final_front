import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./mypagemenu.css";

class MyPageMenu extends Component {
  render() {
    const activeStyle = {
      color: "#ffe66d",
    };

    return (
      <div id="mypageMenu">
        <NavLink
          to="/mypageupdate"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          정보 수정
        </NavLink>
        
        {/* 일반 회원만 */}
        {localStorage.type==="일반" &&(
        <NavLink
          to="/signup"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          수강신청 현황
        </NavLink>
        )}
        {/* 매니저만 */}
        {localStorage.type==="매니저" &&(
        <NavLink
          to="/signupmanage"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          수강신청 관리
        </NavLink>
        )}
        {localStorage.type==="매니저" &&(
        <NavLink
          to="/memberlist"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          회원관리
        </NavLink>
        )}
        {localStorage.type==="강사" &&(
        <NavLink
          to="/graph"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          통계
        </NavLink>
        )}
        {localStorage.type==="수강생" &&(
        <NavLink
          to="/mystudymain"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          마이 스터디
        </NavLink>
        )}
        {localStorage.type==="수강생" &&(
        <NavLink
          to="/myclass"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          내 학습공간
        </NavLink>
        )}
        {localStorage.type==="강사" &&(
        <NavLink
          to="/classmanage"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          수업 관리
        </NavLink>
        )}
      </div>
    );
  }
}
export default MyPageMenu;
