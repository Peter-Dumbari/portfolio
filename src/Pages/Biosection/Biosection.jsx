import React, {useState} from 'react'
import  "../Biosection/Biosection.scss";
import { Waypoint } from 'react-waypoint';


export default function Biosection() {
  const [classname, setClassname] =useState("")
  const [classnam, setClassnam]=useState("")


  return (
    <div className='container-fluid biosection_container'>
      <Waypoint
                  onEnter={() =>
                    setClassname("animate__animated animate__fadeInBottomRight")
                  }
                  onLeave={() => setClassname("invisible")}
                  topOffset="-30%"
                  bottomOffset="30px"
                />
        <div className={`bio_data_box container ${classname}`}>
            <h2>Webflow websites that are SEO & Pagespeed optimized.<br/> Within 7 days.</h2>
        </div>
    </div>
  )
}
