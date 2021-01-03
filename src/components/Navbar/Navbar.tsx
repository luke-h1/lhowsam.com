import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import NavData from '../../data/nav.json';
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

const Navbar: React.FC<{theme: String}> = (props) => {
  const theme = props;
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
              lhowsam
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {NavData.map((item) => (
                <NavItem>
                  <NavLinks to={item.slug} onClick={closeMobileMenu}>
                    {item.title}
                  </NavLinks>
                </NavItem>
              ))}
              <NavItemBtn>
                <NavBtnLink href="#" />
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
