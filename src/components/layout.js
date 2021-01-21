import React from "react"
import { Link } from "gatsby"
import { theme } from '../styles/Theme';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

const Layout = ({ location, title, children }) => {
  return (
    <>
      <Nav theme={theme} />
      {children}
      <Footer theme={theme} />
    </>
  )
}

export default Layout
