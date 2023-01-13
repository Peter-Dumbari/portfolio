import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.scss";
import logo from "../../Images/navbrandlogo.png";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import SearchContainer from "../SearchContainer/SearchContainer";
import { NavLink } from "react-router-dom";
import { Waypoint } from "react-waypoint";

function Navbar({ show, setShow }) {
  const [isActive, setIsActive] = useState(false);
  const [webFlow, setWebFlow] =useState("")
  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  const width = window.innerWidth;

  return (
    <>
    <Waypoint
    onEnter={() =>
    setWebFlow("animate__animated animate__headShake")
    }
    onLeave={() => setWebFlow("fixed-top")}
    topOffset="-10%"
    bottomOffset="10px"
    />
                
    <nav className={`navbar navbar-expand-lg ${webFlow}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <img src={logo} alt="" />
        </Link>
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
            <li className="nav-item">
              <NavLink to="/" className={`nav-link`}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">         
              <NavLink to="/projectsample" className={`nav-link`}>
                Project Samples
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/teams" className={`nav-link`}>
                Teams (Coming Soon)
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {width < 600 ? (
              <span
                className="mini_search_button"
                data-bs-toggle="modal"
                data-bs-target="#searchContainer"
                aria-controls="ariacontrol">
                Search
              </span>
            ) : (
              <Button
                title={show ? "CLOSE SEARCH" : "GET IN TOUCH"}
                styLe={"blue"}
                onclick={() => setShow(!show)}
                type="button"
                datatarget="#searchContainer"
                datatoggle="modal"
              />
            )}
          </form>
        </div>
        <SearchContainer />
      </div>
    </nav>
    </>
  );
}

export default Navbar;
