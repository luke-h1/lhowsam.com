/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import useBreakpointRange from '@src/hooks/useBreakpointRange';
import { IconContainer } from '@src/styles/blog';
import { sharedTransition } from '@src/styles/components';
import { LinkTo } from '@src/styles/typography';
import { breakpoint } from '@src/utils/style';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import styled, { css, ThemeContext } from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  justify-self: end;
  place-items: center;
  justify-content: center;
`;

const NavLink = styled(LinkTo)`
  border: none !important;
  color: var(--color-primary);
  &:hover {
    color: var(--color-primary-accent);
  }
`;

const ThemeSwitch = styled(IconContainer).attrs({ as: 'button' })``;

const MobileMenuToggle = styled(IconContainer).attrs({ as: 'button' })`
  color: var(--color-primary-accent);
  ${breakpoint.from.md(css`
    display: none;
  `)}
`;

const Header = styled.header`
  position: sticky;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: calc(40px + 2rem);
  padding: 0 1rem;
  background-color: var(--color-background);
  ${sharedTransition('color, background-color')}
  ${IconContainer}, ${ThemeSwitch}, ${MobileMenuToggle} {
    z-index: 10;
  }
`;

const HeaderInner = styled.div`
  padding: 1rem 0;
  margin: 0 auto;
  width: 100%;
  max-width: var(--max-width);
  display: grid;
  grid-template-columns: max-content auto;
  align-content: center;
  gap: 2rem;
`;

const Nav = styled.nav`
  display: contents;
  padding-right: 2rem;
  width: min-content;
`;

const navLinksMixin = css`
  display: grid;
  list-style: none;
  ${breakpoint.from.md(css`
    display: contents;
  `)}
`;

const PageLinks = styled.ul`
  ${navLinksMixin}
`;

const IconLinks = styled.ul`
  ${navLinksMixin}
  ${breakpoint.until.md(css`
    grid-auto-flow: column;
    gap: 2rem;
    /* padding: 0.5rem 1rem; */
    width: min-content;
  `)}
	& > li {
    padding: 0;
  }
`;

const NavLinksDesktop = styled.div`
  display: none;
  ${breakpoint.from.md(css`
    display: contents;
  `)}
`;

const FullScreenWrapper = styled(motion.div)<{ visible: boolean }>`
  height: 100vh;
  width: 100vw;
  background-color: var(--color-bg-blurred);
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  align-content: center;
  ${({ visible }) =>
    visible
      ? css`
          pointer-events: auto;
        `
      : css`
          pointer-events: none;
        `}
  ${Nav} {
    display: grid;
    gap: 2rem;
    & > ${PageLinks}, ${IconLinks} {
      padding-left: 3rem;
      font-size: 1.5rem;
      width: min-content;
    }
    & > ${PageLinks} > li {
      padding: 0.5rem 0;
    }
  }
  ${breakpoint.from.md(css`
    display: none;
  `)}
`;

const NavContainer = styled(motion(Container))<{ $showDrawer: boolean }>``;

const variants: Variants = {
  open: { opacity: 1, transition: { staggerChildren: 0.1 } },
  closed: { opacity: 0 },
};

const textLinksVariants: Variants = {
  open: { x: 0, opacity: 1 },
  closed: { x: '-100%', opacity: 0 },
};

const iconLinksVariants: Variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const NavLinks = () => {
  return (
    <Nav>
      <PageLinks>
        <motion.li variants={textLinksVariants}>
          <NavLink href="/blog">Blog</NavLink>
        </motion.li>
        <motion.li variants={textLinksVariants}>
          <NavLink href="/projects">Projects</NavLink>
        </motion.li>
        <motion.li variants={textLinksVariants}>
          <NavLink href="/code-snippets">Snippets</NavLink>
        </motion.li>
      </PageLinks>
      <IconLinks>
        <motion.li variants={iconLinksVariants}>
          <IconContainer
            href="https://github.com/luke-h1"
            target="_blank"
            rel="noopener noreferrer"
            $styledOnHover
          >
            <FaGithub
              aria-label="GitHub"
            />
          </IconContainer>
        </motion.li>
      </IconLinks>
    </Nav>
  );
};

const NavbarMenu = () => {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);
  const { theme } = useContext(ThemeContext);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_isMobileLayout, setIsMobileLayout] = useState<boolean | undefined>(
    undefined
  );
  const { asPath } = useRouter();

  const handleMobileOnEnter = () => {
    setIsMobileLayout(true);
  };

  const handleMobileOnLeave = () => {
    setIsMobileLayout(false);
  };

  useBreakpointRange(
    { to: 'md' },
    { onEnter: handleMobileOnEnter, onLeave: handleMobileOnLeave }
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue: 'light' | 'dark' = root.style.getPropertyValue(
      '--initial-color-mode'
    ) as 'light' | 'dark';
    setDarkTheme(initialColorValue === 'dark');
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('theme', 'dark');
    }
    document.documentElement.removeAttribute('data-theme');
    window.localStorage.setItem('theme', 'light');
  }, [darkTheme]);

  useEffect(() => {
    if (theme) setDarkTheme(theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const handleKeyboardDarkModeToggle = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'l' && event.shiftKey && event.metaKey) {
        event.preventDefault();
        setDarkTheme(!darkTheme);
      }
    };
    window.addEventListener('keydown', handleKeyboardDarkModeToggle);

    return () => {
      window.removeEventListener('keydown', handleKeyboardDarkModeToggle);
    };
  }, [darkTheme]);

  useEffect(() => {
    setShowDrawer(false);
    document.body.style.removeProperty('overflow');
  }, [asPath]);


  const handleToggleDrawer = () => {
    setShowDrawer((showDrawer) => {
      const nextState = !showDrawer;

      if (nextState === true) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.removeProperty('overflow');
      }
      return nextState;
    });
  };

  return (
    <AnimatePresence>
      <NavContainer $showDrawer={showDrawer} key="navigation">
        <NavLinksDesktop>
          <NavLinks />
        </NavLinksDesktop>
        <MobileMenuToggle
          onClick={handleToggleDrawer}
          aria-label={showDrawer ? 'Close menu' : 'Open menu'}
        >
          {showDrawer ? (
            <FiX aria-label="Open menu" title="Open menu" />
          ) : (
            <FiMenu aria-label="Open menu" title="Open menu" />
          )}
        </MobileMenuToggle>
      </NavContainer>
      <FullScreenWrapper
        key="mobile-navigation"
        aria-label="mobile-navigation"
        visible={showDrawer}
        variants={variants}
        initial="closed"
        animate={showDrawer ? 'open' : 'closed'}
        transition={{ type: 'spring', stiffness: 180, damping: 20 }}
      >
        <NavLinks />
      </FullScreenWrapper>
    </AnimatePresence>
  );
};

const Navbar = () => {
  return (
    <Header>
      <HeaderInner>
        <Link href="/" passHref scroll>
          <IconContainer tabIndex={0}>
            <BsCodeSlash />
          </IconContainer>
        </Link>
        <NavbarMenu />
      </HeaderInner>
    </Header>
  );
};
export default Navbar;