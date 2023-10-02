import { Link } from "react-router-dom";
import "src/sass/ui.scss";
import "src/sass/home.scss";

const Home = () => {
  return (
    <section className="home main">
      <div className="home__text">
        <div className="home__text__main">
          <h1>I'm Raghuveer Panchagnula</h1>
          <h2>Full Stack Developer</h2>
          <div className="home__text__main__buttons">
            <Link className="btn primary-btn" to={"/about-me"}>
              <span>More About Me</span>
            </Link>
            <Link className="btn secondary-btn" to={"/contact-me"}>
              <span>Contact Me</span>
            </Link>
          </div>
          {/* <h3 className="special">Hello, welcome to my webiste.</h3> */}
          {/* <p>
            I'm Raghuveer, web developer with over a decade of experience.
          </p>{" "} */}
          {/* <p>
            I specialize in JavaScript, React, Next.js, Node.js, Express.js, and
            MongoDB, using these tools to craft exceptional web experiences.
          </p> */}
        </div>
        {/* <p>
          From creating user-friendly interfaces to optimizing performance, my
          projects stand out for their quality.
        </p> */}
        {/* 
        <p>
          I specialize in JavaScript, React, Next.js, Node.js, Express.js, and
          MongoDB, using these tools to craft exceptional web experiences. From
          creating user-friendly interfaces to optimizing performance, my
          projects stand out for their quality.
        </p>

        <p>
          Whether you have a personal project or collaboration in mind, I'm here
          to discuss how we can bring your ideas to life. Explore my portfolio,
          and feel free to reach out if you're interested in working together.
        </p>

        <p>Welcome to my portfolio, where digital dreams become reality!</p> */}
      </div>
    </section>
  );
};

export default Home;
