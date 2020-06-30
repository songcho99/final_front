import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { TableHead } from "@material-ui/core";
import Modal from "react-modal";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Swal from "sweetalert2";
import "./CurriculumDetail.scss";

class CurriculumDetail extends Component {
  constructor({ match }) {
    super();

    this.process_num = match.params.process_num;
    this.state = {
      processData: [],
      processFiles: [],
      books: [],
      booksImages: [],
      modalOpen: false,
      processapply_applyreason: "",
    };
  }

  detail = () => {
    let url =
      "http://localhost:8000/project/process/detail?process_num=" +
      this.process_num;
    console.log(this.process_num);
    Axios.get(url)
      .then((res) => {
        this.setState({
          processData: res.data.processdto,
          processFiles: res.data.processfiles,
          books: res.data.books,
        });
        console.log(this.state.processData);
        console.log(this.state.processFiles);
        console.log(this.state.books);

        let url =
          "http://localhost:8000/project/process/getImages?num=" +
          this.process_num;
        Axios.get(url)
          .then((res) => {
            console.log(res.data);
            if (res.data !== null) {
              this.setState({
                booksImages: res.data,
              });
            }
          })
          .catch((err) => {
            console.log("책 이미지 불러오기 에러 : " + err);
          });
      })
      .catch((err) => {
        console.log("수강 과정 상세 데이터 불러오기 에러 : " + err);
      });
  };

  ProcessApply = (e) => {
    this.setState({
      modalOpen: true,
    });
  };

  DeleteProcess = () => {
    Swal.fire({
      title: "해당 수강 과정을 삭제하시겠습니까?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        let url =
          "http://localhost:8000/project/process/delete?process_num=" +
          this.process_num;

        Axios.get(url)
          .then((res) => {
            Swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            ).then((result) => {
              if (result.value) {
                window.location.href = "/curriculumlist";
              }
            });
          })
          .catch((err) => {
            console.log("수강 과정 삭제 에러 : " + err);
          });
      }
    });
  };

  getNum = () => {
    return this.state.process_num;
  };

  applyTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  ProcessApplySubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();

    let checkUrl =
      "http://localhost:8000/project/processapply/check?member_num=" + 12;
    Axios.get(checkUrl)
      .then((res) => {
        if (res.data > 0) {
          Swal.fire({
            icon: "error",
            title: "신청 실패..ㅠㅠ",
            text: "이미 신청하신 데이터가 있습니다!",
          });
          return false;
        } else {
          formdata.append(
            "processapply_applyreason",
            this.state.processapply_applyreason
          );
          formdata.append(
            "processapply_process_num",
            this.state.processData.process_num
          );
          formdata.append("processapply_member_num", 13);

          let applyUrl = "http://localhost:8000/project/processapply/insert";
          Axios.post(applyUrl, formdata)
            .then((res) => {
              this.setState({
                processapply_applyreason: "",
                modalOpen: false,
              });

              Swal.fire({
                icon: "success",
                title: "성공!!",
                text: "수강 과정 신청이 성공적으로 처리되었습니다!",
              });
            })
            .catch((err) => {
              console.log("수강 과정 신청 에러 : " + err);
            });
        }
      })
      .catch((err) => {
        console.log("수강 과정 신청 확인 에러 : " + err);
      });
  };

  componentWillMount = () => {
    console.log("asd");
    this.detail();
  };

  render() {
    let booksImage = [];
    for (let i = 0; i < this.state.booksImages.length; i++) {
      booksImage.push(this.state.booksImages[i]);
    }

    const imageUrl = "http://localhost:8000/project/uploadfile/";
    return (
      <div id="curridetail">
        <div id="curridetailback">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell style={{ textAlign: "center" }}>
                    <h1>{this.state.processData.process_subject}</h1>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div style={{ textAlign: "right" }}>
                      {this.state.processData.process_writeday}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div style={{ textAlign: "right" }}>
                      {this.state.processData.process_writer}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    {this.state.processData.process_subject}
                    <br />
                    {this.state.processData.process_type}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    과정 기간 :{this.state.processData.process_startdate} ~{" "}
                    {this.state.processData.process_enddate}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    수업 시간 : 오전 09시30분 ~ 오후 18시30분 (점심시간 오후
                    13시30분 ~ 오후 14시30분)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    수강생 인원 : {this.state.processData.process_peoples} 명
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    담당 강사님 : {this.state.processData.process_teachername}
                    <br />
                    담당 매니져 : {this.state.processData.process_writer}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div>소개 : {this.state.processData.process_intr}</div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    {this.state.processFiles.map((item, index) => (
                      <img
                        key={index}
                        src={imageUrl + item.processfiles_process_filename}
                        alt=""
                        className="curridetailimg"
                      />
                    ))}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan="3">
                    <h3 textAlign="center">제공 교제 리스트</h3>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>출판사</TableCell>
                            <TableCell>교제명</TableCell>
                            <TableCell>저자</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {this.state.books.map((item, index) => (
                            <TableRow>
                              <TableCell>
                                <img
                                  src={booksImage[index]}
                                  alt=""
                                  key={index}
                                />
                              </TableCell>
                              <TableCell>{item.books_brand}</TableCell>
                              <TableCell>{item.books_name}</TableCell>
                              <TableCell>{item.books_writer}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div id="curridetailnav">
            <Button onClick={this.ProcessApply.bind(this)} id="curridetailbtn">
              과정 신청
            </Button>
            <hr />
            <NavLink
              React
              to={"/curriculumschedule/" + 2}
              className="curridetailsubbtn"
            >
              <Button>LIST</Button>
            </NavLink>
            <Button
              onClick={this.DeleteProcess.bind(this)}
              className="curridetailsubbtn"
            >
              DELETE
            </Button>
            <NavLink
              exact
              to={"/CurriculumUpdate/" + this.process_num}
              className="curridetailsubbtn"
            >
              <Button>UPDATE</Button>
            </NavLink>
          </div>
          <Modal isOpen={this.state.modalOpen} id="curridetailmodal">
            <div id="curridetailmodalback">
              <div id="curridetailmodalback2">
                <div id="curridetailmodaltit">
                  {this.state.processData.process_subject}
                </div>
                <div className="curridetailmodalsub">
                  <div className="curridetailmodalsubspan">
                    수강 과정 타입 :
                  </div>{" "}
                  {this.state.processData.process_type}
                </div>
                <div className="curridetailmodalsub">
                  <div className="curridetailmodalsubspan">과정 기간 :</div>{" "}
                  {this.state.processData.process_startdate} ~{" "}
                  {this.state.processData.process_enddate}
                </div>
                <form
                  onSubmit={this.ProcessApplySubmit.bind(this)}
                  id="curridetailmodaltextareabox"
                >
                  <TextareaAutosize
                    name="processapply_applyreason"
                    onChange={this.applyTextChange.bind(this)}
                    id="curridetailmodaltextarea"
                    aria-label="minimum height"
                    rowsMin={3}
                    placeholder="수강 과정에 신청하시는 이유를 적어주세요."
                    value={this.state.processapply_applyreason}
                  />

                  <div id="curridetailbodalbtnbox">
                    <button type="submit" className="curridetailbodalbtn">
                      신청
                    </button>
                    <button
                      className="curridetailbodalbtn"
                      onClick={() => {
                        this.setState({
                          modalOpen: false,
                        });
                      }}
                    >
                      취소
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default CurriculumDetail;
