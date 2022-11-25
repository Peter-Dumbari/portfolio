import React from "react";
import "../Loader/Loader.scss";

export default function Loader() {
  return (
    <div class="main">
      <div class="spinner">
        <div class="bubble-1"></div>
        <div class="bubble-2"></div>
      </div>
      <h4>Loading...</h4>
    </div>
  );
}
