import React, { Fragment } from 'react';
import profileImage from '../../images/luke.png';
import './HeroSection.scss';
import PropTypes from 'prop-types';
import { FaReact } from 'react-icons/fa';
const HeroSection = ({
  title,
  skills,
  introText,
  skillItemOne,
  skillItemTwo,
  skillItemThree,
  skillItemFour,
  skillItemFive,
}) => {
  return (
    <Fragment>
      <div className={'home__hero-section darkBg'}>
        <div className="container">
          <div className="row home__hero-row">
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{title}</div>
                <p className="paragraph">{introText}</p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img
                  src={profileImage}
                  alt="profile card"
                  className="home__hero-img"
                  loading="lazy"
                />
              </div>
            </div>
            {/* <div className="skills-container">
              <h1 className="skills">{skills}</h1>
              <p>{skillItemOne}</p>
              <p>{skillItemTwo}</p>
              <p>{skillItemThree}</p>
              <p>{skillItemFour}</p>
              <p>{skillItemFive}</p>
            </div> */}
          </div>
          <div className="showcase-skills">
            <div className="skills-header">
              <h1 className="skills-title">Skills</h1>
              <div className="skills-body">
                <div className="skills-body-items">
                  <div className="skills-header">
                    <h3>Frontend Development</h3>
                    <FaReact className="skill-icon" />
                    <div className="skill">
                      <p>HTML</p>
                      <p>CSS</p>
                      <p>SCSS</p>
                      <p>Javascript</p>
                      <p>Basic React</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

HeroSection.defaultProps = {
  title: "Hi, I'm Luke",
  skills: 'Top Skills',
  introText: `I'm passionate about solving technical problems and coming up
  with creative solutions. I enjoy working with the JAMstack &
  various automation technologies.`,
  skillItemOne: 'Automation (ansible / bash scripting)',
  skillItemTwo: 'HTML, CSS, SASS',
  skillItemThree: 'Basic vanilla Javascript',
  skillItemFour: 'Basic React',
  skillItemFive: 'Technical Support',
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  introText: PropTypes.string.isRequired,
  skillItemOne: PropTypes.string.isRequired,
  skillItemTwo: PropTypes.string.isRequired,
  skillItemThree: PropTypes.string.isRequired,
  skillItemFour: PropTypes.string.isRequired,
  skillItemFive: PropTypes.string.isRequired,
};

export default HeroSection;
