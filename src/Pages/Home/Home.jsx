import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Herosection from "../Herosection/Herosection";
import Projects from "../Projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Projects/>
    </>
  );
}
