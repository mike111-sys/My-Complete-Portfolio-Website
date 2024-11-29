import React, { useState } from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import Modal from "./Modal"; // Import the modal component

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleBookAppointment = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="footer-top-left"
        >
          <img src={logo} alt="" />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="footer-top-right"
        >
          <div className="footer-book-appointment" onClick={handleBookAppointment}>
            Book Appointment
          </div>
        </motion.div>
      </div>
      <hr />
      <div className="footer-bottom">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="footer-bottom-left"
        >
          © 2024 Michael Chege. All rights reserved.
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="footer-bottom-right"
        >
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </motion.div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> {/* Include the modal */}
    </div>
  );
};

export default Footer;
