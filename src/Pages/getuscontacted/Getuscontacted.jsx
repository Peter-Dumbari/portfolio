import React from "react";
import "../getuscontacted/Getuscontacted.scss";
import Button from "../../Components/Buttons/Button";

export default function Getuscontacted() {
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
        <h5>Got a project in mind? Fill in the form or send us an email and we’ll get back to you right away!</h5>

        <form  className="getuscontactedforms form-group">
          <label htmlFor="Name">YOUR NAME</label><br />
          <input type="text" /><br />
          <label htmlFor="Name">YOUR EMAIL</label><br />
          <input type="text" /><br />
          <label htmlFor="Name">WHAT IS YOUR BUDGET (N)</label><br />
          <select name="your budget" id="">
            <option value="N500k">N500k</option>
            <option value="N300k">N300k</option>
            <option value="N200k">N200k</option>
          </select><br />
          <label htmlFor="Name">DESIGN LINK (FIGMA,Xd..)</label><br />
          <input type="text" /><br />
          <label htmlFor="Name">PROJECT SUMMARY*</label><br />
          <textarea name="" id="" cols="30" rows="10"></textarea><br />
          <div class="g-recaptcha" data-sitekey="6LcaDOEcAAAAAMMMjj-8-BQorfN6X5DJIScfRuFz"></div>
          <button class="g-recaptcha" data-sitekey="reCAPTCHA_site_key" data-callback='onSubmit'data-action='submit'>Submit</button><br />
          <Button title="SUBMIT YOUR REQUEST" styLe="blue"/>
        </form>
      </div>
    </div>
  );
}
