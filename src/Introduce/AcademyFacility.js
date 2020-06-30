import React from "react";
// import Swiper from "react-id-swiper";
// import slide1 from "./slide1.jpg";
// import slide2 from "./slide2.jpg";
// import slide3 from "./slide3.jpg";
// import slide4 from "./slide4.jpg";

const AcademyFacility = () => {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  const divStyle = {
    textAlign: "center",
    width: "1200px",
    height: "400px",
    border: "1px solid gray",
    display: "inline-block",
    float: "left",
  };
  return (
    <div style={divStyle} align="center">
      <div style={{ paddingTop: "100px" }}></div>
      {/* <Swiper {...params} style={{ float: "left", display: "inline-block" }}>
        <div style={{ float: "left", display: "inline-block" }}>
          <img
            alt=""
            src={slide1}
            style={{ width: "inherit", height: "400px" }}
          />
        </div>
        <div style={{ float: "left", display: "inline-block" }}>
          <img
            alt=""
            src={slide2}
            style={{ width: "inherit", height: "400px" }}
          />
        </div>
        <div style={{ float: "left", display: "inline-block" }}>
          <img
            alt=""
            src={slide3}
            style={{ width: "inherit", height: "400px" }}
          />
        </div>
        <div style={{ float: "left", display: "inline-block" }}>
          <img
            alt=""
            src={slide4}
            style={{ width: "inherit", height: "400px" }}
          />
        </div>
      </Swiper> */}
    </div>
  );
};

export default AcademyFacility;
