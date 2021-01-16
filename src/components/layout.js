import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav/Nav';
import { theme } from '../styles/Theme';
import { GlobalStyle } from '../styles/GlobalStyles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Nav theme={theme} />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
