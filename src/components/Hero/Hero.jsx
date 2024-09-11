import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import profile_img from "../../assets/mikee-pic.jpg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div />
      <div />
      <div />
      <img src={profile_img} className="profile-pic" alt="" />

      <div className="container">
        <h1>Michael Chege</h1>
      </div>
      
      <p>
        Welcome to my website. I am a frontend developer with a strong record of
        building responsive, user-friendly web interfaces using modern
        technologies.
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
