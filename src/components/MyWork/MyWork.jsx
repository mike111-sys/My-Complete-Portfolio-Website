import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/diamond-theme.png";
import arrow_icon from "../../assets/arrow-icon.jpg";
import project_1 from "../../assets/project_1.png";
import project_2 from "../../assets/project_2.png";
import project_3 from "../../assets/project_3.png";
import project_4 from "../../assets/project_4.jpg";
import project_5 from "../../assets/project_5.png";
import project_6 from "../../assets/project_6.png";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

// Updated mywork_data with two name fields (w_name and w_type)
const mywork_data = [
  { w_no: 1, w_name: "Web App", w_type: "-React Js", w_img: project_1 },
  { w_no: 2, w_name: "Web App", w_type: "-MERN stack", w_img: project_2 },
  { w_no: 3, w_name: "Web App", w_type: "-MERN stack", w_img: project_3 },
  { w_no: 4, w_name: "Web App", w_type: "-React Js", w_img: project_4 },
  { w_no: 5, w_name: "Web App", w_type: "-React Js", w_img: project_5 },
  { w_no: 6, w_name: "Web App", w_type: "-React Js", w_type_1: "-Express Js", w_type_2: "-MySQL", w_img: project_6 }
];

const MyWork = () => {
  return (
    <>
      <div className="mywork-title">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 1.5 }}
        >
          My latest work
        </motion.h1>
        <motion.img
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -70 }}
          transition={{ duration: 1.5 }}
          src={theme_pattern}
          alt=""
        />
      </div>

      <div id="work" className="mywork fade-in">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="mywork-container"
        >
          {mywork_data.map((work, index) => (
            <div className="img-wrapper" key={index}>
              <img src={work.w_img} alt={`Work ${index}`} />
              <div className="hover-text">
                <p className="work-name">{work.w_name}</p>
                <p className="work-type">{work.w_type}</p>
                <p className="work-type-1">{work.w_type_1}</p>
                <p className="work-type-2">{work.w_type_2}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1.5 }}
          className="mywork-showmore"
        >
          <p>Show More</p>
          <FaLongArrowAltRight/>

        </motion.div>
      </div>
    </>
  );
};

export default MyWork;
