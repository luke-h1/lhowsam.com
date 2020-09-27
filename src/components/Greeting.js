/* eslint-disable jsx-a11y/img-redundant-alt */
import React  from 'react';
import profileImage from '../assets/images/luke.png';
import Darkmode from './Darkmode';

const Greeting = () => {
  return (
    <section className='s1'>
      <div className='main-container'>
        <div className='greeting-wrapper'>
          <h2 className='h2-intro-text' id='intro'>
            Hi, I'm Luke Howsam
          </h2>
        </div>

        <Darkmode />
        <div className='intro-wrapper'>
          <div className='nav-wrapper'>
            <div className='dots-wrapper'>
              <div id='dot-1' className='browser-dot'></div>
              <div id='dot-2' className='browser-dot'></div>
              <div id='dot-3' className='browser-dot'></div>
            </div>
          </div>

          <div className='left-column'>
            <img src={profileImage} id='profile_pic' alt='profile image' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
