/* eslint-disable */
import React from "react"
import { Link } from "gatsby"
import { GlobalStyle } from "../styles"

const Layout = ({ location, title, children }) => {
  return (
    <>
      <GlobalStyle />

      <div>{children}
      <h1>Hello World</h1>
      </div>
    </>
  )
}

export default Layout
