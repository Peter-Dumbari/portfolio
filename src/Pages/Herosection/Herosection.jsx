import React from 'react';
import Button from '../../Components/Buttons/Button';
import "../Herosection/Herosection.scss";

export default function Herosection() {
  return (
    <div className='container-fluid hero_container'>
        <div className="row hero_container_row1">
            <div className="col-md-5">
                <h6 className="1st_text">
                    WEBFLOW DEVELOPMENT
                </h6>

                <h1 className="2nd_text">
                    I build profitable <br/>
                    Webflow websites
                </h1>

                <h4 className="3rd_text">
                Leveraging Webflow to craft optimized, responsive and profitable websites. In days.
                </h4>

                <Button title={'OWN A WEBFLOW PROJECT'} styLe="blue"/>
            </div>
            <div className="col-md-7"></div>
        </div>
    </div>
  )
}
