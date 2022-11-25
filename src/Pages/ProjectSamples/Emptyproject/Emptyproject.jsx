import React from "react";
import "../Emptyproject/Emptyproject.scss";
import Button from "../../../Components/Buttons/Button";
import Emptyimage from "../../../Images/empty.svg";

export default function Emptyproject() {

    function refreshPage() {
        window.location.reload();
      }
  return (
    <div className="container empty_container">
      <img src={Emptyimage} alt="empty image" />
      <h3>No Project or Check internet connection!!</h3>
      <button  onClick={ refreshPage }>Reload</button>
    </div>
  );
}
