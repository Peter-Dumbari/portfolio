import React, { useEffect } from 'react';
import Button from '../../Components/Buttons/Button';
import "../Herosection/Herosection.scss";
import Image from "../../Images/hero_background.svg"

export default function Herosection({show}) {

    

  return (
    <div className='container-fluid hero_container'>
        <div className="row hero_container_row1">
            <div className="col-12 col-md-6">
                <h6 className="first_text">
                    WEBFLOW DEVELOPMENT
                </h6>

                <h2 className="second_text">
                    We build Profitable <br/>
                    Webflow Websites.
                </h2>

                <h5 className="third_text">
                Leveraging Webflow to craft optimized, responsive and  <br/> profitable websites. In days.
                </h5>

                <Button title={'GET YOUR SMART WEBSITE'} styLe="blue" ariacontrol="offcanvasRight" datatarget="#offcanvasRight" datatoggle="offcanvas" logo={<i className="fa-solid fa-earth-americas"></i>}/>

                <div className='briefing'>
                    <div className="d-inline-flex listing">
                        <span><i className="fa-regular fa-circle-check"></i> Fast turnaround</span>
                        <span> <i className="fa-regular fa-circle-check"></i> SEO & Pagespeed optimized</span>
                    </div>
                    <div className="d-inline-flex listing">
                        <span><i className="fa-regular fa-circle-check"></i> CMS-Friendly</span>
                        <span><i className="fa-regular fa-circle-check"></i> Advanced Animations</span>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6"><img className='animate__animated animate__zoomIn' src={Image} alt="" /></div>
        </div>
    </div>
  )
}
