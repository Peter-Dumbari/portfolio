import React from "react";
import "../Frequentlyask/Frequentlyask.scss";

export default function Frequentlyask() {
  return (
    <div className="container freqently_container">
      <h1>Frequently Asked Questions
</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne">
              How much do projects cost?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            Our pricing is based on a few factors such as project complexity, deadline, and animations. Our minimum engagement fee is $1,500 USD. Please contact us and tell us more about your project so we can give you a quote.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo">
              Do you do SEO?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            We set up basic SEO settings for every website for FREE. Comprehensive SEO will soon be available as a service.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree">
              Who are your ideal customers?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            We work with all types of businesses, but most of our clients are in Web3 and SaaS
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour">
              Do you design as well?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            We don't offer design as a service in-house, but we do work with UI/UX freelancers who can create the design and we'll implement it into Webflow.
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
