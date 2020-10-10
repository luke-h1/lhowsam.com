import React from 'react';
import { IconContext } from 'react-icons/lib';
import './Projects.css';
import Image1 from '../images/project-img-1.jpeg';
import Image2 from '../images/project-img-2.jpeg';
import Image3 from '../images/project-img-3.jpeg';
import Image4 from '../images/project-img-4.jpeg';
import Image5 from '../images/project-img-5.jpeg';
import { FaGithub } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';
import PropTypes from 'prop-types';
function Projects({ title, iconStyles }) {
  const ProjectItemGithubOnly = (props) => {
    return (
      <div className="project-card">
        <div className="img-container">
          <img src={props.image} alt="" />
        </div>
        <h3 className="project__card-title">{props.title}</h3>
        <p className="project-description">{props.description}</p>
        <div className="icon-container">
          <a
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
            alt=""
            href="{props.href}"
          >
            <FaGithub className={iconStyles} />
          </a>
        </div>
      </div>
    );
  };

  const ProjectItemGithubBrowser = (props) => {
    return (
      <div className="project-card">
        <div className="img-container">
          <img src={props.image} alt="" />
        </div>
        <h3 className="project__card-title">{props.title}</h3>
        <p className="project-description">{props.description}</p>
        <div className="icon-container">
          <a
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
            alt=""
            href="{props.githubHref}"
          >
            <FaGithub className={iconStyles} />
          </a>
          <a
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
            alt=""
            href="{props.browserHref}"
          >
            <GoBrowser className={iconStyles} />
          </a>
        </div>
      </div>
    );
  };

  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <div className="project-wrapper">
          <h2 className="project__title">{title}</h2>
          <div className="project-container">
            <ProjectItemGithubOnly
              image={Image1}
              title="Vanilla JS Todo App"
              description="     In this project, I built a Todo App made with Vanilla javascript
                & boostrap. I enjoyed solving the issues that occured during the
                development of this app (DOM manipulation issues etc.)"
              githubHref='https://github.com/luke-h1/vanilla-todo-app"'
              browserHref="https://vanilla-todo-app.vercel.app/"
            />

            <ProjectItemGithubOnly
              image={Image2}
              title="Automation"
              description="    I am a huge advocate for infrastructure automation as this
                allows teams to focus on innovating new features and solving new
                problems rather than being backlogged with maintaining
                infrastructure. In this project I made Ansible playbooks & Bash
                scripts that automate the setup of Linux & Mac OS X workstations
                & servers"
              githubHref="https://github.com/luke-h1/Automation"
            />

            <ProjectItemGithubBrowser
              image={Image3}
              title="Form Validator"
              description="  In this project I built a form validator that uses built in
                javascript regular expressions to validate name, email, postcode
                & phone numbers."
              browserHref="https://javascript-regex-validation-form.vercel.app/"
              githubHref="https://github.com/luke-h1/javascript-regex-validation-form"
            />

            <ProjectItemGithubBrowser
              image={Image4}
              title="Drink Recipe App"
              description="In this app I made a drink recipe app using vanilla JS & the
                fetch API that pulls data from the cocktail DB API. This was a really fun project and was the first project
                where I used higher order array methods to get multiple results
                from an API"
              browserHref="https://cocktail-recipe-app.vercel.app/"
              githubHref="https://github.com/luke-h1/cocktail-recipe-app"
            />

            <ProjectItemGithubBrowser
              image={Image5}
              title="Quotes App"
              description="In This Project I made a quotes app that pulls data from the anime-chan 
            API with Vanilla javascript and bootstrap. This was a really fun
            API to work with and made the development of this app enjoyable"
              browserHref="https://anime-quotes-app.vercel.app/"
              githubHref="https://github.com/luke-h1/anime-quotes-app"
            />

            {/* <div className="project-card">
              <div className="img-container">
                <img src={Image4} alt="" />
              </div>
              <h3 className="project__card-title">Cocktail recipe App</h3>
              <p className="project-description">
                In this app I made a drink recipe app using vanilla JS & the
                fetch API that pulls data from
                <a href="https://www.thecocktaildb.com/"> this </a>
                API. This was a really fun project and was the first project
                where I used higher order array methods to get multiple results
                from an API
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
            </div> */}
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

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
