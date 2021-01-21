/* eslint-disable */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Nav from "./Nav/Nav"
import { theme } from "../styles/Theme"
import { GlobalStyle } from "../styles/GlobalStyles"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

// const Layout = ({ children }) => (
//   <>
//     <GlobalStyle />
//     <Nav theme={theme} />
//     {children}
//     <Footer theme={theme} />
//   </>
// );

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout
