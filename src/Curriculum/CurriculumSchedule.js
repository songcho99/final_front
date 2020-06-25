import React, { Component } from "react";
import CurriculumMenu from "../Curriculum/CurriculumMenu";
import "./CurriculumSchedule.scss";
import Calender from "./calender";
import CurriculumList from "./CurriculumList";

//  참고 사이트 :
// https://blog.flowandform.agency/create-a-custom-calendar-in-react-3df1bfd0b728

class CurriculumSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calender: "calender",
      currilist: "currilistOff",
    };
  }

  CurrilistOn = () => {
    console.log("CurrilistOn 클릭");
    this.setState({
      calender: "calenderOff",
      currilist: "currilistOn",
    });
  };

  calenderOn = () => {
    console.log("calenderON 클릭");
    this.setState({
      calender: "calender",
      currilist: "currilistOff",
    });
  };

  test = () => {
    alert("test");
  };
  render() {
    return (
      <div id="curriSch">
        <CurriculumMenu
          CurrilistOn={this.CurrilistOn.bind(this)}
          calenderOn={this.calenderOn.bind(this)}
        />
        <div id="curriSchimgbox">
          <img src={require("../image/keyboard.jpg")} id="curriSchimg"></img>
          <div id="curriSchimgback"></div>
          <div id="curriSchimgtextbox">
            <div id="curriSchimgtitbox">
              <div>IT Campus CurriCulum</div>
              <div className="margin10">
                <i className="far fa-calendar-alt"></i>
              </div>
            </div>
            <div id="curriSchimgsubbox">
              <div id="marginbottom10">
                기업이 "신입" 에게 바라는 것은 "SW 개발의 기본을 출실히 알고
                있는가?"입니다.
              </div>
              <div>
                6개월이 지난 후 기업 실무현장에서의 당신은 "당당합니다."
              </div>
            </div>
          </div>
        </div>
        <div id="curriSchback">
          {/* 상단에 필터 선택 창 */}
          <div id="curriSchnav">
            {/* 전체 박스 */}
            <div className="curriSchnavbox">
              <div className="curriSchcercle">
                <i className="fas fa-globe"></i>
              </div>
              <div className="curriSchcerletex">All</div>
            </div>

            {/* PHP 박스 */}
            <div className="curriSchnavbox">
              <div className="curriSchcercle">
                <i className="fab fa-php"></i>
              </div>
              <div className="curriSchcerletex">PHP</div>
            </div>

            {/* React 박스 */}
            <div className="curriSchnavbox">
              <div className="curriSchcercle">
                <i className="fab fa-react"></i>
              </div>
              <div className="curriSchcerletex">React</div>
            </div>

            {/* JAVA 박스 */}
            <div>
              <div className="curriSchcercle">
                <i className="fab fa-java"></i>
              </div>
              <div className="curriSchcerletex">JAVA</div>
            </div>
          </div>
        </div>
        <div id="curriSchnav2">
          {/* 달력 출력  */}
          <Calender calender={this.state.calender}></Calender>

          {/* 일정 출력 */}
          <CurriculumList currilist={this.state.currilist}></CurriculumList>
        </div>
      </div>
    );
  }
}
export default CurriculumSchedule;
