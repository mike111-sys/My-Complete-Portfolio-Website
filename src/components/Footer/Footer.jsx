import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <div className="footer" >
      <div className="footer-top">
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1  }}
        
        className="footer-top-left">
          <img src={logo} alt="" />
        </motion.div>
        <motion.div
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: 100 }}
         transition={{ duration: 1  }}
        
        
        className="footer-top-right">
          <div
          
          className="footer-email-input">
            <img src="" alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </motion.div>
      </div>
      <hr />
      <div className="footer-bottom">
        <motion.p 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 1  }}

        className="footer-bottom-left">
          © 2024 Michael Chege. All rights reserved.
        </motion.p>
        <motion.div
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: 100 }}
         transition={{ duration: 1  }}
        
        className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
