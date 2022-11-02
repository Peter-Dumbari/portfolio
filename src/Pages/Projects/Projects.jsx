import React from "react";
import "../Projects/Projects.scss";
import Logo from "../../Images/Tams-Tech.JPG"
import Buttons from "../../Components/Buttons/Button"
  

export default function Projects() {
  return (
    <div className="container-fluid project_container">
      <h3 className="project_header"> Sample of our Jobs</h3>
      <div className="row project_sample_container">
        <div className="col-6">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={Logo}
                  alt="Avatar"
                  style={{width:"100%", height:"400px"}}
                />
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={Logo}
                  alt="Avatar"
                  style={{width:"100%", height:"400px"}}
                />
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Buttons title={"GET YOUR STANDARD WEBSITE"} styLe={'blue'} logo={<i className="fa-solid fa-earth-americas"></i>}/>
    </div>
  );
}
