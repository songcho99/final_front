import React, { Component } from "react";

import "./header.css";

class header extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 20;
      // console.log(window.scrollY);
      if (isTop !== true) {
        this.setState({ scrolled: false });
      } else {
        this.setState({ scrolled: true });
      }
    });
  }

  render() {
    return (
      <div
        className={this.state.scrolled ? "header-on" : "header-off"}
        id="header"
      >
        <a href="#">Mook</a>
        <ul id="header-name">
          <li id="header-name1">Spring Web 개발자 양성 과정</li>
          <li id="header-name2">임 제묵님</li>
        </ul>
      </div>
    );
  }
}

export default header;
