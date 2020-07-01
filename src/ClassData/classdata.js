import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import MyclassSid from "../MyClass/myclasssid";
import "./classdata.scss";

class classdata extends Component {
  constructor({ match }) {
    super();

    this.process_num = match.params.process_num;
    this.state = {
      classdatalist: [],
      process_num: 0,
      subject: "",
      teachername: "",
      manager: "",
      startdate: "",
      enddate: "",
    };
  }
  openClassNote = (e) => {
    e.preventDefault();
    window.open("/classnote", "", "width=500,height=500");
  };

  openClassNote2 = (e) => {
    e.preventDefault();
    window.open("/classnote2", "", "width=500,height=500");
  };

  getClass = () => {
    let url =
      "http://localhost:8000/project/processclass/classpage?member_num=" +
      localStorage.num;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.setState({
          process_num: res.data.process_num,
          subject: res.data.process_subject,
          teachername: res.data.process_teachername,
          manager: res.data.process_writer,
          startdate: res.data.process_startdate,
          enddate: res.data.process_enddate,
        });
      })
      .catch((err) => {
        console.log("강의실 불러오기 에러 : " + err);
      });
  };

  list = () => {
    let url =
      "http://localhost:8000/project/classdata/classdatalist?process_num=" +
      this.process_num;
    console.log(this.process_num);
    axios
      .get(url)
      .then((res) => {
        this.setState({
          classdatalist: res.data,
        });
      })
      .catch((err) => {
        console.log("목록 출력 에러:" + err);
      });
  };
  componentWillMount() {
    this.list();
    this.getClass();
  }
  render() {
    return (
      <div id="classdata">
        <MyclassSid
          openClassNote2={this.openClassNote2.bind(this)}
        ></MyclassSid>
        <div id="classdataback">
          {/* 헤더 부분 */}
          <div id="classdatanav">
            {/* 이미지 박스  */}
            <div id="classdataimgbox">
              <img src={require("./note.jpg")} id="classdataimg"></img>
            </div>
            {/* 검은 배경  */}
            <div id="classdataimgback"></div>

            {/* 텍스트 박스 */}
            <div id="classdatatextbox">
              <div id="classdatatit">강의 자료실</div>
              <div id="classdatasub">Note for study</div>
            </div>
          </div>

          <div id="classdatanav2">
            <div>제목 : {this.state.subject}</div>
            <div id="classdatasubbox">
              <div>강사 : {this.state.subject}</div>
              <div>메니저 : {this.state.manager}</div>
            </div>
            <div>
              기간 : {this.state.startdate} 2020.10.20 ~ 2020.11.22
              {this.state.enddate}
            </div>
          </div>

          {/* classdataback 종료 부분 */}
        </div>
        <h2>수업자료입니다!</h2>
        <NavLink exact to={"/writedata/" + this.process_num}>
          <button>자료 작성</button>
        </NavLink>{" "}
        <br></br>
        <br></br>
        <div align="center">
          <table>
            <thead>
              <tr>
                <td style={{ textAlign: "center", width: 150 }}>번호</td>
                <td style={{ textAlign: "center", width: 100 }}>제목</td>
                <td style={{ textAlign: "center", width: 150 }}>작성자</td>
                <td style={{ textAlign: "center", width: 200 }}>작성일</td>
              </tr>
            </thead>
            <tbody>
              {this.state.classdatalist.map((item, idx) => (
                <tr key={idx}>
                  <td style={{ textAlign: "center" }}>{idx + 1}</td>
                  <td style={{ textAlign: "center" }}>
                    <Link
                      to={{
                        pathname: "/datadetail/" + this.process_num,
                        state: {
                          num: item.classdata_num,
                        },
                      }}
                    >
                      {item.classdata_subject}
                    </Link>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {item.classdata_writer}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {item.classdata_writeday}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default classdata;
