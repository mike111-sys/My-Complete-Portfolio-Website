import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import profile_img from "../../assets/mikee-pic.jpg";
import TypingEffect from './TypingEffect';

const Hero = () => {

  const texts = ['Frontend web development', 'Graphics design', 'Digital marketing'];

  return (
    <div id="home" className="hero">
      <div />
      <div />
      <div />
      <img src={profile_img} className="profile-pic fade-in" alt="" />

      <div className="container fade-in">
      
        <h1>Michael Chege</h1>
      </div>
      
  <p>    
        Welcome to my website. I have a strong record of
        building responsive, user-friendly web interfaces using modern
        technologies. I specialize in;
        <TypingEffect textArray={texts} typingSpeed={150} />
          </p>
      
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={20} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
