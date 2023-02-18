import React, { useState, useEffect, Suspense, lazy } from "react";
import Home from "./Pages/Home/Home";
// import Projectsamples from "./Pages/ProjectSamples/Projectsamples";
// import Teams from "./Pages/Teams/Teams";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "animate.css";
import Navbar from "./Components/Navbar/Navbar";
import Myform from "./Pages/Myform/Myform";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase_configuration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Components/Loader/Loader";
function App() {
  const [projects, setProjects] = useState([]);
  const [eror, setErr] = useState("");

  const CurriculumVitae = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(
          () => resolve(import("./Pages/Teams/Teams")),
          1000 // Set timeout in milliseconds
        )
      )
  );
  const ProjectComponent = lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(import("./Pages/ProjectSamples/Projectsamples"));
        });
      })
  );
  const projectCollectionRef = collection(db, "Projects");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      const projectDatas = await getDocs(projectCollectionRef);
      setIsLoading(false);
      setProjects(
        projectDatas.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getProjects()
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setErr("Something went wrong");
      });
  }, [projects]);

  return (
    <Router>
      <Navbar />
      <ToastContainer position="top-center" theme="dark" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/projectsample"
          element={
            <Suspense fallback={<Loader />}>
              <ProjectComponent
                projects={projects}
                loading={isLoading}
                eror={eror}
              />
            </Suspense>
          }
        />
        <Route
          path="/teams"
          element={
            <Suspense fallback={<Loader />}>
              <CurriculumVitae />
            </Suspense>
          }
        />
        <Route path="/upload" element={<Myform />} />
      </Routes>
    </Router>
  );
}

export default App;
