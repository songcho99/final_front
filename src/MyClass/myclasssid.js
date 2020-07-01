import React, { Component } from "react";
import "./myclasssid.scss";

class myclasssid extends Component {
  render() {
    return (
      <div id="myclasssid">
        <div id="myclassnav">
          {/* 수업 노트 */}
          <div id="myclassnote">
            <div id="myclassnotesub">수업노트</div>
            <a
              id="myclassnotemain"
              onClick={this.props.openClassNote2.bind(this)}
            >
              <i className="fas fa-book-open"></i>
            </a>
          </div>

          {/* 수업자료 */}
          {/* <div id="myclassnote">
            <div id="myclassnotesub">수업자료</div>
            <a
              id="myclassnotemain"
              href={"/classdata/" + this.props.process_num}
            >
              <i className="fas fa-book-open"></i>
            </a>
          </div> */}

          {/*  */}
        </div>
      </div>
    );
  }
}

export default myclasssid;
