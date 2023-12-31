import "./../scss/nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faFileAlt,
  faHome,
  faUserAlt,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

const MainNav = () => {
  return (
    <div className="main__nav">
      <div className="main__nav__image">
        <img src="images/nav-image.jpg" alt="Raghuveer Panchagnula" />
      </div>
      <div className="main__nav__title">
        <p>Raghuveer Panchagnula</p>
      </div>
      <div className="main__nav__social">
        <ul>
          <li>
            <a
              href="https://github.com/raghuveertech"
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/raghuveertech/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
      <div className="main__nav__links">
        <ul>
          <li>
            <a href="#home" className="active">
              <FontAwesomeIcon icon={faHome} />
              Home
            </a>
          </li>
          <li>
            <a href="#about">
              <FontAwesomeIcon icon={faUserAlt} />
              About
            </a>
          </li>
          <li>
            <a href="#resume">
              <FontAwesomeIcon icon={faFileAlt} />
              Resume
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <FontAwesomeIcon icon={faAddressBook} />
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
