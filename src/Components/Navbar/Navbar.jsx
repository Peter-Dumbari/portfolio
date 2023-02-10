import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.scss";
import logo from "../../Images/navbrandlogo.png";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import SearchContainer from "../SearchContainer/SearchContainer";
import { NavLink } from "react-router-dom";
import { Waypoint } from "react-waypoint";

function Navbar() {
  const [webFlow, setWebFlow] = useState("");
  const [isOpen, setIsOpen] = useState(true)

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width = windowSize.width;

  return (
    <>
      <Waypoint
        onEnter={() => setWebFlow("navbar")}
        onLeave={() => setWebFlow("fixed-top")}
        topOffset="-10%"
        bottomOffset="10px"
      />

      <nav className={`navbar navbar-expand-lg ${webFlow}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="d-flex menu-div">
            {width < 600 && (
              <div
                data-bs-toggle="modal"
                aria-label="Toggle navigation"
                data-bs-target="#searchContainer"
                aria-expanded="false">
                <i className="fas fa-search searchonNav"></i>
              </div>
            )}
            <div
            onClick={()=>{setIsOpen(!isOpen)}}
            className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
                 <i className={`fa-solid ${ isOpen? "fa-bars": "fa-times"} bars`} ></i>
            </div>
          </div>
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
                  Curriculum Vitae
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {width < 600 ? null : (
                <div
                  className="navSearchContainer"
                  data-bs-toggle="modal"
                  data-bs-target="#searchContainer"
                  aria-controls="ariacontrol">
                  <div className="d-inline-flex flexer">
                    <div className="firstPart">
                      <i className="fas fa-search searchIcon"></i>
                      <span>Search</span>
                    </div>
                    <div className="secondPart">
                      <span className="commandIcon">⌘</span>
                      <span className="alphabetK">K</span>
                    </div>
                  </div>
                </div>
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
