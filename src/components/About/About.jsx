import React from "react";
import "./About.css";
import theme_pattern from "../../assets/diamond-theme.png";
import profile_image from "../../assets/mikoo.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="about ">
      <div />
      <div />
      <div className="about-title">
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        
        >About me</motion.h1>
        <motion.img
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1  }}
          
          src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1  }}
          
          className="about-para">
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
          </motion.div>
          <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1  }}
          
          
          className="about-skills">
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
          </motion.div>
        </div>
      </div>
      <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      
      className="about-achievement">
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
      </motion.div>
    </div>
  );
};

export default About;
