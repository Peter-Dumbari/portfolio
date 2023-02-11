import React from 'react';
import "../ProjectSamples/Projectsamples.scss";
import Mainproject from './MainProject/Mainproject';

export default function Projectsamples({projects,loading,eror}) {
  return (
    <div className='project_sample'>
      <div className="projection_header">
          <h1>OUR QUICK DELIVERED PRODUCTIONS</h1>
          <h6>using Vanila Javascript, ReactJs, Bootstrap, Firebase and Django</h6>
      </div>
      <div className="container projects">
        <Mainproject projects={projects} loading={loading} eror={eror}/>
      </div>
    </div>
  )
}
