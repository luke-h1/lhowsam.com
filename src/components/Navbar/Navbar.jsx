import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiCodeAlt } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { IconContext } from 'react-icons/lib';
import PropTypes from 'prop-types';
import './Navbar.scss';
const Navbar = ({ iconStyles, navLinkStyles }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link
              to="/"
              className="navbar-logo"
              onClick={closeMobileMenu}
              onBlur={closeMobileMenu}
            >
              <BiCodeAlt className={iconStyles} />
              {/* <p className="lead">{title}</p> */}
            </Link>
            <div
              className="menu-icon"
              onClick={handleClick}
              onBlur={handleClick}
            >
              {click ? <FaTimes /> : <GoThreeBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link
                  to="/"
                  className={navLinkStyles}
                  onClick={closeMobileMenu}
                  onBlur={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  className={navLinkStyles}
                  onClick={closeMobileMenu}
                  onBlur={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className={navLinkStyles}
                  onClick={closeMobileMenu}
                  onBlur={closeMobileMenu}
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

Navbar.defaultProps = {
  iconStyles: 'navbar-icon',
  navLinkStyles: 'nav-links',
};


export default Navbar;
