import React, { Component } from "react";
import "./qna.scss";
import Sid from "../Notice/noticeSid";
import noticeimg from "../Notice/noticeback.jpg";
import { Link } from "react-router-dom";
import Axios from "axios";
import Pagination from "../Notice/Pagination";

class qna_list extends Component {
  constructor() {
    super();
    this.state = {
      listData: [],
      memberData: [],
      pageNum: 1,
      member_name: localStorage.name,
      currentPage: 1, // 현재페이지
      postPerPage: 10, //한페이지에서 보여줄 데이터 갯수
      indexOfFirstPage: 0, //초기값
      space: [],
    };
  }
  componentWillMount() {
    this.setState({
      pageNum: 1,
    });
    //console.log(this.props.location.state.page);
  }
  componentDidMount() {
    this.list();
    this.setState({
      currentPosts: this.state.listData.slice(0, 10),
    });
  }
  list = () => {
    let url = "http://localhost:8000/project/qna/qnalist";
    Axios.get(url)
      .then((res) => {
        this.setState({
          listData: res.data.qdto,
          memberData: res.data.member_name,
          currentPosts: res.data.qdto.slice(0, 10),
        });

        if (this.state.member_name !== ("관리자" || "매니저")) {
          this.setState({
            write: (
              <Link
                to="/qnaadd"
                style={{ textDecoration: "none", color: "black" }}
              >
                <button
                  type="button"
                  style={{
                    fontSize: "16px",
                    backgroundColor: "white",
                    width: "110px",
                    height: "40px",
                    borderRadius: "25px",
                    cursor: "pointer",
                    border: "1px solid gray",
                  }}
                >
                  <i className="fas fa-plus"></i>&nbsp;&nbsp; 추가
                </button>
              </Link>
            ),
          });
        }

        for (var i = 0; i < this.state.listData.length; i++) {
          console.log(this.state.listData[i].qna_restep);
          let re = this.state.space;
          if (this.state.listData[i].qna_restep > 0) {
            re.push(<span>&nbsp;&nbsp;</span>);
          } else {
            re.push(
              <span>
                <i class="fab fa-weixin" style={{ fontSize: "30px" }}></i>&nbsp;
              </span>
            );
          }
          this.setState({
            space: re,
          });
        }
        console.log(this.state.space);
        console.log(this.state.memberData);
        this.paginate(this.props.location.state.page);
      })
      .catch((err) => {
        console.log("qnalist error=" + err);
      });
  };
  //paging
  paginate = (number) => {
    this.setState(
      {
        currentPage: number,
      },
      () => {
        let indexOfLastPage = this.state.currentPage * this.state.postPerPage;
        let indexOfFirstPage = indexOfLastPage - this.state.postPerPage;
        let currentPosts = this.state.listData.slice(
          indexOfFirstPage,
          indexOfLastPage
        );
        this.setState({
          currentPosts: currentPosts,
          indexOfFirstPage: indexOfFirstPage,
        });
      }
    );
    console.log(this.state.currentPosts);
    console.log(this.state.indexOfFirstPage);
  };
  render() {
    const backimage = {
      width: "100%",
      height: "400px",
      backgroundImage: `url(${noticeimg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 400px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    };
    const tableStyle = {
      textAlign: "center",
      fontSize: "16px",
      width: "1200px",
      border: "0px",
      borderCollapse: "collapse",
      borderTop: "1px solid black",
    };
    const trStyle = {
      borderBottom: "1px solid black",
      height: "60px",
    };
    const buttonStyle = {
      fontSize: "16px",
      backgroundColor: "white",
      width: "110px",
      height: "40px",
      borderRadius: "25px",
      cursor: "pointer",
      border: "1px solid gray",
    };
    return (
      <div style={{ textAlign: "center" }}>
        <Sid></Sid>
        <div style={{ paddingTop: "100px" }}></div>
        <div style={backimage}>
          <span style={{ fontSize: "70px", color: "#A6A6A6" }}>
            IT Campus Service
          </span>
          <br />
          <span style={{ fontSize: "18px", color: "#A6A6A6" }}>
            IT Campus Service
          </span>
        </div>
        <div style={{ paddingTop: "100px" }}></div>
        <span style={{ fontSize: "40px" }}>QnA</span>
        <br />
        <br />
        <span style={{ fontSize: "18px", color: "##A6A6A6" }}>
          여러분의 궁금증을 해결해 드립니다.
        </span>
        <div style={{ paddingTop: "100px" }}></div>
        <table style={tableStyle} align="center">
          <caption style={{ textAlign: "right", marginBottom: "20px" }}>
            {this.state.write}
          </caption>
          <thead>
            <tr style={trStyle}>
              <td
                style={{
                  width: "80px",
                  borderBottom: "1px solid black",
                  borderRight: "0px",
                }}
              >
                No
              </td>
              <td style={{ width: "750px", borderBottom: "1px solid black" }}>
                제목
              </td>
              <td style={{ width: "120px", borderBottom: "1px solid black" }}>
                작성자
              </td>
              <td style={{ width: "150px", borderBottom: "1px solid black" }}>
                작성일
              </td>
              <td style={{ width: "100px", borderBottom: "1px solid black" }}>
                조회수
              </td>
            </tr>
          </thead>
          <tbody>
            {this.state.currentPosts &&
              this.state.currentPosts.length > 0 &&
              this.state.currentPosts.map((item, idx) => (
                <tr key={idx} style={trStyle}>
                  <td>{idx + 1 + this.state.indexOfFirstPage}</td>
                  <td style={{ textAlign: "left" }}>
                    {this.state.space[idx]}
                    <Link
                      to={{
                        pathname: `/qnadetail`,
                        state: {
                          num: item.qna_num,
                          currentPage: this.state.currentPage,
                        },
                      }}
                      style={{ color: "black", textDecoration: "none" }}
                      list={this.list.bind(this)}
                    >
                      {item.qna_subject}
                    </Link>
                  </td>
                  <td>{this.state.memberData[idx]}</td>
                  <td>{item.qna_writeday}</td>
                  <td>{item.qna_readcount}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <Pagination
          postPerPage={this.state.postPerPage}
          totalPosts={this.state.listData.length}
          paginate={this.paginate.bind(this)}
        />
        <div style={{ paddingBottom: "100px" }}></div>
      </div>
    );
  }
}

export default qna_list;
