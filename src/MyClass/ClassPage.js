import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ClassPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      process_num: "",
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
      <div>
        <br></br>
        <br></br>
        <br></br>
        <h1>{this.state.subject}</h1>
        <h2>강사님 : {this.state.subject}</h2>
        <h2>매니져님 : {this.state.manager}</h2>
        <h3>
          과정 기간 : {this.state.startdate} ~ {this.state.enddate}
        </h3>
        <br></br>
        <h2>학습 페이지</h2>
        <button onClick={this.openClassNote.bind(this)}>강의 노트</button>
        &nbsp;&nbsp;
        <button onClick={this.openClassNote2.bind(this)}>수업 노트2</button>
        &nbsp;&nbsp;
        <Link to="/ToastEditor">
          <button>수업 자료</button>
        </Link>{" "}
        &nbsp;&nbsp;
        <Link to="/classdata">
          <button>수업 자료</button>
        </Link>{" "}
        &nbsp;&nbsp;
        <Link to={"/AlertList/" + this.state.process_num}>
          <button>내 일일노트</button>
        </Link>{" "}
        &nbsp;&nbsp;
        <Link to="/schedule">
          <button>스케쥴</button>
        </Link>{" "}
        &nbsp;&nbsp;
      </div>
    );
  }
}
export default ClassPage;
