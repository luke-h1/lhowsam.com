import React from 'react';
import { IconContext } from 'react-icons/lib';
import './Projects.scss';
import Image1 from '../../Images/Image1.jpeg';
import Image2 from '../../Images/Image2.jpeg';
import Image3 from '../../Images/Image3.jpeg';
import Image4 from '../../Images/Image4.jpeg';
import Image6 from '../../Images/Image6.jpeg';
import { FaGithub } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';
import PropTypes from 'prop-types';
import CardItem from '../CardItem/CardItem';
const Projects = ({ title, iconStyles }) => {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <div className="project-wrapper">
          <h2 className="project__title">{title}</h2>
          <div className="project-container">
            <CardItem
              src={Image2}
              text="Drink Recipe Site"
              label="React Hooks, SASS"
              path="/projects/drink-recipe-site"
            />
            <CardItem
              src={Image3}
              text="Automation"
              label="Ansible, Bash, CI"
              path="/projects/Automation"
            />
            <CardItem
              src={Image4}
              text="Form Validator"
              label="Vanilla JS"
              path="/projects/form-validator"
            />
            <CardItem
              src={Image6}
              text="Quotes App"
              label="Vanilla JS"
              path="/projects/quotes-app"
            />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

Projects.defaultProps = {
  title: 'Projects',
  iconStyles: 'icon-social',
};

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  iconStyles: PropTypes.string.isRequired,
};

export default Projects;
