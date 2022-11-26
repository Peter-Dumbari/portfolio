import React from "react";
import "../Projects/Projects.scss";
import Logo from "../../Images/Tams-Tech.JPG"
import Belka from "../../Images/belkanigeria.JPG"
import Buttons from "../../Components/Buttons/Button";
import { Link } from "react-router-dom";
  

export default function Projects() {

  const mappedProject = [
    {id : 0, projectPic: `${Logo}`, projectName: "Tams-Technology", projectDesc: "This is company site", projectStatus: "Incomplete", projectDate: "2022"},
    {id : 1, projectPic: `${Belka}`, projectName: "Belka Nigeria", projectDesc: "This also a company site", projectStatus: "Incomplete", projectDate: "2022"}
  ]
  return (
    <div className="container-fluid project_container">
      <h3 className="project_header"> Sample of our Jobs</h3>
      <div className="row project_sample_container">
        {
          mappedProject.map((items)=>
            <div className="col-md-6" key={items.id}>
               <div className="cardlike">
                <img
                  src={items.projectPic}
                  alt="Avatar"
                />
              </div>
        </div>
          )
        }
      </div>
      <Link to="/projectsample">
      <Buttons title={"VIEW MORE PROJECTS"} styLe={'blue'} logo={<i className="fa-solid fa-earth-americas"></i>} type="button"/>
      </Link>
    </div>
  );
}
