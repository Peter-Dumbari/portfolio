import React from "react";
import "../Footer/Footer.scss";
import Logo from "../../Images/navbrandlogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid footer_container">
      <div className="footer_main_container">
        <div className="footer_firstline_items">
          <div className="row">
            <Link className="footerlinks">About us</Link>
            <Link className="footerlinks">Feedback</Link>
            <Link className="footerlinks">Community</Link>
          </div>
          <div className="row">
            <Link className="footerlinks">Trust, Safety & Security</Link>
            <Link className="footerlinks">Help & Support</Link>
            <Link className="footerlinks">PeterDumbari Foundation</Link>
          </div>
          <div className="row">
            <Link className="footerlinks">Terms & Service</Link>
            <Link className="footerlinks"> Privacy Policy</Link>
            <Link className="footerlinks">CA Notice & Collection</Link>
            <Link className="footerlinks">Cookies Setting</Link>
          </div>
          <div className="row">
            <Link className="footerlinks">Accessibility</Link>
            <Link className="footerlinks">Desktop App</Link>
            <Link className="footerlinks">Cookies Policy</Link>
            <Link className="footerlinks">Enterprise Solutiona</Link>
          </div>
        </div>
        <div className="social_media_container">
          <div className="media_container">
            <div className="division_one">
              <span className="division_title">Follow us</span>
              <i className="fa-brands fa-facebook-f icon"></i>
              <i className="fa-brands fa-linkedin-in icon"></i>
              <i className="fa-brands fa-twitter icon"></i>
              <i className="fa-brands fa-youtube icon"></i>
              <i className="fa-brands fa-instagram icon"></i>
            </div>
            <div className="division_two">
              <span className="division_title">Mobile app</span>
              <i className="fa-brands fa-apple icon"></i>
              <i className="fa-brands fa-android icon"></i>
            </div>
          </div>
        </div>
        <hr style={{marginLeft: "5rem", marginRight: "5rem", textAlign: "center"}}></hr>
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <span className="bottom_text">
            © 2022-{currentYear} peterdumbari Global inc
          </span>
        </div>
      </div>
    </div>
  );
}
