import React from 'react';
import { Link } from 'react-router-dom';
import './fourOhFour.css';
import PropTypes from 'prop-types';
import { FiArrowRight } from 'react-icons/fi';

const fourOhFour = ({ linkOne, linkTwo, linkThree, fourOhFourTitle,instructions }) => {
  return (
    <div className="fourOhFour-wrapper">
      <div className="fourOhFour--container">
        <h1 className="fourOhFour--intro">
          {fourOhFourTitle}{' '}
          <span role="img" aria-label="not found">
            🤔
          </span>
        </h1>
        <h2 className="instructions">{instructions}</h2>

        <Link to="/" className="fourOhFour--links">
          {linkOne}
          <FiArrowRight className="fourOhFour-link--icon" />
        </Link>
        <Link to="/projects" className="fourOhFour--links">
          {linkTwo}
          <FiArrowRight className="fourOhFour-link--icon" />
        </Link>
        <Link to="/contact" className="fourOhFour--links">
          {linkThree}
          <FiArrowRight className="fourOhFour-link--icon" />
        </Link>
      </div>
    </div>
  );
};

fourOhFour.defaultProps = {
  fourOhFourTitle: "The Page you're looking for doesn't exist...",
  instructions: 'Find your way back to the right page:',
  linkOne: 'Home',
  linkTwo: 'Projects',
  linkThree: 'Contact',
};

fourOhFour.propTypes = {
  fourOhFourTitle: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  linkOne: PropTypes.string.isRequired,
  linkTwo: PropTypes.string.isRequired,
  linkThree: PropTypes.string.isRequired,
};

export default fourOhFour;
