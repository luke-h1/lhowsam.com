import React from 'react';

const Footer = () => {
  return (
    <div>
      <button className='scrollToTopBtn'>
        <i className='fa fa-angle-up up-icon' aria-hidden='true'></i>
      </button>

      <section className='s2'>
        <div className='main-container'>
          <h3 className='h3-center'>Contact Me</h3>
          <div className='icon-container'>
            <a
              className='social-list__link'
              href='https://github.com/luke-h1/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-github fa-3x' aria-hidden='true'></i>
            </a>
            <a
              className='social-list__link'
              href='https://www.linkedin.com/in/lukehowsam/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-linkedin fa-3x' aria-hidden='true'></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
