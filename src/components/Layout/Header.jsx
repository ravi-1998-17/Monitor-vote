import React from "react";
import logo from "@/assets/logo.png";
import "@/components/Layout/Header.css";
import "@/assets/fonts/fonts.css";
import menuIcon from "@/assets/menu.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Site Logo" />
      </div>
      <nav className="nav">
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
