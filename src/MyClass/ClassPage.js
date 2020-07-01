import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import MyclassSid from "./myclasssid";
import "./ClassPage.scss";

class ClassPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  componentWillMount() {
    this.getClass();
  }

  render() {
    return (
      <div id="classpage">
        <MyclassSid
          process_num={this.state.process_num}
          openClassNote2={this.openClassNote2.bind(this)}
        ></MyclassSid>
        <div id="classpageback">
          <div id="classpagebox">
            <div>{this.state.subject} 제목</div>
            <div>
              <table>
                <tbody>
                  <tr>
                    <th>
                      <div>강사 : </div>
                    </th>
                    <td>
                      <div>{this.state.subject}임제묵</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>메니져 : </div>
                    </th>
                    <td>
                      <div>{this.state.manager}김성현</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>과정기간 : </div>
                    </th>
                    <td>
                      <div>
                        {this.state.startdate} 2020.10.20 ~ 2020.11.22
                        {this.state.enddate}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ClassPage;
