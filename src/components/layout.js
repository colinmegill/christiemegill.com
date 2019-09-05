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
    <div style={{ margin: 50, border: "1px solid black", borderRadius: 5 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Header siteTitle={"Christie Megill"} />
        <Nav />
        <Social />
        <div
          style={{
            padding: 0,
            minHeight: 800,
          }}
        >
          <main>{children}</main>
        </div>
      </div>
      <div>
        <Social footer />
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
