import React, { Fragment } from 'react';
import ProfileImage from '../../Images/luke.png';
import './HeroSection.scss';
import { FaReact } from 'react-icons/fa';
import { BsTools } from 'react-icons/bs';
import PropTypes from 'prop-types';
const HeroSection = ({ title, introTextPt1, introTextPt2, subTitle }) => {
  return (
    <Fragment>
      <div className={'home__hero-section darkBg'}>
        <div className="container">
          <div className="row home__hero-row">
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{title}</div>
                <h2 className="sub-title">{subTitle}</h2>
                <p className="paragraph">{introTextPt1}</p>
                <p className="paragraph-2">{introTextPt2}</p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img
                  src={ProfileImage}
                  alt="profile card"
                  className="home__hero-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <h1 className="skills-title">Skills</h1>
          <div className="skills-body">
            <div className="skills-body-items">
              <div className="skills-header">
                <h3>
                  Frontend Development <FaReact className="skill-icon" />
                </h3>
                <div className="skill">
                  <p>CSS</p>
                  <p>SCSS</p>
                  <p>Javascript</p>
                  <p>Basic React</p>
                </div>
              </div>
              <div className="skills-header">
                <h3>
                  Tools <BsTools className="skill-icon" />
                </h3>
                <div className="skill">
                  <p>Automation</p>
                  <p>Ansible</p>
                  <p>Bash</p>
                  <p>Linux</p>
                  <p>Git / Github</p>
                  <p>Jira</p>
                  <p>Confluence</p>
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
  subTitle: 'About Me',
  skills: 'Top Skills',
  introTextPt1: ` I'm passionate about various web technologies and making the web fast & accesible to everyone. I strive to write clean, robust & reusable code.`,
  introTextPt2: `This means that I strive to follow best practices and utilize industry standard tools such as git-flow, continuous integration (github actions, travisCI), linting (ESlint, prettier) and package management (NPM)`,
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  introTextPt1: PropTypes.string.isRequired,
  introTextPt2: PropTypes.string.isRequired,
};

export default HeroSection;
