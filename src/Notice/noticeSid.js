import React, { Component } from "react";
import "./noticeSid.scss";

class noticeSid extends Component {
  render() {
    return (
      <div id="noticSid">
        <a className="noticnav" href="/noticelist">
          공지사항
        </a>
        <a className="noticnav" href="/qna">
          Q&A
        </a>
      </div>
    );
  }
}

export default noticeSid;
