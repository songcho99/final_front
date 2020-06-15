import React, { Component } from "react";
import "./mypagemenu.css";

class MyPageMenu extends Component {
  render() {
    return (
      <div id="mypageMenu">
        <a
          href="/mypageupdate"
          className="mypagemenu-link"
          id="mypagemenu-active"
        >
          정보 수정
        </a>
        {/* 일반 회원만 */}
        <a href="/signup" className="mypagemenu-link">
          수강신청 현황
        </a>
        {/* 매니저만 */}
        <a href="/signupmanage" className="mypagemenu-link">
          수강신청 관리
        </a>
        {/* 관리자만 */}
        <a href="/memberlist" className="mypagemenu-link">
          회원관리
        </a>
        <a href="/graph" className="mypagemenu-link">
          통계
        </a>
        {/* 수강생만 */}
        <a href="/mystudymain" className="mypagemenu-link">
          마이 스터디
        </a>
        <a href="/myclass" className="mypagemenu-link">
          내 학습공간
        </a>
        {/*강사만 */}
        <a href="/classmanage" className="mypagemenu-link">
          수업 관리
        </a>
      </div>
    );
  }
}
export default MyPageMenu;
