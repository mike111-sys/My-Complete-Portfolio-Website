import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/airb.jpg";
import TypingEffect from "./TypingEffect";
import Modal from "./Modal";

const Hero = () => {
    
  const texts = ["Full Stack web development", "Graphics design", "Digital marketing"];

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleBookAppointment = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };


  return (
    <div
      id="home"
      className="flex mt-6 sm:mt-0 flex-col items-center gap-10 py-12 sm:py-16 bg-gray-100  lg:py-20 text-center"
    >
      {/* Profile Image */}
      <img
        src={profile_img}
        alt="Michael Chege"
        className="rounded-full h-64 w-auto sm:h-96 sm:w-auto animate-fade-in"
      />

      {/* Hero Text */}
      <div className="animate-fade-in">
        <h1 className="text-2xl sm:text-3xl text-indigo-500 font-cursive">Michael Chege</h1>
      </div>

      <p className="text-lg sm:text-xl font-light leading-relaxed w-3/4 sm:w-2/3 animate-fade-in">
        Welcome to my website. I have a strong record of building responsive, user-friendly web applications using modern technologies. I specialize in:{" "}
        <TypingEffect textArray={texts} typingSpeed={150} />
      </p>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 md:gap-6 text-lg sm:text-xl font-light">
        <AnchorLink
          className="px-3 py-2 sm:px-6 sm:py-3 text-nowrap rounded-full bg-gradient-to-r from-orange-500 to-purple-500 text-white cursor-pointer hover:scale-105 transition-transform"
          offset={20}
          href="#contact"
        >
          Connect with me
        </AnchorLink>
        <div onClick={handleBookAppointment} className="px-2 py-2 sm:px-3 sm:py-3 text-nowrap rounded-full border border-indigo-700 cursor-pointer hover:border-green-500 transition-all">
          Book appointment
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Hero;
