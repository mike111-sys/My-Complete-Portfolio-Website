import React, { useState } from "react";
import theme_pattern from "../../assets/diamond-theme.png";
import { motion } from "framer-motion";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("sending");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "cab23759-cf73-477c-bdcc-139e11e4e7ec");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setFormStatus("success");
        setMessage("Form submitted successfully!");
      } else {
        setFormStatus("error");
        setMessage("Submission failed: " + res.message);
      }
    } catch (error) {
      setFormStatus("error");
      setMessage("Network error. Please try again later.");
    }
  };

  return (
    <div id="contact" className="py-16 mt-3 px-4 sm:px-8 lg:px-16 bg-gray-50">
      {/* Title Section */}
      <div className="relative text-center mb-12">
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 1.5 }}
        
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
        >
          Get in Touch
        </motion.h1>
        <img
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -70 }}
          transition={{ duration: 1.5 }}
          src={theme_pattern}
          alt="Theme Pattern"
          className="absolute bottom-0 right-0 w-16 md:w-24 lg:w-32 opacity-50 -z-10"
        />
      </div>

      {/* Contact Info and Form */}
      <div className="flex flex-col gap-12 md:flex-row md:gap-16 lg:gap-24 justify-between">
        {/* Contact Information */}
        <div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-8 w-full md:w-1/2"
        >
          <h2 className="text-3xl mt-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-purple-600 to-purple-800">
            Let's Talk
          </h2>

          <p className="text-sm sm:text-lg text-gray-600 leading-7 max-w-lg">
            I'm currently available for new projects. Feel free to reach out for collaborations or if you need any assistance.
          </p>

          {/* Contact Info */}
          <div className="flex items-center gap-4 text-gray-600">
            <HiOutlineMailOpen color="gold" size={22} />
            <p className="text-xs sm:text-sm">contact.mikechege@gmail.com</p>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <FaPhoneVolume color="#FF6F61" size={22} />
            <p className="text-xs sm:text-sm">+254741238738</p>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <FaLocationDot color="#B57EDC" size={22} />
            <p className="text-xs sm:text-sm">Nakuru, Kenya</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          onSubmit={onSubmit}
          className="flex flex-col gap-8 w-full md:w-1/2"
        >
          <label htmlFor="name" className="text-gray-700 font-semibold text-lg">
            Your Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full h-12 px-5 rounded-lg bg-white text-gray-800 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <label htmlFor="email" className="text-gray-700 font-semibold text-lg">
            Your Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full h-12 px-5 rounded-lg bg-white text-gray-800 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <label htmlFor="message" className="text-gray-700 font-semibold text-lg">
            Write your message here:
          </label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
            className="w-full h-36 px-5 py-3 rounded-lg bg-white text-gray-800 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-full text-white text-xl bg-gradient-to-r from-yellow-500 to-purple-600 hover:scale-105 transition-all duration-300"
            disabled={formStatus === "sending"}
          >
            {formStatus === "sending" ? "Sending..." : "Submit Now"}
          </button>

          {/* Form Status Messages */}
          {formStatus === "success" && (
            <p className="text-green-500 mt-4">Form submitted successfully!</p>
          )}
          {formStatus === "error" && (
            <p className="text-red-500 mt-4">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
