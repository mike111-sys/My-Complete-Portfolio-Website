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
        <div className="box">
          <div className="title">
            <span className="block"></span>
            <h1>
              Michael Chege<span></span>
            </h1>
          </div>
          <div className="role">
            <div className="block"></div>
            <p className="stack">Web Developer</p>
          </div>
        </div>
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
