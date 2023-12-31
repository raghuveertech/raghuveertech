import "./../../scss/about.scss";

const About = () => {
  return (
    <div className="section about" id="about">
      <h2>About</h2>
      <p>
        I'm Raghuveer, web developer with over a decade of experience. I
        specialize in JavaScript, React, Next.js, Node.js, Express.js, and
        MongoDB, using these tools to craft exceptional web experiences.
      </p>
      <div className="profile">
        <div className="profile__pic">
          <img
            src="images/raghuveer-about.jpg"
            alt="About Raghuveer Panchagnula"
          />
        </div>
        <div className="profile__content">
          <h3>UI/UX Designer & Web Developer.</h3>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <strong>Birthday:</strong> <span>8 Aug 1991</span>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <span>
                    <a href="https://www.raghuveer.tech">www.raghuveer.tech</a>
                  </span>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <span>
                    <a href="tel:+919000188804">+91 9000 1888 04</a>
                  </span>
                </li>
                <li>
                  <strong>City:</strong>{" "}
                  <span>Hyderabad, Telangana, India</span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <strong>Degree:</strong> <span>B. Tech.</span>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <span>
                    <a href="mailto:raghuveerp25@gmail.com">
                      raghuveerp25@gmail.com
                    </a>
                  </span>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <span>
                    <a
                      href="https://www.linkedin.com/in/raghuveertech/"
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      raghuveertech
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
