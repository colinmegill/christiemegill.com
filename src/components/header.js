import PropTypes from "prop-types"
import React from "react"
import { Styled } from "theme-ui"

const Header = ({ siteTitle }) => (
  <header>
    <Styled.h1>{siteTitle}</Styled.h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
