import "./../scss/nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faFileAlt,
  faHome,
  faUserAlt,
  faEnvelopeOpen,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const MainNav = (props) => {
  const { sectionRefs } = props;

  const scrollToSection = (e, section) => {
    e.preventDefault();
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };

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
            <a
              className="active"
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
            >
              <FontAwesomeIcon icon={faHome} />
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              <FontAwesomeIcon icon={faUserAlt} />
              About
            </a>
          </li>
          <li>
            <a href="#resume" onClick={(e) => scrollToSection(e, "resume")}>
              <FontAwesomeIcon icon={faFileAlt} />
              Resume
            </a>
          </li>
          <li>
            <a
              href="#latestWork"
              onClick={(e) => scrollToSection(e, "latestWork")}
            >
              <FontAwesomeIcon icon={faBriefcase} />
              Latest Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
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
