import React from 'react';
import ReactStars from 'react-rating-stars-component'; // Import the ReactStars component
import html_css from "../../assets/Skills/html-css.jpg";
import javascript from "../../assets/Skills/javascript.jpg";
import react from "../../assets/Skills/react.png";
import git from "../../assets/Skills/git.png";
import express from "../../assets/Skills/express.png";
import node from "../../assets/Skills/node.jpg";
import sql from "../../assets/Skills/sql.png";
import framer from "../../assets/Skills/framer.png";
import seo from "../../assets/Skills/seo.png";
import canva from "../../assets/Skills/canva.jpg";
import { motion } from "framer-motion";

const Skills = () => {

  const items = [
    { image: html_css, text: "HTML & CSS", rating: 4.5 },
    { image: javascript, text: "Javascript", rating: 5 }, // Half star example
    { image: react, text: "React Js", rating: 5.5 },
    { image: git, text: "Git", rating: 4 },
    { image: express, text: "Express Js", rating: 5 },
    { image: node, text: "Node Js", rating: 5 },
    { image: sql, text: "SQL", rating: 4.5 },
    { image: framer, text: "Framer motion", rating: 4 },
    { image: seo, text: "SEO", rating: 5.5 },
    { image: canva, text: "Canva", hiddenOnLarge: true, rating: 5 }, // last item
  ];

  const starRatingOptions = {
    count: 6,        // Set the number of stars to 6
    size: 30,        // Size of the stars
    value: 5,        // Default number of filled stars
    isHalf: true,    // Enable half-star ratings
    activeColor: "#ffd700", // Gold color for filled stars
    color: "#e4e5e9",  // Gray color for unfilled stars
    edit: false,     // Prevent editing by the user
  };

  return (
    <div  className="bg-gray-100 mt-10 py-12 px-6 sm:px-12 md:px-20 lg:px-32" id="skills">
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -30 }}
      transition={{ duration: 1.5 }}
      className="text-3xl font-bold text-center text-gray-800 mb-8">
        Major skills
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
              {item.text}
            </p>
            <ReactStars {...starRatingOptions} value={item.rating} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
