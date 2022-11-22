import React from 'react';
import Button from '../../Components/Buttons/Button';
import "../Downstyle/Downstyle.scss";


export default function Downstyle() {
  return (
    <div className='container-fluid downstyle_container'>
        <div className="container downstyle_box">
            <h1>Like what you see?</h1>
            <h5>Let's talk and see if it makes sense to
                <br/> work together!</h5>
                <Button title={"START A WEBFLOW PROJECT"} styLe="blue" ariacontrol="offcanvasRight" datatarget="#offcanvasRight" datatoggle="offcanvas" logo={<i className="fa-solid fa-earth-americas"></i>} type="button"/>
        </div>
    </div>
  )
}
