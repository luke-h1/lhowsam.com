import React, { Fragment } from 'react';
import profileImage from '../images/luke.png';
import './HeroSection.css';
function HeroSection({ lightBg }) {
  return (
    <Fragment>
      <div
        className={'home__hero-section darkBg'}
      >
        <div className="container">
          <div className="row home__hero-row">
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">Hi, I'm Luke</div>
                <p className="paragraph">
                  I'm passionate about solving technical problems and coming up
                  with creative solutions.I enjoy working with the JAMstack &
                  various automation technologies.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img
                  src={profileImage}
                  alt="profile card"
                  className="home__hero-img"
                />
              </div>
            </div>
            <div className="skills-container">
              <h1 className='skills'>Top Skills</h1>
              <p>Automation (ansible / bash scripting)</p>
              <p>HTML, CSS</p>
              <p>Basic vanilla Javascript</p>
              <p>Basic React </p>
              <p>Technical Support</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HeroSection;
