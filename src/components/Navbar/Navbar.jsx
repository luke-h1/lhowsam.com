/* eslint-disable no-undef */
/* eslint-disable */
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/Themes';
import { NavContactButton } from '../utils/Buttons/NavContactButton';
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
import {Button} from '../utils/Buttons/Button/Button';
function Navbar({ theme, toggleTheme }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <ThemeProvider theme={lightTheme}>
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
                  <NavLinks to="/projects" onClick={closeMobileMenu}>
                    Projects
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/blog" onClick={closeMobileMenu}>
                    Blog
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/contact" onClick={closeMobileMenu}>
                    Contact
                  </NavLinks>
                </NavItem>
                <NavItemBtn>
                  <NavBtnLink>
                    <Button theme={theme} toggleTheme={toggleTheme} onClick={toggleTheme}>
                      Switch Theme
                    </Button>
                  </NavBtnLink>
                </NavItemBtn>
                <NavItemBtn>
                </NavItemBtn>
              </NavMenu>
            </NavbarContainer>
          </Nav>
      </>
    </ThemeProvider>
  );
}

export default Navbar;
