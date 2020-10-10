import React from 'react';
import { IconContext } from 'react-icons/lib';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PropTypes from 'prop-types';
function Contact({ title }) {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <div class="contact-wrapper">
          <div class="alternatives">
            <h3>{title} </h3>
            <br />
            <div class="icon-wrapper">
              <a
                href="https://www.linkedin.com/in/lukehowsam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon-contact" />
              </a>{' '}
              <a
                href="https://github.com/luke-h1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon-contact" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

Contact.defaultProps = {
  title: `You can reach me on: `,
};

Contact.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Contact;
