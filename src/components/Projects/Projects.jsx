import React from 'react';
import { IconContext } from 'react-icons/lib';
import './Projects.scss';
import Image1 from '../../Images/Projects/Coffee-jon-tyson.jpeg';
import Image2 from '../../Images/Projects/Drink-carson.jpeg';
import Image3 from '../../Images/Projects/pink-pattern-pawel.jpeg';
import Image4 from '../../Images/Projects/pattern-ahmad-dirini.jpeg';
import Image5 from '../../Images/Projects/Shop-albert-renn.jpeg';

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
              path="personal-site"
            />
            <CardItem
              src={Image2}
              text="Cocktail Recipe App"
              label="React Hooks, SASS"
              path="drink-app"
            />
            <CardItem
              src={Image3}
              text="Automation"
              label="Ansible, Bash, CI"
              path="Automation"
            />
            <CardItem
              src={Image4}
              text="Form Validator"
              label="Vanilla JS"
              path="form-validator"
            />
            <CardItem
              src={Image5}
              text="Quotes App"
              label="Vanilla JS"
              path="quotes-app"
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
