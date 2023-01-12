import React, {useState} from 'react';
import "../Our_qualities/Ourqualities.scss";
import Qbuttons from './QualitiesButtons/Qbuttons';
import { Waypoint } from 'react-waypoint';

export default function Ourqualities() {

  const [classname, setClassname] =useState("")
  const [classnam, setClassnam]=useState("")
  return (
    <div className='container qualities_container'>
        <h1 className="qualities_header">Why you need us?</h1>
        <Waypoint
                  onEnter={() =>
                    setClassname("animate__animated animate__fadeInRight")
                  }
                  onLeave={() => setClassname("invisible")}
                  topOffset="-50%"
                  bottomOffset="50px"
                />
                <Waypoint
                  onEnter={() =>
                    setClassnam("animate__animated animate__fadeInLeft")
                  }
                  onLeave={() => setClassnam("invisible")}
                  topOffset="-50%"
                  bottomOffset="50px"
                />
        <div className={`d-inline-flex butons ${classname}`}>
            <Qbuttons text={"FAST TURNAROUND"}/>
            <Qbuttons text={"ADVANCED ANIMATIONS"}/>
            <Qbuttons text={"FREE SEO SETUP"}/>
            <Qbuttons text={"LIGHTNING-FAST WEBSITE"}/>
        </div>
        <div className={`d-inline-flex qualities ${classnam}`}>
            <Qbuttons text={"RESPONSIVE DESIGN"}/>
            <Qbuttons text={"PIXEL-PERFECT"}/>
            <Qbuttons text={"WEB3 READY"}/>
        </div>
    </div>
  )
}
