import React, { useState } from "react";
import "../Myform/Myform.scss";
import Button from "../../Components/Buttons/Button";
import { db } from "../../Firebase_configuration";
import { collection, addDoc } from "firebase/firestore";

export default function Myform() {
  const [projectName, setProjectName] = useState("");
  const [projectStatus, setProjectStatus] = useState("");
  const [projectYear, setProjectYear] = useState("");
  const [projectTools, setProjectTools] = useState("");
  const [projectHref, setProjectHref] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [isLoading, setIsLoading]= useState(false)

  const projectCollectionRef = collection(db, "Projects");
  // handleSubmitconst storageRef = ref(storage,file.name);
  // const uploadTask = uploadBytesResumable(storageRef, file);
  // const storageRef = ref(storage,file.name);
  // const uploadTask = uploadBytesResumable(storageRef, file);

  const handleSubmit = (e) => {
    setIsLoading(true)
    e.preventDefault();
    addDoc(projectCollectionRef, {
      ProjectName: projectName,
      ProjectStatus: projectStatus,
      Projectyear: projectYear,
      Projecttools: projectTools,
      Projecthref: projectHref,
      Projectimage: projectImage,
    }
    );
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 5000)
    timeout()
  };

  return (
    <div className="container-fluid upload_container">
      <h1>PROJECT UPLOADER</h1>
      <div className="container inner_upload_container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Project Name"
            className="form-control"
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
          <select
            name="Project Status"
            placeholder="Project Status"
            required
            onChange={(e) => setProjectStatus(e.target.value)}>
            <option defaultvalue="Empty" disabled selected hidden>
              Project Status
            </option>
            <option value="complete">Complete</option>
            <option value="Incomplete">Incomplete</option>
          </select>
          <input
            type="number"
            placeholder="Project year"
            className="form-control"
            onChange={(e) => setProjectYear(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Project Stools"
            className="form-control"
            onChange={(e) => setProjectTools(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Project href"
            className="form-control"
            onChange={(e) => setProjectHref(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Project Image url"
            className="form-control"
            onChange={(e) => setProjectImage(e.target.value)}
            required
          />
          <Button title={`${isLoading? 'Loading': "Upload Project"}`} />
          {
          isLoading &&
        <div className="loader_container">
            <div class="loader"></div>        
        </div>
        }
        
        </form>
        
      </div>
    </div>
  );
}
