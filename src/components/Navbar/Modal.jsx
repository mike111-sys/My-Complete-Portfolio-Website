import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [websiteType, setWebsiteType] = useState("");
  const [description, setDescription] = useState("");
  const [formStatus, setFormStatus] = useState("idle"); // Track form status
  const [message, setMessage] = useState(""); // Message for success/error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending"); // Indicate form is being sent

    // Create the form data object
    const formData = {
      name,
      email,
      website_type: websiteType,
      description,
      access_key: "cab23759-cf73-477c-bdcc-139e11e4e7ec", // Web3Forms access key
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");
        setMessage("Appointment booked successfully!");
        alert(`Appointment booked!\n\nDetails:\nName: ${name}\nEmail: ${email}\nWebsite Type: ${websiteType}\nDescription: ${description}`);
        onClose(); // Close the modal
      } else {
        setFormStatus("error");
        setMessage("Submission failed: " + data.message);
      }
    } catch (error) {
      setFormStatus("error");
      setMessage("Network error. Please try again later.");
      alert("Network error. Please try again later.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Book Appointment</h2>
          <button onClick={onClose} className="text-white hover:text-gray-400 transition">
            <MdClose size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Type of Website:</label>
            <select
              value={websiteType}
              onChange={(e) => setWebsiteType(e.target.value)}
              required
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="">Select a type</option>
              <option value="Portfolio">Portfolio</option>
              <option value="Blog">Blog</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Brief Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-yellow-500 via-purple-600 to-purple-800 text-white font-medium rounded hover:from-purple-800 hover:to-yellow-500 transition"
          >
            Submit
          </button>
        </form>
        {formStatus === "sending" && (
          <p className="text-yellow-500 mt-2 text-center">Sending your appointment...</p>
        )}
        {formStatus === "success" && (
          <p className="text-green-500 mt-2 text-center">{message}</p>
        )}
        {formStatus === "error" && (
          <p className="text-red-500 mt-2 text-center">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
