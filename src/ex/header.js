import React, { Component } from "react";
import "./header.css";
class header extends Component {
  state = {
    num: 0,
    hid: "hd-off",
    on: true,
  };
  hdbtnClick = () => {
    // console.log("hdbtnClick 출력" + this.state.num);
    this.setState({
      num: ++this.state.num,
      hid: this.state.num % 2 == 0 ? "hd-off" : "hid-on",
      on: this.state.num % 2 == 0 ? true : false,
    });
  };
  render() {
    return (
      <div id="header">
        <div id="hd-log">IT Campus</div>
        <div id="hd-menu">
          <div id="hd-me-1">Spring Web 개발자 양성 과정</div>
          <div id="hd-me-2">임제묵님</div>
          <div id="hd-me-3">
            <i class="fas fa-user-circle"></i>
          </div>
        </div>

        {this.state.on && (
          <a href="#" id="hd-btn" onClick={this.hdbtnClick.bind(this)}>
            <i class="fas fa-bars"></i>
          </a>
        )}

        {!this.state.on && (
          <a href="#" id="hd-btnx" onClick={this.hdbtnClick.bind(this)}>
            <i class="fas fa-times"></i>
          </a>
        )}
        <a href="#" className={this.state.hid} id="hd-btn-note">
          <i class="fas fa-sticky-note"></i>
        </a>
        <a href="#" className={this.state.hid} id="hd-btn-book">
          <i class="fas fa-book"></i>
        </a>
        <a href="#" className={this.state.hid} id="hd-btn-sch">
          <i class="far fa-calendar-alt"></i>
        </a>
        <a href="#" className={this.state.hid} id="hd-btn-cha">
          <i class="fas fa-chart-bar"></i>
        </a>
        <a href="#" className={this.state.hid} id="hd-btn-my">
          <i class="far fa-address-book"></i>
        </a>
      </div>
    );
  }
}

export default header;
