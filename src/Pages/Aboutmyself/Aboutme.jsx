import React from "react";
import "../Aboutmyself/Aboutme.scss";
import Sample from "../../Images/programmersample.webp";

export default function Aboutme() {
  return (
    <div className="container aboutme_container">
      <div className="row">
        <div className="col-md-8 description_box">
          <h1>Meet Peterz</h1>
          <p>For 15 years, I’ve been hard at work founding, growing, and selling delightful digital products that are used and loved by hundreds of thousands of creators across the web.</p>

          <p>As a seasoned designer, I’m passionate about solving complex problems with pixels by combining research, clever technology, and thoughtful design. As a principal engineer, I’m passionate about leading teams, leveling-up coworkers, and curating a culture of quality that breathes life into products and consistently drives results.</p>

          <p>With this formula, I’ve launched and grown multiple projects from ground zero to over a million dollars in revenue before, ultimately, being acquired.</p>

          <p>Right now, I’m working as a Principal Software Engineer at WP Engine, leading the effort to revolutionize WordPress with industry-leading design and dev tools. I’m also working on the Liftoff Course, an effort to share everything I’ve learned about creating and selling successful digital products.</p>
        </div>
      </div>
      <div className="col-md-4 image_box">
        <img src={Sample} alt="" />
      </div>
    </div>
  );
}
