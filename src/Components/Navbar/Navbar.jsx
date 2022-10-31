import React, { useState } from "react";
import "../Navbar/Navbar.scss";
import logo from "../../Images/navbrandlogo.png"
import Button from "../Buttons/Button";


function Navbar() {
  const [isActive, setIsActive] = useState(false)



  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt=""/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 centeritems">
            <li className="nav-item" >
              <a className="nav-link"  aria-current="page" href="#">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link`} href="#">
                Our Contacts
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link `} href="#">Project Samples</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link`} href="#">Teams(Coming Soon)</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Button title={"GET IN TOUCH"} styLe={"blue"}/>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
