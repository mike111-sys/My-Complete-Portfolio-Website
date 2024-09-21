import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/diamond-theme.png";
import web_pic from "../../assets/internet-logoo.jpg";
import graphics from "../../assets/graphic-designnn.jpg";
import logo from "../../assets/mine.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id="services" className="services">
      <div />
      <div />
      <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -30 }}
      transition={{ duration: 1.5 }}
      
      className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </motion.div>
      <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      
      className="services-container">
        <div className="service-web-design">
          <h3 className="service-number">01</h3>
          <h2 className="service-header">Web Design</h2>
          <img src={web_pic} alt="" className="web-image" />
          <p></p>
        </div>
        <div className="service-web-design">
          <h3 className="service-number">02</h3>
          <h2 className="service-header">Graphics Design</h2>
<div/><div/>
          <img src={graphics} alt="" className="graphics-image" />
          <p></p>
        </div>
        <div className="service-web-design">
          <h3 className="service-number">03</h3>
          <h2 className="service-header">Digital Marketing Services</h2>

          <img src={logo} alt="" className="marketing-image" />
          <p> </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
