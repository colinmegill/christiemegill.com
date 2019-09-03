import { Link } from "gatsby"
import React from "react"

const Nav = () => (
  <div
    style={{
      marginBottom: 40,
      fontSize: "1.3em",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Link
      to="/"
      style={{
        color: `black`,
        textDecoration: `none`,
        marginRight: 20,
      }}
    >
      Home
    </Link>
    <Link
      style={{
        color: `black`,
        textDecoration: `none`,
        marginRight: 20,
      }}
      to="/about/"
    >
      About
    </Link>
    <Link
      style={{
        color: `black`,
        textDecoration: `none`,
        marginRight: 20,
      }}
      to="/writing/"
    >
      Writing
    </Link>
    <Link
      style={{
        color: `black`,
        textDecoration: `none`,
      }}
      to="/contact/"
    >
      Contact
    </Link>
  </div>
)

export default Nav
