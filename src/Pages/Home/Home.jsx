import React, { useState } from "react";
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

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <div className="home">
      <Navbar show={show} setShow={setShow} />
      <Herosection show={show} />
      <Projects />
      <Ourqualities />
      <Frequentlyask />
      <Biosection />
      <Downstyle />
      <Footer />
      <Getuscontacted/>
      {show &&
        <div className="search_container animate__animated animate__bounceInRight">
          <input className="form-control" type="search" placeholder="Search" />
        </div>
      }
      <Backtotop/>

    </div>
  );
}
