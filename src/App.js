import React, { useState, useEffect } from "react";
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
function App() {
  const [projects, setProjects] = useState([]);

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
    getProjects();
  }, [projects]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projectsample"
          element={<Projectsamples projects={projects} loading={isLoading} />}
        />
        <Route path="/teams" element={<Teams />} />
        <Route path="/upload" element={<Myform />} />
      </Routes>
    </Router>
  );
}

export default App;
