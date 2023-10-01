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
              <NavLink to="/">Intro</NavLink>
            </li>
            <li>
              <NavLink to="recent-work">Recent Work</NavLink>
            </li>
            <li>
              <NavLink to="skillset">Skillset</NavLink>
            </li>
            <li>
              <NavLink to="contact-me">Contact Me</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
