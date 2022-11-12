import React, { useState } from "react";
import "../Navbar/Navbar.scss";
import logo from "../../Images/navbrandlogo.png"
import Button from "../Buttons/Button";
import {Link} from "react-router-dom"
import SearchContainer from "../SearchContainer/SearchContainer";


function Navbar({show, setShow}) {
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
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/projectsample" className="nav-link">Project Samples</Link>
            </li>
            <li className="nav-item">
              <Link to="/teams" className="nav-link">Teams(Coming Soon)</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Button 
            title={show? "CLOSE SEARCH" : "GET IN TOUCH"} 
            styLe={"blue"} onclick={()=>setShow(!show)} 
            type="button"
            datatarget="#searchContainer"
            datatoggle="modal"/>
          </form>
        </div>
        <SearchContainer/>
      </div>
    </nav>
  );
}

export default Navbar;
