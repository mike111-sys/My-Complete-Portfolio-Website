import React from "react";
import { FaLaptopCode, FaPaintBrush, FaBullhorn } from "react-icons/fa"; // Import icons
import theme_pattern from "../../assets/diamond-theme.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div
      id="services"
      className="flex mt-10 flex-col items-center justify-center gap-20 px-8 md:px-16 lg:px-32 bg-gray-50 py-20"
    >
      <div className="relative text-center">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 1.5 }}
          className="text-3xl md:text-4xl font-semibold text-black"
        >
          My Services
        </motion.h1>
        <motion.img
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -70 }}
          transition={{ duration: 1.5 }}
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 right-0 w-16 md:w-20 lg:w-24 -z-10"
        />
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* Service 1 - Web Design */}
        <div className="flex flex-col items-center gap-4 p-8 border-2 border-white rounded-lg transition-transform transform hover:scale-105 hover:border-purple-500 bg-white hover:bg-gray-100">
          <h3 className="text-lg font-medium text-purple-600">01</h3>
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
            Web Design
          </h2>
          <FaLaptopCode className="text-6xl text-purple-600" />
        </div>

        {/* Service 2 - Graphics Design */}
        <div className="flex flex-col items-center gap-4 p-8 border-2 border-white rounded-lg transition-transform transform hover:scale-105 hover:border-purple-500 bg-white hover:bg-gray-100">
          <h3 className="text-lg font-medium text-purple-600">02</h3>
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
            Graphics Design
          </h2>
          <FaPaintBrush className="text-6xl text-purple-600" />
        </div>

        {/* Service 3 - Digital Marketing */}
        <div className="flex flex-col items-center gap-4 p-8 border-2 border-white rounded-lg transition-transform transform hover:scale-105 hover:border-purple-500 bg-white hover:bg-gray-100">
          <h3 className="text-lg font-medium text-purple-600">03</h3>
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
            Digital Marketing Services
          </h2>
          <FaBullhorn className="text-6xl text-purple-600" />
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
