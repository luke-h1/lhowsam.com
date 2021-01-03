import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyles';
import { theme } from '../styles/Themes';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout: React.FC<{children: Node}> = (props) => {
  const children = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Navbar theme={theme} />
        {children}
        <Footer theme={theme} />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
