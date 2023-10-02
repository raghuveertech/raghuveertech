import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "src/sass/header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="/images/logo.png" alt="Raghuveer Panchagnula" />
          </a>
        </div>
        <nav className={`${menuOpen ? "open" : ""}`}>
          <a href="#" className="nav-close" onClick={() => setMenuOpen(false)}>
            &times;
          </a>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about-me">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/my-recent-work">Recent Work</NavLink>
            </li>
            <li>
              <NavLink to="/my-skills">Skillset</NavLink>
            </li>
            <li>
              <NavLink to="/contact-me">Contact Me</NavLink>
            </li>
          </ul>
        </nav>
        <div className="hamburger-icon" onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
