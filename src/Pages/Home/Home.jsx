import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Herosection from "../Herosection/Herosection";
import Projects from "../Projects/Projects";
import Ourqualities from "../Our_qualities/Ourqualities";
import Frequentlyask from "../Frequentlyask/Frequentlyask";
import Biosection from "../Biosection/Biosection";
import "../Home/Home.scss";
import Downstyle from "../Downstyle/Downstyle";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Herosection />
      <Projects/>
      <Ourqualities/>
      <Frequentlyask/>
      <Biosection/>
      <Downstyle/>
      <Footer/>
      <div className="backtopcontainer">
      <i className="fa-solid fa-arrow-up"></i> 
      <p className="back_to_top_text">Top</p>     
      </div>
    </div>
  );
}
