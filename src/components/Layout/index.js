
import React from "react"
import PropTypes from "prop-types"
import Menu from "../Menu"
import MenuBar from "../MenuBar"
import GlobalStyles from '../../styles/global'
import { TransitionPortal } from "gatsby-plugin-transition-link"

const Layout = ({ children }) => {

  return (
    <div id="root">
      <GlobalStyles />
      <TransitionPortal level="top">
        <Menu />
      </TransitionPortal>
      <main>{children}</main>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </ div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
