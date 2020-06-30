import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class classdata extends Component {
  constructor() {
    super();
    this.state = {
      classdatalist: [],

    }
  }

  list = () => {
    let url = "http://localhost:8000/project/classdata/classdatalist";
    axios.get(url)
      .then((res) => {
        this.setState({
          classdatalist: res.data
        })
      }).catch((err) => {
        console.log("목록 출력 에러:" + err);
      })
  };
  componentWillMount() {
    this.list();
  }
  render() {
    return (
      <div>
        <br></br><br></br><br></br><br></br><br></br>
        <h2>수업자료입니다!</h2>
        <Link to="/writedata">
          <button>자료 작성</button>
        </Link>
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
                    <Link to={{
                      pathname: '/datadetail',
                      state: {
                        num: item.classdata_num
                      },
                    }}>
                      {item.classdata_subject}
                    </Link>
                  </td>
                  <td style={{ textAlign: "center" }}>{item.classdata_writer}</td>
                  <td style={{ textAlign: "center" }}>{item.classdata_writeday}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br></br>
        <hr />
        <Link to="/">
          <button>홈으로</button>
        </Link>
      </div >
    );
  }
}
export default classdata;
