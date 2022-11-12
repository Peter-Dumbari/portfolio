import React, { useState } from "react";
import Home from "./Pages/Home/Home";
import Projectsamples from "./Pages/ProjectSamples/Projectsamples";
import Teams from "./Pages/Teams/Teams";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "animate.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectsample" element={<Projectsamples />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </Router>
  );
}

export default App;
