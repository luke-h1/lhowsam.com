import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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

interface NavInt {
  title: string;
  slug: Number;
}

const Navbar: React.FC<{theme: String}> = (props) => {
  const theme = props;
  const [click, setClick] = useState(false);
  const handleClick: Object = () => setClick(!click);
  const closeMobileMenu: Object = () => setClick(false);

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
              {NavData.map((item: NavInt) => (
                <NavItem>
                  <NavLinks to={item.slug} onClick={closeMobileMenu}>
                    {item.title}
                  </NavLinks>
                </NavItem>
              ))}
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

export default Navbar;
