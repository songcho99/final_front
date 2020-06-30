import React, { Component } from "react";
import "./myclasssid.scss";

class myclasssid extends Component {
  render() {
    return (
      <div id="myclasssid">
        <div id="myclassnav">
          {/* 강의 노트 */}
          <div id="myclassnote">
            <div id="myclassnotesub">강의노트</div>
            <a
              id="myclassnotemain"
              onClick={this.props.openClassNote.bind(this)}
            >
              <i className="fas fa-book-open"></i>
            </a>
          </div>

          {/* 강의 노트 */}
          <div id="myclassnote">
            <div id="myclassnotesub">수업노트</div>
            <a
              id="myclassnotemain"
              onClick={this.props.openClassNote2.bind(this)}
            >
              <i className="fas fa-book-open"></i>
            </a>
          </div>

          {/*  */}
        </div>
      </div>
    );
  }
}

export default myclasssid;
