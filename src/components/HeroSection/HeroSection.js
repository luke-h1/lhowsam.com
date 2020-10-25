import React, { Fragment } from 'react';
import profileImage from '../../images/luke.png';
import './HeroSection.scss';
import PropTypes from 'prop-types';
const HeroSection = ({ title, introTextPt1, introTextPt2, subTitle }) => {
  return (
    <Fragment>
      <div className='home__hero-section darkBg'>
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
                  src={profileImage}
                  alt="profile card"
                  className="home__hero-img"
                  loading="lazy"
                />
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
