import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import NavData from '../../data/nav.json';
import {
  NavWrapper,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from './NavElements';

interface NavInt {
  title: string;
  slug: string;
}

const Nav: React.FC<{theme: String}> = ({ theme }) => {
  const [click, setClick] = useState(false);
  const handleClick: Object = () => setClick(!click);
  const closeMobileMenu: Object = () => setClick(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        <NavWrapper>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
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
        </NavWrapper>
      </>
    </ThemeProvider>
  );
};

export default Nav;
