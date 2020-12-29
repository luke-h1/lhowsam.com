import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ theme }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              Luke H
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about" onClick={closeMobileMenu}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/blog" onClick={closeMobileMenu}>
                  Blog
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/projects" onClick={closeMobileMenu}>
                  projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact" onClick={closeMobileMenu}>
                  Contact
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                <NavBtnLink />
              </NavItemBtn>
              <NavItemBtn />
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </>
    </ThemeProvider>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Navbar;
