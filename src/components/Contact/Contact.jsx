import React from 'react';
import { IconContext } from 'react-icons/lib';
import './Contact.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { AiOutlineMail } from 'react-icons/ai';
import Wave from '../common/wave/wave';

const Contact = ({ title, MainTitle }) => {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <div className="contact-wrapper">
          <h1 className="main-title">{MainTitle}</h1>
          <div className="alternatives">
            <h3>{title}</h3>
            <br />
            <div className="icon-wrapper">
              <a href="mailto:luke.howsam@yahoo.com?subject=Get In Touch">
                <AiOutlineMail className="icon-contact email" />
              </a>
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
            <div className="wave">
            <p>Alertnatively you can just wave to me by clicking the below button</p>
            <Wave className='wave-btn'/>  
            <p className='wave-joke'>Please note that I may not wave back. This is because I am very far away and probably didn't see you click this button.
            <span role="img" aria-label="smiley face">
            😀 
            </span>
            </p>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

Contact.defaultProps = {
  title: `You can reach me on: `,
  MainTitle: 'Get In Touch',
};

Contact.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Contact;
