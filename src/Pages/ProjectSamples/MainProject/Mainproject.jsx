import React from "react";
import Emptyproject from "../Emptyproject/Emptyproject";
import "../MainProject/Mainproject.scss";
import Loader from "../../../Components/Loader/Loader";

export default function Mainproject({ projects, loading }) {
  return (
    <div className="row">
      <div id="follower">
        <div id="circle1"></div>
        <div id="circle2"></div>
      </div>
      {loading ? (
        <Loader />
      ) : projects.length === 0 ? (
        <Emptyproject />
      ) : (
        projects.map((project) => (
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
        ))
      )}
    </div>
  );
}
