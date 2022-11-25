import React, { useRef, useState } from "react";
import "../getuscontacted/Getuscontacted.scss";
import Button from "../../Components/Buttons/Button";



export default function Getuscontacted() {
  const namevalue = useRef(null)
  const emailvalue = useRef(null)
  const [name, setName] =  useState("")
  const [email, setEmail] =  useState("")
  const [isLoading, setIsLoading] =  useState(false)


 
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 5000)
    timeout()
  } 
  return (
    <div
      className="offcanvas offcanvas-end offcanvas_getuscontacted"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <button
          type="button"
          className="btn-close getuscontact_close_button"
          data-bs-dismiss="offcanvas"
          aria-label="close"></button>
      </div>
      <div className="offcanvas-body">
        <h1>Let's talk!</h1>
        <h5>We are ready to help you.</h5>
        <h6>
          Got a project in mind? Fill in the form or send us an email and we’ll
          get back to you right away!
        </h6>

        <form className="getuscontactedforms form-group" onSubmit={handleSubmit}>
          <label htmlFor="Name">YOUR NAME*</label>
          <br />
          <input type="text" placeholder="Peter Dumbari" ref={namevalue} onChange={(e)=>setName(e.target.value)} value={name} required/>
          <br />
          <label htmlFor="Email">YOUR EMAIL*</label>
          <br />
          <input type="email" placeholder="testing@peters.com" ref={emailvalue} onChange={(e)=>setEmail(e.target.value)} value={email} required/>
          <br />
          <label htmlFor="Budget">WHAT IS YOUR BUDGET (₦)?*</label>
          <br />
          <select name="your budget" id="" required>
            <option value="N500k - N1m">N500k - N1m</option>
            <option value="N300k -N400k">N300k -N400k</option>
            <option value="N100k - N200k">N100k - N200k</option>
          </select>
          <br />
          <label htmlFor="design link">DESIGN LINK (FIGMA,Xd..)*</label>
          <br />
          <input type="text" placeholder="figma.com/your-design-link" required/>
          <br />
          <label htmlFor="project description">PROJECT SUMMARY*</label>
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="Please tell us a bit about the project" required></textarea>
          <br />
         
          <Button disable={isLoading} title={ isLoading? 'Loading...':'SUBMIT YOUR REQUEST'} logo={ isLoading && <i className="fa fa-circle-o-notch fa-spin"></i>} styLe="blue" type="submit"/>
        </form>
      </div>
    </div>
  );
}
