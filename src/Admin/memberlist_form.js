import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Paper } from "@material-ui/core";
import axios from "axios";
import Swal from "sweetalert2";
import img1 from "./member1.png";
import img2 from "./member2.png";

export default function MemberList_Form() {
  // 검색 필터 값 받는 변수
  const [field, setField] = React.useState("");

  //선택값에 따라 필터값 바뀌는 이벤트
  const handleChange = (event) => {
    setField(event.target.value);
    console.log(event.target.value);
  };

  // 검색어 값 받는 변수
  const [search, setSearch] = React.useState("");

  //입력할때마다 검색어 바뀌는 이벤트
  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  //테이블 TH부분
  const header = () => (
    <TableHead>
      <TableRow>
        <TableCell style={{ textAlign: "center", width: 80 }}>구분</TableCell>
        <TableCell style={{ textAlign: "center", width: 100 }}>이름</TableCell>
        <TableCell style={{ textAlign: "center", width: 100 }}>
          핸드폰
        </TableCell>
        <TableCell style={{ textAlign: "center", width: 200 }}>
          이메일
        </TableCell>
        <TableCell style={{ textAlign: "center", width: 570 }}>주소</TableCell>
        <TableCell style={{ textAlign: "center", width: 50 }}>비고</TableCell>
      </TableRow>
    </TableHead>
  );

  //멤버 목록 담는 변수
  let memberList = [];

  //멤버 목록 출력시 담는 변수
  const [asd, setAsd] = React.useState([]);

  //전체 목록 출력
  const list = () => {
    let url = "http://localhost:8000/project/member/memberlist";
    axios
      .get(url)
      .then((res) => {
        memberList = res.data;

        setAsd(memberList);

        console.log(memberList);
      })
      .catch((err) => {
        console.log("list 에러:" + err);
      });
  };
  //검색 멤버 출력
  const searchMember = () => {
    let url =
      "http://localhost:8000/project/member/memberlist?field=" +
      field +
      "&search=" +
      search;
    axios
      .get(url)
      .then((res) => {
        memberList = res.data;

        setAsd(memberList);
        console.log(memberList);
      })
      .catch((err) => {
        console.log("search 에러:" + err);
      });
  };
  //멤버 삭제

  const onBoardDelete = (member_num) => {
    let url =
      "http://localhost:8000/project/member/memberdelete?member_num=" +
      member_num;
    axios
      .delete(url)
      .then((res) => {
        list();
      })
      .catch((err) => {
        console.log(member_num);
        console.log("삭제 오류:" + err);
      });
  };
  const trash = (item) => {
    if (item.member_name !== ("매니저" || "관리자")) {
      return select(item);
    }
  };

  const select = (item) => (
    <span
      onClick={onBoardDelete.bind(this, item.member_num)}
      style={{ cursor: "pointer" }}
    >
      <i className="far fa-trash-alt" style={{ fontSize: "20px" }} />
    </span>
  );
  const backimage = {
    width: "1400px",
    height: "400px",
    backgroundImage: `url(${img2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "inline-block",
  };
  const searchStyle1 = {
    fontSize: "16px",
    textAlign: "center",
    backgroundColor: "white",
    width: "100px",
    height: "40px",
    cursor: "pointer",
    border: "1px solid gray",
  };
  const searchStyle2 = {
    fontSize: "16px",
    textAlign: "left",
    backgroundColor: "white",
    width: "400px",
    height: "37px",
    cursor: "pointer",
    border: "1px solid gray",
  };
  const searchStyle3 = {
    fontSize: "16px",
    textAlign: "left",
    backgroundColor: "white",
    width: "100px",
    height: "37px",
    cursor: "pointer",
    border: "1px solid gray",
  };

  //라이프싸이클
  useEffect(() => {
    list();
  }, []);
  return (
    <div style={{ textAlign: "center" }} align="center">
      <div style={{ paddingTop: "200px" }}></div>
      <div style={backimage} align="center">
        <span style={{ fontSize: "70px", color: "#A6A6A6" }}>MEMBER</span>
        <br />
        <span style={{ fontSize: "18px", color: "#A6A6A6" }}></span>
      </div>
      <div style={{ paddingTop: "100px" }}></div>
      {/* 검색 유형 선택 창 */}
      <div align="center">
        <span>
          <select value={field} onChange={handleChange} style={searchStyle1}>
            <option value="member_type">구분</option>
            <option value="member_name">이름</option>
            <option value="member_phone">핸드폰</option>
            <option value="member_email">이메일</option>
            <option value="member_addr">주소</option>
          </select>
        </span>
        &nbsp;&nbsp;
        {/* 검색어 입력 창 */}
        <input
          type="text"
          required="required"
          placeholder="검색어를 입력하세요."
          onChange={handleSearch}
          value={search}
          style={searchStyle2}
        />
        &nbsp;&nbsp;
        <button type="button" style={searchStyle3} onClick={searchMember}>
          <i className="fas fa-search"></i>
          &nbsp;&nbsp; 검색
        </button>
      </div>
      <div style={{ paddingTop: "50px" }}></div>
      {/* 테이블 반복 출력 부분 */}

      <div align="center">
        <Paper style={{ width: 1400 }}>
          <Table style={{ width: 1400 }} align="center">
            {header()}
            {asd.map((item, idx) => (
              <TableBody style={{ width: 1100 }}>
                <TableCell style={{ textAlign: "center" }}>
                  {item.member_type}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {item.member_name}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {item.member_phone}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {item.member_email}
                </TableCell>
                <TableCell style={{ textAlign: "left" }}>
                  {item.member_address + " " + item.member_detailaddr}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {trash(item)}
                </TableCell>
              </TableBody>
            ))}
          </Table>
        </Paper>
      </div>
      <div style={{ paddingBottom: "100px" }}></div>
    </div>
  );
}
