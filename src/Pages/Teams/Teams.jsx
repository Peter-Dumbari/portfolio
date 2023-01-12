import React from 'react';
import "../Teams/Teams.scss";
import { Link } from 'react-router-dom';
import image from "../../Images/emptypage.png"
export default function Teams() {
  return (
    <div>
      <div className="blank_page">
        <img src={image} alt="" className="blank_page_image" />
      </div>
      <Link to="/upload">?</Link>
    </div>
  )
}
