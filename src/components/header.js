import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: 10,
    }}
  >
    <p style={{ fontSize: "3em", fontFamily: "Mystery Quest" }}>
      {" "}
      Christie Megill{" "}
    </p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
