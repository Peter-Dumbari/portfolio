import React from 'react';
import "../Footer/Footer.scss";
import Logo from "../../Images/navbrandlogo.png"


export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <div className='container-fluid footer_container'>
        <div className="d-flex-inline footer_firstline_items">
            <img src={Logo} alt="" />
            <span>Email: dummytwiz@gmail.com</span>
        </div>
        <p> LazkWeb {currentYear} © All Rights Reserved</p>
    </div>
  )
}
