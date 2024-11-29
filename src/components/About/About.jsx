import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import themePattern from "../../assets/diamond-theme.png";
import profileImage from "../../assets/mikoo.jpg";
import CountUp from "react-countup";

const About = () => {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  // Detect when the "Achievements Section" is in the viewport
  const handleScroll = () => {
    const element = document.getElementById("achievements-section");
    const position = element.getBoundingClientRect();

    if (position.top <= window.innerHeight && position.bottom >= 0) {
      setHasEnteredView(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="about-me" className="flex mt-10 flex-col items-center justify-center gap-16 px-8 lg:px-24 py-16 bg-gray-50">
      {/* Title Section */}
      <div className="relative">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 1.5 }}
          className="text-4xl font-semibold text-black text-center "
        >
          About Me
        </motion.h1>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left: Profile Image */}
        <div
         
          className="flex-shrink-0 hidden md:block"
        >
          <img
            src={profileImage}
            alt="Michael Chege"
            className="w-80 h-auto rounded-lg shadow-md animate-fade-in"
          />
        </div>

        {/* Right: About Text */}
        <div
          className="space-y-8 text-black text-lg leading-relaxed"
        >
          <p>
            My name is <span className="font-bold text-black">Michael Chege</span>. I am a passionate full-stack developer with a knack for crafting
            robust and scalable web applications. My goal is to leverage my
            expertise to create innovative solutions that drive business growth
            and deliver exceptional user experiences.
          </p>
          <p>
            I've developed my expertise also in digital marketing over the years, focusing on
            influencer marketing, content marketing, web analytics, and local SEO. I also
            enjoy creating aesthetically pleasing graphic designs using the latest
            software tools.
          </p>
          <p>
            I'm always eager to learn and adapt to the latest technologies, ensuring I
            stay at the forefront of industry trends. Please get in touch if you're
            interested, so we can talk about how I can support your project.
          </p>
        </div>
      </div>

      {/* Achievements Section */}
      <motion.div
        id="achievements-section"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center w-full"
      >
        <div className="space-y-2 hover:scale-105 transform transition">
          <span className="block text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-purple-600 text-transparent bg-clip-text">
            {hasEnteredView && <CountUp start={0} end={2000} duration={4} />}
            <span className="text-4xl">+</span>
          </span>
          <span className="block text-sm font-medium text-gray-600">
            CODE HOURS LOGGED
          </span>
        </div>
        <div className="space-y-2 hover:scale-105 transform transition">
          <span className="block text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-purple-600 text-transparent bg-clip-text">
            {hasEnteredView && <CountUp start={0} end={10} duration={9} />}
            <span className="ext-4xl ">+</span>
          </span>
          <span className="block text-sm font-medium text-gray-600">
            PROJECTS COMPLETED
          </span>
        </div>
        <div className="space-y-2 hover:scale-105 transform transition">
          <span className="block text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-purple-600 text-transparent bg-clip-text">
            {hasEnteredView && <CountUp start={0} end={98} duration={9} suffix="%" />}
          </span>
          <span className="block text-sm font-medium text-gray-600">
            HAPPY CLIENTS
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
