import React, { useState } from "react";
import { Waypoint } from "react-waypoint"; 
import "../MiniButton/MiniButton.scss";

export default function MiniButton({link}) {

    const [classname, setClassname] = useState("");

  return (
    <>
      <Waypoint
        onEnter={() => setClassname("animate__animated animate__fadeInBottomRight")}
        onLeave={() => setClassname("invisible")}
        topOffset="-10%"
        bottomOffset="10px"
      />

    <a href={link}>
     <div className={`link_arrow ${classname}`}>
        <i class="fa-solid fa-arrow-down"></i>
      </div>
    </a>
      
    </>
  );
}
