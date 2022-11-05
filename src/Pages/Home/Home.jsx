import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Herosection from "../Herosection/Herosection";
import Projects from "../Projects/Projects";
import Ourqualities from "../Our_qualities/Ourqualities";
import Frequentlyask from "../Frequentlyask/Frequentlyask";
import "../Home/Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Herosection />
      <Projects/>
      <Ourqualities/>
      <Frequentlyask/>
    </div>
  );
}
