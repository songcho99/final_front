import React, { Component } from "react";
import "./mainpart2.scss";
import image1 from "../image/worker.jpg";

class mainpart2 extends Component {
  constructor() {
    super();
  }

  render() {
    let date = new Date();

    let deg = {
      transform:
        "rotate(" + ((date.getSeconds() / 60) * 360 - 90).toString() + "deg)",
      transformOrigin: "center",
    };
    return (
      <div id="part2back">
        {/* //이미지 박스 */}
        <div id="part2imgbox">
          <img src={require("../image/core.jpg")} style={{ deg }}></img>
          <div id="part2imgback"></div>
        </div>
        <div id="part2textbox">
          <div id="part2tit">IT Campus Promise</div>
          <div id="part2textmain"> 숫자 그 이상의 가치!</div>
          <div id="part2label">
            '소통'과 '공감'을 통해 믿음을 드리고 싶습니다.
          </div>
        </div>
        <div id="part2textbox2">
          <div className="part2subbox">
            <div className="part2subtit2">훈련과정 수료율</div>
            <div className="part2sublabel2">
              94<span className="part2subspan">%</span>
            </div>
          </div>
          <div className="part2subbox">
            <div className="part2subtit">HRD 평균 만족도</div>
            <div className="part2sublabel">
              95.4<span className="part2subspan">점</span>
            </div>
          </div>
          <div className="part2subbox">
            <div className="part2subtit2">평균 취업률</div>
            <div className="part2sublabel2">
              87.2<span className="part2subspan">%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default mainpart2;
