import React, { Component } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import Swal from "sweetalert2";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import HtmlParser from "react-html-parser";

import Axios from "axios";

const socket = io.connect("http://localhost:5000");
class classnote extends Component {
  editorRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      searchgroup: [{ asd: "" }, { asd: 0 }, { fdf: "분야" }],
      classcontent: "",
      roomnum: 0,
      roomname: "",
      memeocontent: "",
      classList: [],
    };
  }

  updateContent = (e) => {
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });

    this.setState({
      classcontent: this.editorRef.current.getInstance().getHtml(),
    });
    console.log(this.state.classcontent);

    this.sendMessage(this.state.classcontent);
  };

  sendMessage(msg) {
    socket.emit("update-msg", localStorage.room, msg);
  }

  updateMemo = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    console.log(this.state.memocontent);
  };

  classSave = (e) => {
    e.preventDefault();

    let str = this.state.classcontent.replace(/</g, "&");
    const str2 = str.replace(/>/g, "*");

    console.log("str2:" + str2);

    this.setState({
      classcontent: this.state.classcontent.replace(/</g, "&"),
    });
    this.setState({
      classcontent: this.state.classcontent.replace(/>/g, "*"),
    });
    console.log(this.state.classcontent);
    /* let bytes = [];
    for (let i = 0; i < this.state.classcontent.length; i++) {
      var code = this.state.classcontent.charCodeAt(i);

      bytes = bytes.concat([code]);
      console.log(bytes);
    }*/

    window.open(
      "http://localhost:8000/project/word/save?content=" +
        str2 +
        "&process_num=" +
        this.state.roomnum,
      "",
      "width:200,height:200"
    );

    // const script = document.createElement("script");
    // script.src = "https://use.typekit.net/foobar.js";
    // script.async = true;
    // document.body.appendChild(script);
  };

  memoSave = (e) => {
    e.preventDefault();

    console.log("content:" + this.state.content);

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
      "http://localhost:8000/project/processclass/opennote?member_num=" +
      localStorage.num;
    Axios.get(url)
      .then((res) => {
        this.setState({
          roomnum: res.data.process_num,
          roomname: res.data.process_subject,
        });

        console.log("roomnum:" + this.state.roomnum);
        console.log("roomname:" + this.state.roomname);
        localStorage.room = this.state.roomname;

        //지난 수업 목록 불러오기
        let listUrl =
          "http://localhost:8000/project/processclass/classlist?process_num=" +
          this.state.roomnum;
        Axios.get(listUrl)
          .then((res) => {
            console.log(res.data);
            this.setState({
              classList: res.data,
            });
            console.log(this.state.classList);
          })
          .catch((err) => {
            console.log("지난 수업 목록 불러오기 에러 :" + err);
          });
      })
      .catch((err) => {
        console.log("수강 과정 번호 불러오기 에러 :" + err);
      });

    socket.emit("join", localStorage.room);
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

  handleClick = () => {
    this.setState({
      classcontent: this.editorRef.getInstance().getHtml(),
    });
    console.log(this.state.classcontent);
  };

  render() {
    const filelist = this.state.classList.map((item) => (
      <tr>
        <td>{item}</td>
      </tr>
    ));

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <table>{filelist}</table>
        <br></br>
        <Editor
          previewStyle="tab"
          height="700px"
          initialEditType="wysiwyg"
          onChange={this.updateContent.bind(this)}
          initialValue={this.state.classcontent}
          ref={this.editorRef}
        />
        <div id="viewer">{HtmlParser(this.state.classcontent)}</div>

        {/* <textarea
          rows="20"
          cols="30"
          name="classcontent"
          onChange={this.updateContent.bind(this)}
          value={this.state.classcontent}
        ></textarea> */}
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
