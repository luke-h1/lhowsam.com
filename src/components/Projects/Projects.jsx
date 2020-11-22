import React from 'react';
import { IconContext } from 'react-icons/lib';
import './Projects.scss';
import Image1 from '../../images/Projects/Coffee-jon-tyson.jpeg';
import Image2 from '../../images/Projects/Drink-carson.jpeg';
import Image3 from '../../images/Projects/pink-pattern-pawel.jpeg';
import Image4 from '../../images/Projects/pattern-ahmad-dirini.jpeg';
import Image5 from '../../images/Projects/Shop-albert-renn.jpeg';

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
              src={Image1}
              text="Personal Site"
              label="React, Vanilla JS, SCSS, CSS"
              path="/projects/personal-site"
              loading="lazy"
            />
            <CardItem
              src={Image2}
              text="Cocktail Recipe App"
              label="React Hooks, SASS"
              path="/projects/drink-app"
              loading="lazy"
            />
            <CardItem
              src={Image3}
              text="Automation"
              label="Ansible, Bash, CI"
              path="/projects/Automation"
              loading="lazy"
            />
            <CardItem
              src={Image4}
              text="Form Validator"
              label="Vanilla JS"
              path="/projects/form-validator"
              loading="lazy"
            />
            <CardItem
              src={Image5}
              text="Quotes App"
              label="React, SCSS"
              path="/projects/quotes-app"
              loading="lazy"
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
