import "./../../scss/resume.scss";

const Resume = () => {
  return (
    <div className="section resume" id="resume">
      <h2>Resume</h2>
      <div class="row">
        <div class="col-lg-6 ">
          <h3 class="resume-title">Sumary</h3>
          <div class="resume-item">
            <h4>Raghuveer Panchagnula</h4>
            <ul className="special">
              <li>
                9+ Years of Dynamic Web Development Experience with UI
                Specialization.
              </li>
              <li>4.5 Years of React JS Expertise.</li>
              <li>2+ Years of Full-Stack Development Experience.</li>
              <li>2+ Years Experience in Teaching Front-End Technologies.</li>
              <li>
                Extensive experience in ensuring code quality and reliability
                through TDD methodologies in React.js projects.
              </li>
            </ul>
          </div>
          <h3 class="resume-title">Skills</h3>
          <div class="resume-item">
            <h4>Full Stack Development</h4>
            <ul className="special">
              <li>React.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Front-End Development</h4>
            <ul className="special">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Redux</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>SCSS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>Material UI</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Unit Testing</h4>
            <ul className="special">
              <li>Jest</li>
              <li>React Testing Library</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Design and Prototyping</h4>
            <ul className="special">
              <li>Photoshop</li>
              <li>Figma</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Version Control and Collaboration</h4>
            <ul className="special">
              <li>Git</li>
              <li>Jira</li>
              <li>Zendesk</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Build Tools</h4>
            <ul className="special">
              <li>Webpack</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 ">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Cendyn India Pvt. Ltd.</h4>
            <h5>SENIOR SOFTWARE ENGINEER - (SEPTEMBER 2022 - PRESENT)</h5>
            <ul className="special">
              <li>
                <strong>Feature Implementation (Pegasus Web CMS):</strong>{" "}
                Implemented key features in Pegasus Web CMS, collaborating with
                developers for seamless integration.
              </li>
              <li>
                <strong>Website Maintenance and Client Interaction:</strong>{" "}
                Maintained and optimized websites on Pegasus Web, ensuring
                client satisfaction through regular communication. Identified
                and implemented improvements for enhanced website performance
                and user engagement.
              </li>
              <li>
                <strong>Training and Mentorship:</strong> Led training programs
                for new team members in React and Pegasus Web development.
                Mentored junior developers, fostering a collaborative learning
                environment.
              </li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>OSI Digital</h4>
            <h5>SENIOR SOFTWARE ENGINEER - (MARCH 2022 - SEPTEMBER 2022)</h5>
            <ul className="special">
              <li>
                Converting invision screens to reusable react js components.
              </li>
              <li>
                Working closely with the client in understanding the
                requirements.
              </li>
              <li>
                Working closely with the backend team to get the required APIs
                based on the designs and integrating them in react application.
              </li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Pegasus</h4>
            <h5>SENIOR WEB DEVELOPER - (MARCH 2017 to MARCH 2022)</h5>
            <ul className="special">
              <li>
                Converting design screens into web pages using HTML, SCSS.
              </li>
              <li>
                Making the pages more interactive using JavaScript, jQuery.
              </li>
              <li>
                Interacting with clients on their new requirements, fixing the
                bugs.
              </li>
              <li>Reviewing code and giving feedback.</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>OSI Technologies</h4>
            <h5>SOFTWARE ENGINEER - (JULY 2015 to SEPTEMBER 2016)</h5>
            <ul className="special">
              <li>
                Creating wireframes and templates for web applications using
                photoshop and taking feedback from the clients.
              </li>
              <li>
                Develop web applications and Mobile Apps using Front- End
                technologies such as AngularJS, jQuery Mobile.
              </li>
              <li>Train interns on web technologies.</li>
              <li>Support middleware team when needed.</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Warriorz Soft Technologies</h4>
            <h5>ASSOCIATE SOFTWARE ENGINEER - (MAY 2013 to JULY 2015)</h5>
            <ul className="special">
              <li>
                Develop web applications using Back End technologies: PHP,
                MySQL, Wordpress, Zend Framework.
              </li>
              <li>Work as a designer on a need basis.</li>
            </ul>
          </div>
          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>B. Tech. - 73%</h4>
            <ul className="special">
              <li>
                (2008 - 2012) QIS College of Engineering and technology, Ongole,
                Andhra Pradesh.
              </li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Intermediate - 92.5%</h4>
            <ul className="special">
              <li>
                (2006 - 2008) - Narayana Jr. College, Ongole, Andhra Pradesh.
              </li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>10th Class - 85.5%</h4>
            <ul className="special">
              <li>
                (2005 - 2006) - Narayana Public School, Ongole, Andhra Pradesh.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
