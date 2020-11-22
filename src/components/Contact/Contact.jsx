import React from 'react';
import { IconContext } from 'react-icons/lib';
import PropTypes from 'prop-types';
import Wave from '../utils/wave/Wave';
import {
  ContactWrapper,
  Alternatives,
  IconWrapper,
  EmailIcon,
  LinkedIn,
  Github,
  WaveJoke,
  WaveDiv,
  WaveWrap,
} from './ContactElements';

const Contact = ({ title, MainTitle }) => {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <ContactWrapper>
          <h1>Get In Touch</h1>
          <Alternatives>
            <h3>{title}</h3>
            <br />
            <IconWrapper>
              <a
                href="mailto:luke.howsam@yahoo.com?subject='Get In Touch'"
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
              </a>{' '}
              <a
                href="https://github.com/luke-h1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <Github />
              </a>
            </IconWrapper>
            <WaveWrap>
              <WaveJoke>
                Alertnatively you can just wave to me by clicking the below
                button
              </WaveJoke>
              <WaveDiv>
                <Wave centered="true" />
              </WaveDiv>
              <WaveJoke>
                Please note that I may not wave back. This is because I am very
                far away and probably didn't see you click this button.
                <span role="img" aria-label="smiley face">
                  😀
                </span>
              </WaveJoke>
            </WaveWrap>
          </Alternatives>
        </ContactWrapper>
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
