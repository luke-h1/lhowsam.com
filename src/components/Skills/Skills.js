import React, { Fragment } from 'react';
import { FaReact } from 'react-icons/fa';
import { GoTools } from 'react-icons/go';
import './Skills.scss';
const Skills = () => {
  return (
    <Fragment>
      <div className="showcase-skills">
        <div className="skills-header">
          <h1 className="skills-title">Skills</h1>
          <div className="skills-body">
            <div className="skills-body-items">
              <div className="skills-header">
                <h3>
                  Frontend Development <FaReact className="skill-icon" />
                </h3>
                <div className="skill">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>SCSS</p>
                  <p>Javascript</p>
                  <p>Basic React</p>
                </div>
              </div>
              <div className="skills-header">
                <h3>
                  Tools <GoTools className="skill-icon" />
                </h3>
                <div className="skill">
                  <p>Automation</p>
                  <p>Ansible</p>
                  <p>Bash</p>
                  <p>Linux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Skills;
