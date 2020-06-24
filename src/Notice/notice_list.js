import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Pagination from "./Pagination";
import noticeimg from "./noticeback.jpg";
class Notice_List extends Component {
  constructor() {
    super();
    this.state = {
      listData: [],
      pageNum: 1,
      noti: "",
      member_name: localStorage.name,
      currentPage: 1, // 현재페이지
      postPerPage: 10, //한페이지에서 보여줄 데이터 갯수
    };
  }
  componentWillMount() {
    this.setState({
      pageNum: 1,
    });
    //console.log(this.props.location.state.page);
  }

  componentDidMount() {
    console.log("currentPage=" + this.state.currentPage);
    this.list();
    if (
      this.state.member_name === "관리자" ||
      this.state.member_name === "매니저"
    ) {
      this.setState({
        admin: (
          <span>
            <Link
              to="/noticeadd"
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
          </span>
        ),
      });
    }
    this.setState({
      currentPosts: this.state.listData.slice(0, 10),
    });
  }

  list = () => {
    let url = "http://localhost:8000/project/notice/noticelist";
    Axios.get(url)
      .then((res) => {
        this.setState({
          listData: res.data,
          no: res.data.notice_type,
          currentPosts: res.data.slice(0, 10),
        });

        this.paginate(this.props.location.state.page);
      })
      .catch((err) => {
        console.log("noticelist error=" + err);
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
    // console.log("currentPage"+this.state.currentPage);
    // console.log("indexOfLastPage"+indexOfLastPage);
    // console.log("indexOfFirstPage"+indexOfFirstPage);
    // console.log("currentPosts"+currentPosts);
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

    return (
      <div style={{ textAlign: "center" }}>
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
        <span style={{ fontSize: "40px" }}>공지사항</span>
        <br />
        <br />
        <span style={{ fontSize: "18px", color: "##A6A6A6" }}>
          IT Campus의 새로운 소식을 알려드립니다.
        </span>
        <div style={{ paddingTop: "100px" }}></div>
        <table style={tableStyle} align="center">
          <caption style={{ textAlign: "right", marginBottom: "20px" }}>
            {this.state.admin}
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
              <td style={{ width: "120px", borderBottom: "1px solid black" }}>
                구분
              </td>
              <td style={{ width: "750px", borderBottom: "1px solid black" }}>
                제목
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
                  <td>{item.noti_type}</td>
                  <td style={{ textAlign: "left" }}>
                    <Link
                      to={{
                        pathname: `/noticedetail`,
                        state: {
                          num: item.notice_num,
                          currentPage: this.state.currentPage,
                          pageNum: this.state.pageNum,
                        },
                      }}
                      style={{ color: "black", textDecoration: "none" }}
                      list={this.list.bind(this)}
                    >
                      [{item.noti_type}]{item.notice_subject}
                    </Link>
                  </td>
                  <td>{item.notice_writeday}</td>
                  <td>{item.notice_readcount}</td>
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
export default Notice_List;
