import React, { useRef, useState } from "react";
import "../getuscontacted/Getuscontacted.scss";
import Button from "../../Components/Buttons/Button";
import { useEffect } from "react";
import { db } from "../../Firebase_configuration";
import { collection, addDoc } from "firebase/firestore";
import Toast from "../../Components/Toasts/Toast";
import { createContext } from "react";
import { toast } from "react-toastify";
import axios from 'axios';

export const showContext = createContext();


export default function Getuscontacted() {
  const [siteName, setSiteName] = useState("");
  const [email, setEmail] = useState("");
  const [amountRange, setAmountRange] = useState(0);
  const [designLink, setDesignLink] = useState("");
  const [projectSummary, setProjectSummary] = useState("");
  const [alert, setAlert] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [alerter, setAlerter] = useState(false);

  const clientsRef = collection(db, "Clients");
  const date = new Date().toISOString().slice(0, 10)

  const data = {
    siteName: siteName,
    Email: email,
    AmountRange: amountRange,
    DesignLink: designLink,
    Projecsummary: projectSummary,
    Date: date
  }

  const handleSubmit =async(e) => {
    setIsLoading(true);
    e.preventDefault();

    await axios.post("https://portfolio-dc49e-default-rtdb.firebaseio.com/.json", data)
    .then(res =>{
        console.log(res)
        if(res.status === 200){
          toast.success("We have successfully received your message, we reach you sooner!")
        }
    }).catch(err =>{
        toast.error(err)
    }).finally(
      setIsLoading(false)
    )
     
      setSiteName("");
      setEmail("");
      setAmountRange("");
      setDesignLink("");
      setProjectSummary("");
  };
  return (
    <showContext.Provider value={setAlerter}>
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
            Got a project in mind? Fill in the form or send us an email and
            we’ll get back to you right away!
          </h6>

          <form
            onSubmit={handleSubmit}
            className="getuscontactedforms form-group">
            <label htmlFor="Name">YOUR NAME <span className="asteris">*</span></label>
            <br />
            <input
              type="text"
              placeholder="Peter Dumbari"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="Email">YOUR EMAIL <span className="asteris">*</span></label>
            <br />
            <input
              type="email"
              placeholder="testing@peters.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label htmlFor="Budget">WHAT IS YOUR BUDGET (₦)? <span className="asteris">*</span></label>
            <br />
            <select
              name="your budget"
              value={amountRange}
              onChange={(e) => setAmountRange(e.target.value)}
              required>
              <option value="none" hidden >Select an Option</option>
              <option value="N500k - N1m">N500k - N1m</option>
              <option value="N300k -N400k">N300k -N400k</option>
              <option value="N100k - N200k">N100k - N200k</option>
            </select>
            <br />
            <label htmlFor="design link">DESIGN LINK (FIGMA,Xd..)<span className="asteris">*</span></label>
            <br />
            <input
              type="url"
              placeholder="http://figma.com/your-design-link"
              value={designLink}
              onChange={(e) => setDesignLink(e.target.value)}
              required
            />
            <br />
            <label htmlFor="project description">PROJECT SUMMARY <span className="asteris">*</span></label>
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              placeholder="Please tell us a bit about the project"
              value={projectSummary}
              onChange={(e) => setProjectSummary(e.target.value)}
              required></textarea>
            <br />
            <Button
              disable={isLoading}
              title={isLoading ? "Loading " : "SUBMIT YOUR REQUEST"}
              logo={
                isLoading && <i className="fa fa-circle-o-notch fa-spin"></i>
              }
              styLe="blue"
            />
          </form>
          {alerter && <Toast show={alerter} />}
        </div>
      </div>
    </showContext.Provider>
  );
}
