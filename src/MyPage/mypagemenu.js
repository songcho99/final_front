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
        <NavLink
          to="/signup"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          수강신청 현황
        </NavLink>
        {/* 매니저만 */}
        <NavLink
          to="/signupmanage"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          수강신청 관리
        </NavLink>
        {/* 관리자만 */}
        <NavLink
          to="/memberlist"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          회원관리
        </NavLink>
        <NavLink
          to="/graph"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          통계
        </NavLink>
        {/* 수강생만 */}
        <NavLink
          to="/mystudymain"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          마이 스터디
        </NavLink>
        <NavLink
          to="/myclass"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          내 학습공간
        </NavLink>
        {/*강사만 */}
        <NavLink
          to="/classmanage"
          className="mypagemenu-link"
          activeStyle={activeStyle}
        >
          수업 관리
        </NavLink>
      </div>
    );
  }
}
export default MyPageMenu;
