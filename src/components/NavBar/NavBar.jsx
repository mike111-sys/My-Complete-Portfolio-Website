import React, { useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import underline_theme from "../../assets/underline-themeee.png";
import menu_open from "../../assets/menull.png";
import menu_close from "../../assets/menu_closeee.jpg";
import { MdClose, MdMenuOpen } from "react-icons/md";

const NavBar = () => {
  const [menu, SetMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.left = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.left = "-350px";
  };

  return (
    <div className="navbar slide-from-top">
      <img src={logo} alt="" className="logo" />
      <MdMenuOpen style  onClick={openMenu} alt="" className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <MdClose
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
          <AnchorLink className="anchor-link" offset={-100} href="#about">
            <p onClick={() => SetMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline_theme} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={-90} href="#services">
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
          <AnchorLink className="anchor-link" offset={70} href="#contact">
            <p onClick={() => SetMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline_theme} alt="" /> : <></>}
        </li>
      </ul>
      <AnchorLink className="anchor-link" offset={70} href="#contact">
      <div className="nav-connect">
        
          Connect With Me
        
      </div>
      </AnchorLink>
    </div>
  );
};

export default NavBar;
