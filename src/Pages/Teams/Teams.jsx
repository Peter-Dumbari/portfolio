import React from "react";
import "../Teams/Teams.scss";
import { Link } from "react-router-dom";
import image from "../../Images/emptypage.png";
import Backtotop from "../../Components/Backtotop/Backtotop";
import chatIcon from "../../Images/wheel-icon.png"
import { Waypoint } from 'react-waypoint';




export default function Teams() {
  const [classname, setClassname] =React.useState("")
  const [classnam, setClassnam]=React.useState("")


  const sideHeaders = [
    { key: 0, name: "NAME", detailInfo: "Peter Dumbari", link: null,  },
    { key: 0, name: "FOCUS", detailInfo: "Software Development", link: null, },
    { key: 0, name: "SAY HELLO", detailInfo: null, link: "https://mail.google.com/", linkname: "dummytwiz@gmail.com"},
    { key: 0, name: "CONNECT", detailInfo: null, link: "https://linkedin.com/in/peter-kinz-enterprise08",linkname:"linkedin.com/in/peterkinz-enterprise08"},
  ];
  return (
    <div>
       <Waypoint
          onEnter={() =>
            setClassname("animate__animated animate__fadeInUp")
          }
          topOffset="1px"
          bottomOffset="100%"
        />
        <Waypoint
          onEnter={() =>
            setClassnam("animate__animated animate__fadeInUp")
          }
          topOffset="-50px"
          bottomOffset="10%"
        />
      <div className=" wraper">
        <div className="col-4 sideHeader">
          <header className="sideHeaderItems">
            {sideHeaders.map(({ key, name, detailInfo,link, linkname }) => (
              <div className="info" key={key}>
                <span className="label">{name}</span><br/>
                {detailInfo && <h5 className="info_detail">{detailInfo}</h5>}
                {link && <a className="link" href={link}>{linkname}</a>}
              </div>
            ))}

            <div className="chat_section">
              <img src={chatIcon} alt=""  className="chatIcon"/><br/>
              <a className="chatText link" href="https://wa.me/08052027785">Let's Chat</a>
            </div>
          </header>
        </div>
        <div className="col-8 main">
          <div className="row">
            <div className="col-6 bigger_column">
              <div className={`info_box ${classname}`}>
                <h3 className="experience_header">ABOUT</h3>
                <p>
                  I aspire to be a mentally stable Bruce Wayne, or a humble Tony
                  Stark; to become a hero in my own right by using my “super”
                  knowledge and skills to create technology that improve lives.
                </p>
                <p>
                  I love to learn. I take every opportunity to add to my
                  “Utility Belt” by researching new technologies and
                  manufacturing methods. Equally, I love to teach. When the
                  “robins” in my family want to build a self-driving car, or an
                  elevator, I will stealthily appear. I gladly fed their
                  curiosity by showing them the basics of sensors, actuators,
                  programming and fabrication.
                </p>
                <p>
                  My ultimate purpose is to become a professional engineer, and
                  leave innovative technology and knowledge for the future
                  generations to inherit.
                </p>
                <p>
                  I am an experienced Machinist with a demonstrated history of
                  working in the mechanical engineering industry. Skilled in
                  SolidWorks, mechatronics design and real time embedded
                  systems. Strong operations professional with a Bachelor of
                  Applied Science - BASc focused in Mechatronic Systems
                  Engineering from Simon Fraser University.
                </p>
              </div>
              <div className={`info_box experience_container ${classname}`}>
                <h3 className="experience_header">EXPERIENCE</h3>
                <ul className="timeline_list">
                  <li className="li">
                    <h3>
                      Software Developer/Tams-Technology
                    </h3>
                    <div className="year absolute">2021 - Current</div>
                  </li>
                  <li className="li">
                    <h3>
                      <strong>Manager/</strong>Gifty-Computer
                    </h3>
                    <div className="year absolute">2018 - 2020</div>
                    <ul className="bullet_list">
                      <li>
                        Efficiently machined parts on manual and CNC machines
                        within tight tolerances.
                      </li>
                      <li>
                        Utilized Solidworks and Gibbs CAM to design and
                        machinecomplex core boxes.
                      </li>
                      <li>
                        Assisted in redesigning and restoring the gating systems
                        of casting patterns to improve manufacturing efficiency.
                      </li>
                    </ul>
                  </li>
                  <li className="li">
                    <h3>
                      Intend/Gigasec Portharcourt
                    </h3>
                    <div className="year absolute">2022</div>
                    <ul className="bullet_list">
                      <li>
                        Designed and fabricated jigs to increase the Quality
                        Control efficiency.
                      </li>
                      <li>
                        Created drawings and models in Solidworks employing GD&T
                        conventions.
                      </li>
                      <li>
                        Assembled and routed Electrical wiring and Pneumatics in
                        Electromechanical Systems.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="info_box experience_container">
                <h3 className="experience_header">PROJECTS</h3>
                <ul className="timeline_list">
                  <li className="li">
                    <h3>
                      Gigamoni/Gigasec PH
                    </h3>
                    <div className="year absolute">2022</div>
                    <ul className="bullet_list">
                      <li>
                        Collaborated with a team of Computer Science and
                        Engineering Students to build a Company website which
                        incorporates for loan management system.
                      </li>
                      <li>
                        Work as a Frontend developer with other teams members
                      </li>
                      <li>
                        Programmed various microcontrollers and embedded linux
                        SoCs, including Arduinos, Tiva C Launchpad, and the RPi.
                      </li>
                    </ul>
                  </li>
                  <li className="li">
                    <h3>
                      Belka Nigeria/Free lanced Job
                    </h3>
                    <div className="year absolute">2022</div>
                    <ul className="bullet_list">
                      <li>
                        Collaborated with a team of Computer Science and
                        Engineering Students to build an admin management site.
                      </li>
                      <li>
                        Worked as a Frontend developer with other teams members
                      </li>
                    </ul>
                  </li>
                  <li className="li">
                    <h3>
                      Lazksports/Personal Project
                    </h3>
                    <div className="year absolute">2022</div>
                    <ul className="bullet_list">
                      <li>
                        Lazksport is actually one of my personal projects, it is
                        actually a fullstack site, build without the support of
                        anyone
                      </li>
                      <li>Worked as a Full-stack developer</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 smaller_column ">
              <div className={`info_box ${classname}`}>
                <h3 className="experience_header">EDUCATION</h3>
                <h5>
                  Senior Schools Certificate/CSS
                  Lorre
                </h5>
                <div className="year">2011-2017</div>
                <p>
                  Acquired a strong foundation in mechanical, electronics,
                  control, software and computer engineering. Gained work
                  experience at Kodak Canada ULC. and Dhiman Industries Ltd.,
                  via the co-op program
                </p>
              </div>
              <div className="info_box">
                <h3 className="experience_header">TECHNICAL</h3>
                <h5>
                  Software Development/Mentorship
                </h5>
                <div className="year">2021</div>
                <ul className="blocklist">
                  <li><div className="text">Programming: </div><ul>
                    <li>Javascript</li><li>React</li><li>React Native</li><li>Django</li></ul></li>
                </ul>
                <h5>
                  Graphic Designing/Mentorship
                </h5>
                <div className="year">2019</div>
                <p>
                  Acquired a strong foundation in mechanical, electronics,
                  control, software and computer engineering. Gained work
                  experience at Kodak Canada ULC. and Dhiman Industries Ltd.,
                  via the co-op program
                </p>
              </div>
              <div className="info_box">
                <h3 className="experience_header">OFF SHOP FLOOR</h3>
                <ul className="blocklist">
                  <li className="text">I enjoy: <ul>
                    <li>Gaming</li><li>Comic Videos</li><li>Reading</li></ul></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Link to="/upload">?</Link> */}
      <Backtotop />
    </div>
  );
}
