import "src/sass/intro.scss";

const Intro = () => {
  return (
    <section className="main intro">
      <div className="intro__text">
        <div className="intro__text__card">
          <h1>Raghuveer Panchagnula</h1>
          <h2>Full Stack Developer</h2>
        </div>
        <div className="intro__text__main">
          <h3 className="special">Hello, welcome to my webiste.</h3>
          <p>
            I'm Raghuveer, web developer with over a decade of experience.
          </p>{" "}
          <p>
            I specialize in JavaScript, React, Next.js, Node.js, Express.js, and
            MongoDB, using these tools to craft exceptional web experiences.
          </p>
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

export default Intro;
