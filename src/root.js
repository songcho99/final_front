import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./ex/main";

class root extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}

export default root;
