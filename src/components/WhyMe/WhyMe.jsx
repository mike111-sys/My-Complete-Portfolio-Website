import React from "react";
import time from "../../assets/WhyMe/time.jpg";
import quality from "../../assets/WhyMe/quality.jpg";
import satisfaction from "../../assets/WhyMe/satisfaction.jpg";
import skill_set from "../../assets/WhyMe/skill-set.jpg";
import communication from "../../assets/WhyMe/communication.png";
import adaptability from "../../assets/WhyMe/adaptability.png";
import problem_solving from "../../assets/WhyMe/problem-solving.png";
import tailored_solution from "../../assets/WhyMe/tailored-solution.jpg";
import track_record from "../../assets/WhyMe/proven-track-record.png";
import support from "../../assets/WhyMe/continous-support.png";
import { motion } from "framer-motion";

const WhyMe = () => {
  const items = [
    { image: time, text: "Timely Project Delivery" },
    { image: quality, text: "Quality Assurance" },
    { image: satisfaction, text: "Client Satisfaction Guarantee" },
    { image: skill_set, text: "Comprehensive Skill Set" },
    { image: communication, text: "Clear Communication" },
    { image: adaptability, text: "Adaptability and Learning" },
    { image: problem_solving, text: "Strong Problem-Solving Skills" },
    { image: tailored_solution, text: "Tailored Solutions" },
    { image: track_record, text: "Proven Track Record" },
    // The last item will have conditional visibility
    { image: support, text: "Continuous Support", hiddenOnLarge: true },
  ];

  return (
    <div className="bg-gray-100 mt-10 py-12 px-6 sm:px-12 md:px-20 lg:px-32" id="why-choose-me">
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -30 }}
      transition={{ duration: 1.5 }}
      className="text-3xl font-bold text-center text-gray-800 mb-8">
        Why Choose Me?
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-105 ${
              item.hiddenOnLarge ? "lg:hidden" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <p className="mt-4 text-lg font-medium text-gray-700 text-center">
              ✅ {item.text}
            </p>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-700 text-lg mt-8">
        Ready to discuss your next project?{" "}
        <a
          href="#contact"
          className="text-purple-600 hover:underline font-medium"
        >
          Contact me
        </a>{" "}
        today, and let’s bring your ideas to life!
      </p>
    </div>
  );
};

export default WhyMe;
