import React, { useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import underline_theme from "../../assets/underline-themeee.png";
import menu_open from "../../assets/menull.png";
import menu_close from "../../assets/menu_closeee.jpg";
import { motion } from 'framer-motion';

const NavBar = () => {
  const [menu, SetMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.left = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.left = "-350px";
  };

  const navStyle = {
   
  };


  return (
    <motion.div 
    initial={{ x: '-100vw' }} // Start off-screen to the left
    animate={{ x: 0 }}        // Animate to final position
    transition={{ type: 'spring', stiffness: 20, duration: 0.7 }} // Smooth transition
    style={navStyle} // Optional styling
    
    className="navbar">
      <img src={logo} alt="" className="logo" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          className="nav-mob-close"
          alt=""
        />
        <li>
          <AnchorLink className="anchor-link" offset={-90} href="#home">
            <p onClick={() => SetMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline_theme} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={-150} href="#about">
            <p onClick={() => SetMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline_theme} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={-140} href="#services">
            <p onClick={() => SetMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline_theme} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={134} href="#work">
            <p onClick={() => SetMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline_theme} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={20} href="#contact">
            <p onClick={() => SetMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline_theme} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={20} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </motion.div>
  );
};

export default NavBar;
