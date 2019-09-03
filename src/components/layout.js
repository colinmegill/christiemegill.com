/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Social from "./social"

import Header from "./header"
import Nav from "./nav"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div style={{ margin: 20, border: "1px solid black" }}>
      <Header siteTitle={"Christie Megill"} />
      <Nav />
      <Social />
      <div
        style={{
          margin: `0 auto`,
          // padding: `0px 1.0875rem 1.45rem`,
          padding: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

//
// <footer
//   style={{ backgroundColor: "black", color: "white", padding: 10 }}
// >
//   © {new Date().getFullYear()}, Christie Megill
// </footer>
