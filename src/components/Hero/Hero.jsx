import React from 'react';
import styles from './Hero.module.scss';
import profileImage from '../../images/luke.jpeg';
const Hero = ({ title, introduction }) => {
  return (
    <>
      <div className={styles.homeHeroSection}>
        <div className={styles.gridContainer}>
          <h1>{title}</h1>
          <div className={styles.introductionContainer}>
            <p>{introduction}</p>
            <hr />
            <ul className={styles.list}>
              <h3>More About Me</h3>
              <li className={styles.collectionItem}>
                🌱 I’m currently learning ... Javascript, React & Jest
              </li>
              <li className={styles.collectionItem}>
                {' '}
                💚 I enjoying working on ... React, Testing methodologies and
                frameworks (following best practices, unit testing), Automation
                technologies (Ansible, bash ) & OOS projects
              </li>
            </ul>
          </div>

          <img src={profileImage} className={styles.heroImage} alt="" />
        </div>
      </div>
    </>
  );
};
Hero.defaultProps = {
  title: "Hi I'm Luke 👋",
  introduction:
    "I'm passionate about various web technologies and making the web fast & accesible to everyone. I strive to write clean, robust & reusable code.",
};

export default Hero;
