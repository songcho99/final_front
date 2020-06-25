import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CurriculumMenu from "../Curriculum/CurriculumMenu";

class CurriculumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentWillMount() {
    let url = "http://localhost:8000/project/process/list";
    axios
      .post(url)
      .then((res) => {
        this.setState({
          list: res.data,
        });
      })
      .catch((err) => {
        console.log("수강 과정 목록 불러오기 에러 : " + err);
      });
  }
  render() {
    const imageUrl = "http://localhost:8000/project/process/image";

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CurriculumMenu />
        <h2>수강과정 목록입니다</h2>
        <a style={{ marginLeft: "1000px" }} href="/CurriculumAdd">
          수강 과정 추가
        </a>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">분류</TableCell>
                <TableCell align="right">과정명</TableCell>
                <TableCell align="right">과정 기간</TableCell>
                <TableCell align="right">담당 강사님</TableCell>
                <TableCell align="right">담당 매니져</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.list.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.process_num}
                  </TableCell>
                  <TableCell align="right">{row.process_type}</TableCell>
                  <TableCell align="right">{row.process_subject}</TableCell>
                  <TableCell align="right">
                    {row.process_startdate}&nbsp;~&nbsp;{row.process_enddate}
                  </TableCell>
                  <TableCell align="center">
                    {row.process_teachername}
                  </TableCell>
                  <TableCell align="center">{row.process_writer}</TableCell>
                  <TableCell align="center">{row.process_writeday}</TableCell>
                  <TableCell>
                    <NavLink exact to={"/CurriculumDetail/" + row.process_num}>
                      <Button>자세히 보기</Button>
                    </NavLink>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
export default CurriculumList;
