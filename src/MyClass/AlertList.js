import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default class AlertList extends Component {
  constructor({ match }) {
    super();
    this.process_num = match.params.process_num;
    this.state = {
      alertlist: [],
    };
  }

  list() {
    let url =
      "http://localhost:8000/project/memo/list?process_num=" + this.process_num;

    axios
      .get(url)
      .then((res) => {
        this.setState({
          alertlist: res.data,
        });
      })
      .catch((err) => {
        console.log("알림 목록 불러오기 에러 :" + err);
      });
  }

  componentWillMount() {
    this.list();
  }

  render() {
    const alertlist = this.state.alertlist.map((item, index) => (
      <tr>
        <td>{item.memo_subject}</td>
        <td>{item.memo_writeday}</td>
        {/* */}
        <td>{item.content}</td>
        <td>{item.filename}</td>
      </tr>
    ));
    return (
      <div>
        <br />
        <br />
        <NavLink
          exact
          to={"/AlertAdd/" + this.state.alertlist.memo_process_num}
        >
          <button>추가</button>
        </NavLink>
        <table>{alertlist}</table>
      </div>
    );
  }
}
