import React, { Component } from "react";
import Main from "./header";
import Footer from "./footer";
import Menu from "./menu";

class main extends Component {
  render() {
    return (
      <div>
        <Main />
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default main;
