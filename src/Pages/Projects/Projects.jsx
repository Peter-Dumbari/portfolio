import React from "react";
import "../Projects/Projects.scss";
import Logo from "../../Images/Tams-Tech.JPG"
import Belka from "../../Images/belkanigeria.JPG"
import Buttons from "../../Components/Buttons/Button"
  

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
            <div className="col-6" key={items.id}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={items.projectPic}
                  alt="Avatar"
                  style={{width:"100%", height:"400px"}}
                />
              </div>
              <div className="flip-card-back">
                <h4>{items.projectName}</h4>
                <h6>Description: {items.projectDesc}</h6>
                <h6>Status: {items.projectStatus}</h6>
                <h6>Year: {items.projectDate}</h6>

               <Buttons title="view site" styLe="blue"/> 
              </div>
            </div>
          </div>
        </div>
          )
        }
      </div>
      <Buttons title={"VIEW MORE PROJECTS"} styLe={'blue'} logo={<i className="fa-solid fa-earth-americas"></i>} type="button"/>
    </div>
  );
}
