import React from "react";
import { NavLink } from "react-router-dom";
import "src/sass/header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="/images/logo.png" alt="Raghuveer Panchagnula" />
          </a>
        </div>
        <nav>
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
      </div>
    </header>
  );
};

export default Header;
