import React, { Component } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import Swal from "sweetalert2";
import Axios from "axios";

const socket = io.connect("http://localhost:4000");
class classnote extends Component {
  state = {
    searchgroup: [{ asd: "" }, { asd: 0 }, { fdf: "분야" }],
    classcontent: "",
    roomnum: 0,
    memeocontent: "",
  };

  updateContent = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      roomname: "",
    });

    this.sendMessage(e.target.value);
  };

  sendMessage(msg) {
    socket.emit("update-msg", localStorage.type, msg);
  }

  updateMemo = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    console.log(this.state.memocontent);
  };

  classSave = (e) => {
    e.preventDefault();
    const script = document.createElement("script");
    script.src = "https://use.typekit.net/foobar.js";
    script.async = true;
    document.body.appendChild(script);
  };

  memoSave = (e) => {
    e.preventDefault();
    let url = "http://localhost:8000/project/memo/insert";
    let formData = new FormData();
    formData.append("memo_member_num", localStorage.num);
    formData.append("memo_content", this.state.memocontent);
    Axios.post(url, formData)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "메모 저장 성공!",
          text: "메모가 성공적으로 저장되었습니다!",
        });
        this.setState({
          memocontent: "",
        });
      })
      .catch((err) => {
        console.log("메모 저장 에러 :" + err);
      });
  };

  componentWillMount() {
    let url =
      "http://localhost:8000/project/processclass/opennote?process_subject=" +
      localStorage.type;
    Axios.get(url)
      .then((res) => {
        this.setState({
          roomnum: res.data.process_num,
        });
      })
      .catch((err) => {
        console.log("수강 과정 번호 불러오기 에러 :" + err);
      });

    socket.emit("join", localStorage.type);
    socket.on("roomnum", (msg) => {
      console.log(msg);
    });
  }

  componentDidMount() {
    socket.on("chat-msg", (msg) => {
      console.log("did msg:" + msg);
      this.setState({
        classcontent: msg,
      });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <textarea
          rows="20"
          cols="30"
          name="classcontent"
          onChange={this.updateContent.bind(this)}
          value={this.state.classcontent}
        ></textarea>
        <br />
        <button onClick={this.classSave.bind(this)}>SAVE CLASS</button>

        {/* <input type="text" readOnly value={this.state.classcontent} />
        <input
          type="text"
          name="classcontent"
          onChange={this.updateContent.bind(this)}
        /> */}

        <h3>메모</h3>
        <form onSubmit={this.memoSave.bind(this)}>
          <textarea
            name="memocontent"
            value={this.state.memocontent}
            onChange={this.updateMemo.bind(this)}
          ></textarea>
          <br />
          <button type="submit">메모 저장</button>
        </form>
        <hr />
        <Link to="/">
          <button>홈으로</button>
        </Link>
      </div>
    );
  }
}
export default classnote;
