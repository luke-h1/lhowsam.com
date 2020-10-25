import React from 'react';
import { IconContext } from 'react-icons/lib';
import './Projects.scss';
import Image1 from '../../Images/Image1.jpeg'
import Image2 from '../../Images/Image2.jpeg'
import Image3 from '../../Images/Image3.jpeg'
import Image4 from '../../Images/Image4.jpeg'

import { FaGithub } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';
import PropTypes from 'prop-types';
const Projects = ({ title, iconStyles }) => {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <div className="project-wrapper">
          <h2 className="project__title">{title}</h2>
          <div className="project-container">
            <div className="project-card">
              <div className="img-container">
                <img src={Image1} alt="" loading="lazy" />
              </div>
              <h3 className="project__card-title">Cocktail recipe App</h3>
              <p className="project-description">
                In this app I made a drink recipe app using React hooks that
                pulls data from
                <a
                  href="https://www.thecocktaildb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  this API
                </a>
              </p>
              <div className="icon-container">
                <a
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="https://github.com/luke-h1/cocktail-recipe-app"
                >
                  <FaGithub className={iconStyles} />
                </a>
                <a
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="https://cocktail-recipe-app.vercel.app/"
                >
                  <GoBrowser className={iconStyles} />
                </a>
              </div>
            </div>
            <div className="project-card">
              <div className="img-container">
                <img src={Image2} alt="" loading="lazy" />
              </div>
              <h3 className="project__card-title">Automation</h3>
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
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="https://github.com/luke-h1/Automation"
                >
                  <FaGithub className={iconStyles} />
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="img-container">
                <img src={Image3} alt="" loading="lazy" />
              </div>
              <h3 className="project__card-title">Form Validator</h3>
              <p className="project-description">
                In this project I built a form validator that uses built in
                javascript regular expressions to validate name, email, postcode
                & phone numbers.
              </p>
              <div className="icon-container">
                <a
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="https://github.com/luke-h1/javascript-regex-validation-form"
                >
                  <FaGithub className={iconStyles} />
                </a>
                <a
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="https://javascript-regex-validation-form.vercel.app/"
                >
                  <GoBrowser className={iconStyles} />
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="img-container">
                <img src={Image4} alt="" loading="lazy" />
              </div>
              <h3 className="project__card-title">Quotes App</h3>
              <p className="project-description">
                In this project I made a quotes app that pulls data from
                <a
                  href="https://github.com/RocktimSaikia/anime-chan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  this
                </a>{' '}
                API with Vanilla javascript and bootstrap. This was a really fun
                API to work with and made the development of this app enjoyable.
              </p>
              <div className="icon-container">
                <a
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="https://github.com/luke-h1/anime-quotes-app"
                >
                  <FaGithub className={iconStyles} />
                </a>
                <a
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                  href="https://anime-quotes-app.vercel.app/"
                >
                  <GoBrowser className={iconStyles} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

Projects.defaultProps = {
  title: 'Projects',
  iconStyles: 'icon-social',
  Image1: '../images/project-img-1.jpeg',
};

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  iconStyles: PropTypes.string.isRequired,
};

export default Projects;