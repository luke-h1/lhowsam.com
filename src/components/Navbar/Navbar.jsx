import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/Themes';

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
import { ThemeSwitchButton } from '../utils/Buttons/ThemeSwitchButton';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <>
        <IconContext.Provider value={{ color: '#000' }}>
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
                    <ThemeSwitchButton
                      round="true"
                      primary="true"
                      onClick={() => setUseDarkTheme(false)}
                    >
                      Switch Theme
                      {/* icon goes here depending on what state the theme is in */}
                      {/* TODO: Add onClick handler to this */}
                    </ThemeSwitchButton>
                  </NavBtnLink>
                </NavItemBtn>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default Navbar;
