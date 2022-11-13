import React from "react";
import "../MainProject/Mainproject.scss";
import Logo from "../../../Images/Tams-Tech.JPG";
import Belka from "../../../Images/belkanigeria.JPG";
import Calculator from "../../../Images/calculatorimage.JPG"

export default function Mainproject() {
  const mappedProject = [
    {
      id: 0,
      projectPic: `${Logo}`,
      projectTool: "Build with Vanila-Javascript",
      projectStatus: "Incomplete",
      projectDate: "2022",
      href: "https://tamstechnology.netlify.app/"
      
    },
    {
      id: 1,
      projectPic: `${Belka}`,
      projectTool: "Build with Reactjs",
      projectStatus: "Incomplete",
      projectDate: "2022",
      href: "https://belkanigeria.herokuapp.com/"
    },
    {
      id: 2,
      projectPic: `${Calculator}`,
      projectTool: "Build with Reactjs",
      projectStatus: "complete",
      projectDate: "2022",
      href: "https://lazkcalculator.netlify.app/"
    },
  ];

  return (
    <div className="row">
      {mappedProject.map((project) => (
        <div className="col-md-4" key={project.id}>
          <a href={project.href} className="ataglink">
            <div className="card project_card">
              <img
                src={project.projectPic}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <span className="projecttool">{project.projectTool}</span>
                <br />
                <span className="projectstatus">{project.projectStatus}</span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
