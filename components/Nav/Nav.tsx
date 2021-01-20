import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeProvider } from "styled-components";
import NavData from "../../data/nav.json";
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
} from "./NavStyles";

interface NavInt {
  title: string;
  slug: string;
}

const Nav: React.FC<{ theme: String }> = ({ theme }) => {
  const [click, setClick] = useState(false);
  const handleClick: Object = () => setClick(!click);
  const closeMobileMenu: Object = () => setClick(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        <NavWrapper>
          <NavbarContainer>
            <NavLogo href="/" onClick={closeMobileMenu}>
              <a>
                <NavIcon />
              </a>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks href="/" onClick={closeMobileMenu}>
                  <a>Home</a>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="/about" onClick={closeMobileMenu}>
                  <a>Home</a>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="/projects" onClick={closeMobileMenu}>
                  <a>Home</a>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="/blog" onClick={closeMobileMenu}>
                  <a>Home</a>
                </NavLinks>
              </NavItem>
              <NavItemBtn>{/* <NavBtnLink href='test'/> */}</NavItemBtn>
              <NavItemBtn />
            </NavMenu>
          </NavbarContainer>
        </NavWrapper>
      </>
    </ThemeProvider>
  );
};

export default Nav;
