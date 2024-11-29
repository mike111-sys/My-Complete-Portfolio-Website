import React from "react";
import myworkData from "../../components/myworkData";
import { motion } from "framer-motion";

const MyWork = () => {
  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-100" id="portfolio">
      {/* Title Section */}
      <div className="text-center mb-12">
        <motion.h1
whileInView={{ opacity: 1, y: 0 }}
initial={{ opacity: 0, y: -30 }}
transition={{ duration: 1.5 }}

          className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800"
        >
          My Latest Work
        </motion.h1>
       
      </div>

      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {myworkData.map((work) => (
          <div
            key={work.id}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            {/* Project Image */}
            <img
              src={work.img}
              alt={work.name}
              className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-300"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center rounded-lg transition-opacity duration-300">
              <p className="text-green-400 font-bold text-xl mb-2">{work.name}</p>
              {work.types.map((type, index) => (
                <p key={index} className="text-pink-500 text-sm">
                  {type}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Show More Section */}
      
    </div>
  );
};

export default MyWork;
