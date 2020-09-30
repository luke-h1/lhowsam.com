import React from 'react';

const AboutMe = () => {
  return (
    <section className="s2">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>More about me</h4>
            <p className="about-desc">
              I'm passionate about solving technical problems and coming up with
              creative solutions.I enjoy working with the JAMstack & various
              automation technologies. 
            </p>
          </div>
          <div id="skills">
            <h4>Top expertise</h4>
            <ul>
              <li>HTML, CSS, SCCS </li>

              <br />
              <li>Git / version control</li>
              <br />
              <li>Automation (Ansible, Bash scripting)</li>
              <br />
              <li>Postman</li>
              <br />
              <li>Technical Support</li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
