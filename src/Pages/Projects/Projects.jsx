import React, { useState } from "react";
import "../Projects/Projects.scss";
import Logo from "../../Images/Tams-Tech.JPG";
import Belka from "../../Images/belkanigeria.JPG";
import Buttons from "../../Components/Buttons/Button";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import MiniButton from "../../Components/MiniButton/MiniButton";

export default function Projects() {
  const [classname, setClassname] = useState("");
  const [classnam, setClassnam] = useState("");

  const mappedProject = [
    {
      id: 0,
      projectPic: `${Logo}`,
      href: "https:tamstechnology.netlify.app"
    
    },
    {
      id: 1,
      projectPic: `${Belka}`,
      href: "https://belkanigeria.herokuapp.com"
    },
  ];
  return (
    <div className="container-fluid project_container">
      <div className={`row project_sample_container`}>      
        
        {mappedProject.map((items) => (
          <div className="row " key={items.id}>
            <div className="row " key={items.id}>
              <div className="col projectcolumn">
                <div className="cardlike">
                  <img src={items.projectPic} alt="Avatar" />
                </div>
                <div className="miniBtn_holder">
                <MiniButton link={items.href}/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/projectsample">
        <Buttons
          title={"VIEW MORE PROJECTS"}
          styLe={"blue"}
          logo={<i className="fa-solid fa-earth-americas"></i>}
          type="button"
        />
      </Link>
    </div>
  );
}
