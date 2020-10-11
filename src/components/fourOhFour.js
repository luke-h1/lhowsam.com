import React from 'react';
import { Link } from 'react-router-dom';
import './fourOhFour.css';
import { FiArrowRight } from 'react-icons/fi';
function fourOhFour() {
  return (
    <div className="fourOhFour-wrapper">
      <div className="fourOhFour--container">
        <h1 className="fourOhFour--intro">
          The Page you're looking for doesn't exist...{' '}
          <span role="img" aria-label="not found">
            🤷‍♂️ 🙅‍♂️ 🤔
          </span>
        </h1>
        <h2 className="instructions">Find your way back to the right page:</h2>

        <Link to="/" className="fourOhFour--links">
          Home
          <FiArrowRight className="fourOhFour-link--icon" />
        </Link>
        <Link to="/projects" className="fourOhFour--links">
          Projects
          <FiArrowRight className="fourOhFour-link--icon" />
        </Link>
        <Link to="/contact" className="fourOhFour--links">
          Contact
          <FiArrowRight className="fourOhFour-link--icon" />
        </Link>
      </div>
    </div>
  );
}

export default fourOhFour;
