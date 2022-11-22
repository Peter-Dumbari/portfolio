import React from "react";
import Emptyproject from "../Emptyproject/Emptyproject";
import "../MainProject/Mainproject.scss";


export default function Mainproject({projects,loading}) {
  return (
    <div className="row">
      
      {loading? "Loading..." :  projects.length === 0 ? <Emptyproject/> : projects.map((project) => (
        <div className="col-md-4" key={project.id}>
          <a href={project.Projecthref} className="ataglink">
            <div className="card project_card">
              <img
                src={project.Projectimage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <span className="projecttool">{project.Projecttools}</span>
                <br />
                <span className="projectstatus">{project.ProjectStatus}</span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
