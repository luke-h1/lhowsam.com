import React from 'react';
import { FaLinkedin, FaGithub, FaChevronUp } from 'react-icons/fa';
import { BiChevronUp } from 'react-icons/bi';
const Footer = () => {
  const scrollClick = () => {
    const rootEl = document.documentElement;

    rootEl.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <div className="btn-container">
        <button className="scrollToTopBtn" onClick={scrollClick}>
          <BiChevronUp className="icon-sm" />
        </button>
      </div>

      <section className="s2">
        <div className="main-container">
          <h3 className="h3-center">Contact Me</h3>
          <div className="icon-container">
            <a
              className="social-list__link"
              href="https://github.com/luke-h1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon-lg" aria-hidden="true"></FaGithub>
            </a>
            <a
              className="social-list__link"
              href="https://www.linkedin.com/in/lukehowsam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon-lg" aria-hidden="true"></FaLinkedin>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
