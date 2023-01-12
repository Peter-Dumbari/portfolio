import React, { useState, useEffect, } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Herosection from "../Herosection/Herosection";
import Projects from "../Projects/Projects";
import Ourqualities from "../Our_qualities/Ourqualities";
import Frequentlyask from "../Frequentlyask/Frequentlyask";
import Biosection from "../Biosection/Biosection";
import "../Home/Home.scss";
import Downstyle from "../Downstyle/Downstyle";
import Footer from "../../Components/Footer/Footer";
import Backtotop from "../../Components/Backtotop/Backtotop";
import Getuscontacted from "../getuscontacted/Getuscontacted";
import Aboutme from "../Aboutmyself/Aboutme";




export default function Home() {



  return (
    <div className="home">
      <Herosection />
      <Projects/>
      <Ourqualities />
      <Frequentlyask />
      <Biosection />
      <Downstyle />
      <Aboutme/>
      <Footer />
      <Getuscontacted/>
      {/* <Backtotop/> */}
    </div>
  );
}
