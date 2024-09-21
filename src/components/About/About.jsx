import React from "react";
import "./About.css";
import theme_pattern from "../../assets/diamond-theme.png";
import profile_image from "../../assets/mikoo.jpg";

const About = () => {
  return (
    <div id="about" className="about fade-in">
      <div />
      <div />
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I have a strong enthusiasm for developing user-friendly web
              interfaces and am a devoted frontend developer. I've developed my
              expertise also in digital marketing over the years, with a focus
              on influencer marketing, content marketing, web analytics, and
              local SEO. In addition, i adore using the newest software tools to
              create aesthetically pleasing graphic designs. I'm always eager to
              learn and adapt to the latest technologies, ensuring i stay at the
              forefront of industry trends.
            </p>
            <br />
            Please get in touch if you're interested so we can talk about how i
            can support your project.
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Vanilla Js</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>TypeScript</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Figma</p>
              <hr style={{ width: "63%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievement">
        <div className="about-achievements">
          <span className="rating">2+</span>YEARS OF EXPERIENCE
        </div>
        <hr />

        <div className="about-achievements">
          <span className="rating">10+</span>PROJECTS COMPLETED
        </div>
        <hr />

        <div className="about-achievements">
          <span className="rating">98%</span> HAPPY CLIENTS
        </div>
      </div>
    </div>
  );
};

export default About;
