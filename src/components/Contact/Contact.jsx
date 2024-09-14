import React, { Component } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/diamond-theme.png";
import telephone_icon from "../../assets/telephone-2.png";
import mail_icon from "../../assets/mail-2.png";
import location_icon from "../../assets/location-2.png";


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cab23759-cf73-477c-bdcc-139e11e4e7ec");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on. You can
            contact anytime
          </p>
          <div className="contact-detail">
            <img src={mail_icon} alt="" /> <p>contact.mikechege@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img src={telephone_icon} alt="" /> <p>+254741238738</p>
          </div>
          <div className="contact-detail">
            <img src={location_icon} alt="" /> <p>Nakuru, Kenya</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name:</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email:</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
