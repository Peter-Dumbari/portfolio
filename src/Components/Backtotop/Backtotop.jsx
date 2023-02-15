import React, { useEffect } from "react";
import { useState } from "react";
import BackToTop from "react-back-to-top";
import "../Backtotop/Backtotop.scss";
import arrowImage from "../../Images/arrow.gif"

export default function Backtotop() {
  return (
    <BackToTop
    
      mainStyle={{
        width: "100%",
        height: "100%",
        backgroundColor: "#4590f6",
      }}
      percentStyle={{
        width: "100%",
        height: "100%",
        display: "none"
      }}
      animate="slide"
      offsetTop={10}
      step={100}
      percent={true}
      visiblePercent={20}
      
    >
    <img src={arrowImage} className="arrow" alt="arrowup"/>
    </BackToTop>
  );
}
