import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleBookAppointment = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="footer mx-4 sm:mx-8 my-8 sm:my-12 flex flex-col gap-4 sm:gap-1 bg-gray-100 px-4 sm:px-8">
      <div className="footer-top flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-8">
        <div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="footer-top-left"
        >
          <h1 className="text-lime-500 font-mono font-bold text-base sm:text-2xl text-center sm:text-left">
            Michael Chege
          </h1>
        </div>

        <div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="footer-top-right flex items-center gap-2 sm:gap-4"
        >
          <div
            onClick={handleBookAppointment}
            className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 text-nowrap rounded-full border bg-gradient-to-r from-orange-500 to-purple-500 text-white transition-all cursor-pointer text-xs sm:text-sm"
          >
            Book appointment <FaEnvelopeOpenText />
          </div>
        </div>
      </div>

      <hr className="border-gray-600 my-4 sm:my-8" />

      <div className="footer-bottom flex flex-col sm:flex-row justify-between items-center sm:items-start text-xs sm:text-sm gap-2 sm:gap-6">
        <p
          className="footer-bottom-left text-gray-400 text-center sm:text-left"
        >
          © 2024 Michael Chege. All rights reserved.
        </p>

        <div
          className="footer-bottom-right flex gap-4 sm:gap-8 text-gray-400 justify-center sm:justify-end"
        >
          <p className="text-xs sm:text-sm hover:text-yellow-500 cursor-pointer">Terms of Service</p>
          <p className="text-xs sm:text-sm hover:text-yellow-500 cursor-pointer">Privacy Policy</p>
          <p className="text-xs sm:text-sm hover:text-yellow-500 cursor-pointer">Connect with me</p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Footer;
