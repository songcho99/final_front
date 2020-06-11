import React, { Component } from "react";
import "./footer.css";

class footer extends Component {
  render() {
    return (
      <div id="footer">
        <ul id="footer-con1">
          <li>
            <span>개인정보처리방침</span>
            <span>영상정보처리기기운영 및 관리방침</span>
          </li>
          <li>
            <p>
              사업자명: MookIsland(주) 사업자등록번호: 118-81-34007 대표자:
              임제묵
            </p>
            <p>MookGellary 문의: 1800-6389</p>
          </li>
        </ul>
        <div id="footer-con2">
          <i class="fab fa-meetup"></i>
        </div>
      </div>
    );
  }
}

export default footer;
