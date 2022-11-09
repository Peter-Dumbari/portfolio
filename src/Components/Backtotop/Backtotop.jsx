import React, { useEffect } from "react";
import { useState } from "react";
import BackToTop from "react-back-to-top";

export default function Backtotop() {
  return (
    <BackToTop
      mainStyle={{
        width: "100%",
        height: "100%",
      }}
      percentStyle={{
        width: "100%",
        height: "100%",
      }}
      animate="rotate"
      offsetTop={10}
      step={100}
      percent={true}
      visiblePercent={20}
    />
  );
}
