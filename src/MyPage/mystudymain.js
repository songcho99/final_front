import React, { Component } from "react";
import MyPageMenu from "./mypagemenu";
import "./mystudymain.css";

// 스터디 신청 현황 리스트 import
import MystudyList from "./mystudylist";
// 모달
import Modal from "react-modal";

// 마테리얼 import
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class MyStudy extends Component {
  state = {
    mystudylist: false,
  };

  MystudyList = () => {
    // console.log("mystudylist 열기:" + this.state.mystudylist);
    this.setState({
      mystudylist: this.state.mystudylist === true ? false : true,
    });
  };

  MystudyData = (mystudylist) => {
    console.log("mystudylist: " + mystudylist);
    this.setState({
      mystudylist: mystudylist,
    });
  };

  render() {
    // 버튼 마테리얼 속성
    const Mystudy = styled(Button)({
      color: "#2a9d8f",
      borderColor: "#2a9d8f",
      fontWeight: "bold",
    });

    return (
      <div id="mystudyMain">
        <MyPageMenu />
        <div id="mystudy-back">
          <div>
            <div id="mystudy-span">마이 스터디</div>
            <div id="mystudy-label">
              관련된 스터디 항목을 한번에 확인 가능합니다.
            </div>
          </div>

          {/* 내가 개설할 스터디 */}
          <div id="mystudynav">
            <div className="mystudy-subtit">내가 개설할 스터디</div>
            <div>
              <table id="mystudy-1">
                <tr>
                  <td className="mystudy1-cel1">
                    <div className="mystudy1-con">
                      <div>번호</div>
                    </div>
                  </td>
                  <td className="mystudy1-cel2">
                    <div className="mystudy1-con2">
                      <div>스터디명</div>
                    </div>
                  </td>
                  <td className="mystudy1-cel3">
                    <div className="mystudy1-con">
                      <div></div>
                    </div>
                  </td>
                </tr>
              </table>
              <form>
                <table id="mystudy-2">
                  <tr>
                    <td className="mystudy1-cel1 ">
                      <div className="mystudy1-con">
                        <div>1</div>
                      </div>
                    </td>
                    <td className="mystudy1-cel2 ">
                      <div className="mystudy1-con2">
                        <div>셩현이와 함께하는 연예심리학</div>
                      </div>
                    </td>
                    <td className="mystudy1-cel3 ">
                      <div className="mystudy1-con">
                        <div>
                          <Mystudy
                            variant="outlined"
                            className="mystudybtn"
                            onClick={this.MystudyList.bind(this)}
                          >
                            모집 현황
                          </Mystudy>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </form>
              {/* 추가 되는 항목 여기에 추가  */}
              <div id="mystudylist-hr"></div>
            </div>
          </div>

          {/* 모집현환 클릭시 스터디 신청 현황 리스트 모달 오픈  */}
          <Modal isOpen={this.state.mystudylist} id="mystudylistmodal">
            <MystudyList
              MystudyData={this.MystudyData.bind(this)}
            ></MystudyList>
          </Modal>
          {/* 내가 참여중인 스터디 */}
          <div id="mystudynav">
            <div className="mystudy-subtit">내가 참여중인 스터디</div>
            <div>
              <table id="mystudy-1">
                <tr>
                  <td className="mystudy1-cel1">
                    <div className="mystudy1-con">
                      <div>번호</div>
                    </div>
                  </td>
                  <td className="mystudy1-cel2">
                    <div className="mystudy1-con2">
                      <div>스터디명</div>
                    </div>
                  </td>
                  <td className="mystudy1-cel3">
                    <div className="mystudy1-con">
                      <div></div>
                    </div>
                  </td>
                </tr>
              </table>
              <form>
                <table id="mystudy-2">
                  <tr>
                    <td className="mystudy1-cel1 ">
                      <div className="mystudy1-con">
                        <div>1</div>
                      </div>
                    </td>
                    <td className="mystudy1-cel2 ">
                      <div className="mystudy1-con2">
                        <div>셩현이와 함께하는 바람의 정석</div>
                      </div>
                    </td>
                    <td className="mystudy1-cel3 ">
                      <div className="mystudy1-con">
                        <div>
                          <Mystudy variant="outlined" className="mystudybtn">
                            탈퇴하기
                          </Mystudy>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </form>

              {/* 추가 되는 항목 여기에 추가  */}
              <div id="mystudylist-hr"></div>
            </div>
          </div>
          {/* 내가 승인 대기중인 스터디 */}
          <div id="mystudynav">
            <div className="mystudy-subtit">내가 승인 대기중인 스터디</div>
            <div>
              <table id="mystudy-1">
                <tr>
                  <td className="mystudy1-cel1">
                    <div className="mystudy1-con">
                      <div>번호</div>
                    </div>
                  </td>
                  <td className="mystudy1-cel2">
                    <div className="mystudy1-con2">
                      <div>스터디명</div>
                    </div>
                  </td>
                  <td className="mystudy1-cel3">
                    <div className="mystudy1-con">
                      <div></div>
                    </div>
                  </td>
                </tr>
              </table>
              <form>
                <table id="mystudy-2">
                  <tr>
                    <td className="mystudy1-cel1 ">
                      <div className="mystudy1-con">
                        <div>1</div>
                      </div>
                    </td>
                    <td className="mystudy1-cel2 ">
                      <div className="mystudy1-con2">
                        <div>셩현이와 함께하는 이별과 술의 상관관계학</div>
                      </div>
                    </td>
                    <td className="mystudy1-cel3 ">
                      <div className="mystudy1-con">
                        <div>
                          <Mystudy variant="outlined" className="mystudybtn">
                            신청 취소
                          </Mystudy>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </form>
              {/* 추가 되는 항목 여기에 추가  */}
              <div id="mystudylist-hr"></div>
            </div>
          </div>
        </div>

        {/* <Link to="/mystudyteam">
          <a href="#">인트라넷6</a>
        </Link>

        <Link to="">
          <button>탈퇴하기</button>
        </Link>

        <hr />
        <Link to="/">
          <button>홈으로</button>
        </Link> */}
      </div>
    );
  }
}
export default MyStudy;
