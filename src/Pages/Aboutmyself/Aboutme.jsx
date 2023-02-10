import React, { useState } from "react";
import "../Aboutmyself/Aboutme.scss";
import Sample from "../../Images/mypicture.png";
import { Waypoint } from "react-waypoint";

export default function Aboutme() {
  const [classname, setClassname] = useState("");
  const [classnam, setClassnam] = useState("");
  return (
    <div className="container aboutme_container">
      <div className="row">
        <Waypoint
          onEnter={() =>
            setClassname("animate__animated animate__lightSpeedInLeft")
          }
          topOffset="-50px"
          bottomOffset="10%"
        />
        <Waypoint
          onEnter={() =>
            setClassnam("animate__animated animate__lightSpeedInRight")
          }
          topOffset="-50px"
          bottomOffset="10%"
        />
        <div className={`col-md-8 description_box ${classname}`}>
          <h1>Meet Peterz</h1>

          <p>
            As a frontend developer, I’m passionate about solving complex
            problems with Reactjs by combining research, clever technology, and
            thoughtful design. As a principal engineer, I’m passionate about
            leading teams, leveling-up coworkers, and curating a culture of
            quality that breathes life into products and consistently drives
            results.
          </p>

          <p>
            With this formula, I’ve launched and grown multiple projects from
            ground zero to over a million dollars in revenue before, ultimately,
            being acquired.
          </p>

          <p>
            Right now, I’m working as a Principal Software Engineer at
            Tams-Technology, leading the effort to revolutionize webdevelopment
            with industry-leading design and dev tools. I’m also working as a
            free lancer.
          </p>
        </div>
      </div>
      <div className={`col-md-4 image_box ${classnam}`}>
        <img src={Sample} alt="" />
      </div>
    </div>
  );
}
