import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/diamond-theme.png";
import { motion } from "framer-motion";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle"); // New state for form status
  const [message, setMessage] = useState(""); // New state for success/error message

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
    <div id="contact" className="contact">
      <div className="contact-title">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 1.5 }}
        >
          Get in touch
        </motion.h1>
        <motion.img
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -70 }}
          transition={{ duration: 1.5 }}
          src={theme_pattern}
          alt=""
        />
      </div>
      <div className="contact-section">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="contact-left"
        >
          <h1>Let's talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on. You can
            contact anytime
          </p>
          <div className="contact-detail">
          <HiOutlineMailOpen color='gold' size={22}  /><p>contact.mikechege@gmail.com</p>
          </div>
          <div className="contact-detail">
          <FaPhoneVolume color='#FF6F61' size={22} /> <p>+254741238738</p>
          </div>
          <div className="contact-detail">
          <FaLocationDot color='#B57EDC' size={22} /> <p>Nakuru, Kenya</p>
          </div>
        </motion.div>
        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          onSubmit={onSubmit}
          className="contact-right"
        >
          <label htmlFor="">Your Name:</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          <label htmlFor="">Your Email:</label>
          <input type="email" placeholder="Enter your email" name="email" required />
          <label htmlFor="">Write your message here:</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          {/* Submit button with dynamic text */}
          <button type="submit" className="contact-submit" disabled={formStatus === "sending"}>
            {formStatus === "sending" ? "Sending..." : "Submit now"}
          </button>

          {/* Display success or error message after form submission */}
          {formStatus === "success" && <p className="success-message">{message}</p>}
          {formStatus === "error" && <p className="error-message">{message}</p>}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
