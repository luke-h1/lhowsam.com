/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import profileImage from '../assets/images/luke.png';
const Greeting = () => {
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
  }, []);

  const onClick = (e) => {
    const currentTheme = localStorage.getItem('theme');
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else if (!e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };
  return (
    <section className='s1'>
      <div className='main-container'>
        <div className='greeting-wrapper'>
          <h2 className='h2-intro-text' id='intro'>
            Hi, I'm Luke Howsam
          </h2>
        </div>

        <div className='theme-switcher'>
          <input
            type='checkbox'
            className='checkbox'
            id='checkbox'
            name='checkbox'
            onClick={onClick}
          />
          <label className='label' htmlFor='checkbox'>
            <i className='fa fa-moon'></i>
            <i className='fa fa-sun'></i>
            <div className='ball'></div>
          </label>
        </div>
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
