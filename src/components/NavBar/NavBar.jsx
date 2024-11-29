import React, { useState, useEffect } from "react";
import { MdClose, MdMenuOpen } from "react-icons/md";
import { Link } from "react-scroll"; // Import Link from react-scroll
import logo from "../../assets/logo.png";
import underline_theme from "../../assets/underline-themeee.png";
import Modal from "./Modal";
import { AiOutlineCalendar } from "react-icons/ai";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [menu, setMenu] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const [scrolled, setScrolled] = useState(false); // State to track scroll position
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu open state

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true); // Change the state when scrolled past 100px
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Adding scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBookAppointment = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`${
        scrolled
          ? "bg-white text-gray-700 shadow-lg fixed w-full top-0 z-50 transition-all duration-300 ease-in-out"
          : "bg-transparent text-black"
      } flex justify-between items-center px-12 py-6 md:py-8 lg:py-4 sm:py-7`}
      style={{
        transition: "top 0.3s ease, background-color 0.3s ease",
      }}
    >
      {/* Logo */}
      <a
        onClick={handleBookAppointment}
        className="hidden lg:block bg-gradient-to-r from-orange-500 cursor-pointer to-purple-500 px-6 py-2 rounded-full text-white font-semibold hover:scale-110 transition-transform"
      >
        Book appointment
        <AiOutlineCalendar className="inline-block ml-2 mb-1 text-lg" />
      </a>

      {/* Mobile Menu Icon */}
      <MdMenuOpen
        onClick={toggleMenu}
        className="lg:hidden h-20 block absolute left-2 text-2xl cursor-pointer"
      />

      {/* Mobile Sliding Menu */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0  h-full w-1/2 bg-sky-700 text-white p-6 z-50 transition-transform duration-500 ease-in-out lg:hidden`}
      >
        {/* Close button */}
        <MdClose
          onClick={toggleMenu}
          className="text-xl absolute top-4 right-4 cursor-pointer"
        />

        {/* Vertical Nav Menu */}
        <ul className="flex flex-col space-y-6 mt-12">
          {["home", "services", "portfolio", "contact"].map((item, index) => (
            <li key={index}>
              <Link
                to={item}
                offset={-80}
                smooth={true}
                duration={1000}
                onClick={() => {
                  setMenu(item);
                  setIsMenuOpen(false); // Close menu on click
                }}
                className={`text-lg font-medium cursor-pointer ${
                  menu === item ? "text-orange-500" : "hover:text-orange-500"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
              {menu === item && (
                <img
                  src={underline_theme}
                  alt="Underline"
                  className="h-1 w-2/5"
                />
              )}
            </li>
          ))}

          {/* Dropdown for About */}
          <li className="relative">
            <a
              href="#about"
              onClick={toggleDropdown}
              className={`text-lg font-medium cursor-pointer ${
                menu === "about" ? "text-orange-500" : "hover:text-orange-500"
              } flex items-center space-x-1`}
            >
              <span>About</span>
              <span className="text-sm">&#x25BC;</span> {/* Dropdown arrow */}
            </a>
            {isDropdownOpen && (
              <ul className="bg-white text-black rounded-lg shadow-lg overflow-hidden mt-2">
                <li>
                  <Link
                    to="about-me"
                    smooth={true}
                    offset={-90}
                    duration={1000}
                    className="block px-4 py-2 text-nowrap hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setMenu("about");
                      setIsDropdownOpen(false);
                    }}
                  >
                    About Me
                  </Link>
                </li>

                <li>
                  <Link
                    to="skills"
                    offset={-90}
                    smooth={true}
                    duration={1000}
                    className="block px-4 py-2 text-nowrap hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setMenu("skills");
                      setIsDropdownOpen(false);
                    }}
                  >
                    Skills
                  </Link>
                </li>

                <li>
                  <Link
                    to="why-choose-me"
                    smooth={true}
                    duration={1000}
                    offset={-90}
                    className="block px-4 py-2 text-nowrap hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setMenu("about");
                      setIsDropdownOpen(false);
                    }}
                  >
                    Why Choose Me
                  </Link>
                </li>
                <li>
                  <Link
                    to="testimonials"
                    smooth={true}
                    duration={1000}
                    offset={-60}
                    className="block px-4 py-2 text-nowrap hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setMenu("about");
                      setIsDropdownOpen(false);
                    }}
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Nav links for large screens */}
      <div className="hidden lg:flex space-x-8">
        {["home", "services", "portfolio", "contact"].map((item, index) => (
          <Link
            key={index}
            to={item}
            offset={-80}
            smooth={true}
            duration={1000}
            onClick={() => setMenu(item)}
            className={`text-lg font-medium cursor-pointer ${
              menu === item ? "text-orange-500" : "hover:text-orange-500"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}

        {/* About Dropdown */}
        <div className="relative">
          <a
            href="#about"
            onClick={toggleDropdown}
            className={`text-lg font-medium cursor-pointer ${
              menu === "about" ? "text-orange-500" : " hover:text-orange-500"
            } flex items-center space-x-1 `}
          >
            <span>About</span>
            <span className="text-sm">&#x25BC;</span> {/* Dropdown arrow */}
          </a>
          {isDropdownOpen && (
            <ul className="bg-white text-black rounded-lg shadow-lg overflow-hidden mt-2 absolute">
              <li>
                <Link
                  to="about-me"
                  smooth={true}
                  offset={-90}
                  duration={1000}
                  className="block px-4 py-2 text-nowrap hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setMenu("about");
                    setIsDropdownOpen(false);
                  }}
                >
                  About Me
                </Link>
              </li>

              <li>
                <Link
                  to="skills"
                  offset={-90}
                  smooth={true}
                  duration={1000}
                  className="block px-4 py-2 text-nowrap hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setMenu("skills");
                    setIsDropdownOpen(false);
                  }}
                >
                  Skills
                </Link>
              </li>

              <li>
                <Link
                  to="why-choose-me"
                  smooth={true}
                  duration={1000}
                  offset={-90}
                  className="block px-4 py-2 text-nowrap hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setMenu("about");
                    setIsDropdownOpen(false);
                  }}
                >
                  Why Choose Me
                </Link>
              </li>
              <li>
              <Link
                  to="testimonials"
                  smooth={true}
                  duration={1000}
                  offset={-60}
                  className="block px-4 py-2 text-nowrap hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setMenu("about");
                    setIsDropdownOpen(false);
                  }}
                >
                  Testimonials
                </Link>
                </li>
            </ul>
          )}
        </div>
      </div>

      <h1 className="absolute right-6 sm:block lg:relative sm:ml-0  ml-5 font-mono font-extrabold text-lg text-lime-500">
        Michael Chege
      </h1>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default NavBar;
