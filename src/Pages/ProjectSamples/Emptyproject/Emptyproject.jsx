import React from "react";
import "../Emptyproject/Emptyproject.scss";
import Button from "../../../Components/Buttons/Button";
import Emptyimage from "../../../Images/empty.svg";
import { toast } from "react-toastify";

export default function Emptyproject({message}) {

    function refreshPage() {
        window.location.reload();
      }



  return (
    <div className="container empty_container">
      <img src={Emptyimage} alt="empty image" />
      <h3>{message&&message || "No Project or Check internet connection!!"}</h3>
      <Button title="Reload Page" styLe="blue" handleSubmit={refreshPage}/>
    </div>
  );
}
