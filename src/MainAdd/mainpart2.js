import React, { Component } from "react";
import "./mainpart2.scss";
import image1 from "../image/worker.jpg";

class mainpart2 extends Component {
  render() {
    return (
      <div id="part2back">
        <div id="part2back2">
          {/* 타이틀 박스  */}
          <div id="part2titbox">
            <div id="part2tit">IT Campus Story</div>
            <div className="part2sub">
              "인간다움"을 존중하는 소통과 공감을 소중하게 생각합니다.{" "}
            </div>
            <div className="part2sub">취업에 휴머니즘을 담다.</div>
          </div>

          {/* 슬라이드 박스  */}
          <div id="part2Slidbox">
            <div>화살표</div>
            <div className="part2slidcon">
              <div>java 백핸드 개발자 양성 과정</div>
              <div className="part2slidimage">
                <image src={image1}></image>
              </div>
              <div>기간 : 2020.06.20 ~ 2020.12.25</div>
            </div>
            <div>화살표</div>
          </div>
        </div>
      </div>
    );
  }
}

export default mainpart2;
