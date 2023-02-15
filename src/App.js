import React, { useState, useEffect, Suspense, lazy } from "react";
import Home from "./Pages/Home/Home";
import Projectsamples from "./Pages/ProjectSamples/Projectsamples";
import Teams from "./Pages/Teams/Teams";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "animate.css";
import Navbar from "./Components/Navbar/Navbar";
import Myform from "./Pages/Myform/Myform";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase_configuration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [projects, setProjects] = useState([]);
  const [eror, setErr] = useState("");

  const About = lazy(() => import(Projectsamples));

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
            <Projectsamples
              projects={projects}
              loading={isLoading}
              eror={eror}
            />
          }
        />
        <Route path="/teams" element={<Teams />} />
        <Route path="/upload" element={<Myform />} />
      </Routes>
    </Router>
  );
}

export default App;
