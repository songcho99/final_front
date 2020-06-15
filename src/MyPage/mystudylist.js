import React, { Component } from "react";
import "./mystudylist.css";

// 마테리얼
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class mystudylist extends Component {
  MystudyData = () => {
    this.props.MystudyData(false);
  };
  render() {
    const Mystudy = styled(Button)({
      color: "#2a9d8f",
      borderColor: "#2a9d8f",
      fontWeight: "bold",
    });

    return (
      <div id="mystudy-back">
        <div>
          <div id="mystudy-span">스터디 신청 현황 리스트</div>
          <div id="mystudy-label">
            참여 희망하는 신청자 리스트를 한눈에 확인 가능합니다.
          </div>
        </div>
        <div id="mystudylist-nav">
          <table id="mystudylist">
            <tr>
              <td className="mystudylist-cel1">
                <div className="mystudylist-con">
                  <div>이름</div>
                </div>
              </td>
              <td className="mystudylist-cel2">
                <div className="mystudylist-con">
                  <div>핸드폰</div>
                </div>
              </td>
              <td className="mystudylist-cel1">
                <div className="mystudylist-con">
                  <div>수준</div>
                </div>
              </td>
              <td className="mystudylist-cel3">
                <div className="mystudylist-con">
                  <div>코멘트</div>
                </div>
              </td>
              <td className="mystudylist-cel4">
                <div className="mystudylist-con">
                  <div></div>
                </div>
              </td>
            </tr>
          </table>
          <form action="" method="post">
            <table id="mystudylist">
              <tr>
                <td className="mystudylist-cel1 ">
                  <div className="mystudylist-con">
                    <div>임제묵</div>
                  </div>
                </td>
                <td className="mystudylist-cel2 ">
                  <div className="mystudylist-con">
                    <div>010-7307-1716</div>
                  </div>
                </td>
                <td className="mystudylist-cel1 ">
                  <div className="mystudylist-con">
                    <div>하</div>
                  </div>
                </td>
                <td className="mystudylist-cel3">
                  <div className="mystudylist-con">
                    <div>성현님 너무 멋있어요</div>
                  </div>
                </td>
                <td className="mystudylist-cel4">
                  <div className="mystudylist-con">
                    <div>승인 / 거절</div>
                  </div>
                </td>
              </tr>
            </table>
          </form>
          {/* 여기에 추가 되는 내용 for 문으로 들어오면 될 듯  */}

          <div id="mystudylist-hr"></div>
        </div>
        <div id="mystudylistbtn">
          <Mystudy
            onClick={this.MystudyData.bind(this)}
            variant="outlined"
            className="mystudybtn"
          >
            닫기
          </Mystudy>
        </div>
      </div>
    );
  }
}

export default mystudylist;
