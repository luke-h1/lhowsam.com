/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { IconContext } from 'react-icons/lib';
import PropTypes from 'prop-types';
import {
  ContactWrapper,
  Alternatives,
  IconWrapper,
  EmailIcon,
  LinkedIn,
  Github,
} from './ContactElements';

const Contact = ({ title }) => (
  <IconContext.Provider value={{ color: '#fff', size: 64 }}>
    <>
      <ContactWrapper>
        <h1>Get in touch</h1>
        <Alternatives>
          <h3>{title}</h3>
          <br />
          <IconWrapper>
            <a
              href="mailto:luke.howsam@yahoo.com?subject=Get In Touch"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/lukehowsam/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <LinkedIn />
            </a>
            {' '}
            <a
              href="https://github.com/luke-h1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <Github />
            </a>
          </IconWrapper>
        </Alternatives>
      </ContactWrapper>
    </>
  </IconContext.Provider>
);

Contact.defaultProps = {
  title: 'You can reach me on:',
};

Contact.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Contact;
