import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/diamond-theme.png";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow-icon.jpg";
import { motion } from "framer-motion";

const MyWork = () => {
  return (
    <>
      <div
      
      
      className="mywork-title">
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 1.5 }}
        
        >My latest work</motion.h1>
        <motion.img
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -70 }}
        transition={{ duration: 1.5 }}
        
        src={theme_pattern} alt="" />
      </div>
      <div id="work" className="mywork fade-in">
        <motion.div 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: 100 }}
         transition={{ duration: 1.5 }}

        className="mywork-container">
          {mywork_data.map((work, index) => {
            return <img key={index} src={work.w_img} alt="" />;
          })}
        </motion.div>
        <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 1.5 }}
        
        
        className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </motion.div>
      </div>
    </>
  );
};

export default MyWork;
