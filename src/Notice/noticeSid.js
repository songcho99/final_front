import React, { Component } from "react";
import "./noticeSid.scss";

class noticeSid extends Component {
  render() {
    return (
      <div id="noticSid">
        <div id="noticSidback"></div>
        <a className="noticnav" href="/noticelist">
          공지사항
        </a>
        <a className="noticnav" href="/qnalist">
          Q&A
        </a>
      </div>
    );
  }
}

export default noticeSid;
