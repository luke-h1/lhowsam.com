import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiDroplet } from 'react-icons/fi';
import PropTypes from 'prop-types';
const Footer = ({ title, copyright }) => {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <FiDroplet className="navbar-icon" />
              {title}
            </Link>
          </div>
          <small className="website-rights">
            {copyright} {new Date().getFullYear()}
          </small>
          <div className="social-icons">
            <a
              className="social-icon-link"
              href="https://github.com/luke-h1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub test-id="github"/>
            </a>
            <a
              className="social-icon-link"
              href="https://www.linkedin.com/in/lukehowsam/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin test-id="linkedin"/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

Footer.defaultProps = {
  title: 'Luke H',
  copyright: 'Luke Howsam © ',
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
};

export default Footer;
