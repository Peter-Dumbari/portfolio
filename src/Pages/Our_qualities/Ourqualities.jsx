import React from 'react';
import "../Our_qualities/Ourqualities.scss";
import Qbuttons from './QualitiesButtons/Qbuttons';

export default function Ourqualities() {
  return (
    <div className='container qualities_container'>
        <h1 className="qualities_header">Why you need us?</h1>
        <div className="d-inline-flex">
            <Qbuttons text={"FAST TURNAROUND"}/>
            <Qbuttons text={"ADVANCED ANIMATIONS"}/>
            <Qbuttons text={"FREE SEO SETUP"}/>
            <Qbuttons text={"LIGHTNING-FAST WEBSITE"}/>
        </div>
        <div className="d-inline-flex">
            <Qbuttons text={"RESPONSIVE DESIGN"}/>
            <Qbuttons text={"PIXEL-PERFECT"}/>
            <Qbuttons text={"WEB3 READY"}/>
        </div>
    </div>
  )
}
