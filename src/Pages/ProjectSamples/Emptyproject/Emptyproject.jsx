import React from 'react';
import "../Emptyproject/Emptyproject.scss";
import Button from "../../../Components/Buttons/Button"
import Emptyimage from "../../../Images/empty.svg"

export default function Emptyproject() {
  return (
    <div className='container empty_container'>
        <h3>No Project or Check internet connection!!</h3>
        <img src={Emptyimage} alt="empty image"/>

    <Button title={"Reload"} styLe="blue"/>
    </div>
  )
}
