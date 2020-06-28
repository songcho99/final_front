import React from "react";
import mypageimg from "./mypage.jpg";
import MyPageMenu from "./mypagemenu";

const backimage = {
  width: "100%",
  height: "850px",
  backgroundImage: `url(${mypageimg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 850px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const header = () => (
  <div style={backimage}>
    <span
      style={{
        fontSize: "70px",
        color: "#EAEAEA",
        marginTop: "180px",
      }}
    >
      IT Campus Mypage
    </span>
    <br />
    <span style={{ fontSize: "18px", color: "#EAEAEA" }}>IT Campus Mypage</span>
    <br />
    <div style={{ paddingBottom: "250px" }}></div>
    <MyPageMenu />
  </div>
);

const mypagelist = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ paddingTop: "100px" }}></div>
      {header()}
      <br />
    </div>
  );
};

export default mypagelist;
