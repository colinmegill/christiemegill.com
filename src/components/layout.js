/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { ThemeProvider } from "theme-ui"
import { Container } from "@theme-ui/components"

import PropTypes from "prop-types"

import Header from "./header"
import Nav from "./nav"
import theme from "../../theme"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div>
          <Header siteTitle={"Christie Megill"} />
          <Nav />
          <div>
            <main>{children}</main>
          </div>
        </div>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
