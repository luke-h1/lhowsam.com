import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FiDroplet } from 'react-icons/fi';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import PropTypes from 'prop-types';
import './Navbar.scss';

const Navbar = ({ title, iconStyles, navLinkStyles }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link
              to="/"
              className="navbar-logo"
              onClick={closeMobileMenu}
              onBlur={closeMobileMenu}
            >
              <FiDroplet className={iconStyles} />
              <p className="lead">{title}</p>
            </Link>
            <div
              className="menu-icon"
              onClick={handleClick}
              onBlur={handleClick}
            >
              {click ? <FaTimes /> : <FaBars />}
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
    </Fragment>
  );
};

Navbar.defaultProps = {
  title: 'Luke Howsam',
  iconStyles: 'navbar-icon',
  navLinkStyles: 'nav-links',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;