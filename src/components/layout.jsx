/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { GlobalStyle } from '../styles/GlobalStyles';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
