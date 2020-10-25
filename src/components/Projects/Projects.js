import React from 'react';
import { IconContext } from 'react-icons/lib';
import './Projects.scss';
import Cards from '../Cards/Cards';
const Projects = () => {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <div className="project-wrapper">
          <div className="project-container">
            <Cards />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Projects;
