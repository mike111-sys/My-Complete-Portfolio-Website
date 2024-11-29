import React, { useState } from "react";
import "./Modal.css";
import { MdClose } from "react-icons/md";

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [websiteType, setWebsiteType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to your server
    alert(`Appointment booked!\n\nDetails:\nName: ${name}\nEmail: ${email}\nWebsite Type: ${websiteType}\nDescription: ${description}`);
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="buttton">
        <h2>Book Appointment</h2>
        <button className="close-button" onClick={onClose}><MdClose className="close-md"/></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Type of Website:</label>
            <select value={websiteType} onChange={(e) => setWebsiteType(e.target.value)} required>
              <option value="">Select a type</option>
              <option value="Portfolio">Portfolio</option>
              <option value="Blog">Blog</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label>Brief Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        
      </div>
    </div>
  );
};

export default Modal;
