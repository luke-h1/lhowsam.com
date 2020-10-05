import React from 'react';
import { IconContext } from 'react-icons/lib';
import './Projects.css';
import Image1 from '../images/img-1.jpeg';
import Image2 from '../images/img-2.jpeg';
import Image3 from '../images/img-3.jpeg';
import { FaGithub } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';
function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <div class="project-wrapper">
          <h2 class="project__title">Projects</h2>
          <div className="project-container">
            <div className="project-card">
              <div className="img-container">
                <img src={Image1} alt="" />
              </div>
              <h3 class="project__card-title">Vanilla JS Todo App</h3>
              <p className="project-description">
                In this project, I built a Todo App made with Vanilla javascript
                & boostrap. I enjoyed solving the issues that occured during the
                development of this app (DOM manipulation issues etc.)
              </p>
              <div className="icon-container">
                <a
                  class="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="https://github.com/luke-h1/vanilla-todo-app"
                >
                  <FaGithub className="icon-social" />
                </a>
                <a
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="https://vanilla-todo-app.vercel.app/"
                >
                  <GoBrowser className="icon-social" />
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="img-container">
                <img src={Image2} alt="" />
              </div>
              <h3 class="project__card-title">Automation</h3>
              <p className="project-description">
                I am a huge advocate for infrastructure automation as this
                allows teams to focus on innovating new features and solving new
                problems rather than being backlogged with maintaining
                infrastructure. In this project I made Ansible playbooks & Bash
                scripts that automate the setup of Linux & Mac OS X workstations
                & servers
              </p>
              <div className="icon-container">
                <a
                  class="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="https://github.com/luke-h1/Automation"
                >
                  <FaGithub className="icon-social" />
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="img-container">
                <img src={Image3} alt="" />
              </div>
              <h3 class="project__card-title">Form Validator</h3>
              <p className="project-description">
                In this project I built a form validator that uses built in
                javascript regular expressions to validate name, email, postcode
                & phone numbers.
              </p>
              <div className="icon-container">
                <a
                  class="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="https://github.com/luke-h1/javascript-regex-validation-form"
                >
                  <FaGithub className="icon-social" />
                </a>
                <a
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="https://javascript-regex-validation-form.vercel.app/"
                >
                  <GoBrowser className="icon-social" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
