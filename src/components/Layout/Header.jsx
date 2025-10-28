import React, { useState } from "react";
import logo from "@/assets/logo.png";
import "@/components/Layout/Header.css";
import "@/assets/fonts/fonts.css";
import menuIcon from "@/assets/menu.svg";
import closeIcon from "@/assets/close.svg"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Site Logo" />
      </div>

      <img
        src={isMenuOpen ? closeIcon : menuIcon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />

      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="btn-box">
        <button className="btn user" aria-label="User Profile">
          Ravi
        </button>
        <button className="btn login" aria-label="Sign Out">
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;
