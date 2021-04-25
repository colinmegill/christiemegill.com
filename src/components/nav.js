/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"
import { Link } from "gatsby"

const Nav = props => (
  <Flex>
    <Flex sx={{ my: 3, mx: "auto", justifyContent: "flex-end" }}>
      <Link
        {...props}
        activeClassName="active"
        sx={{
          mx: 3,
          fontFamily: "heading",
          fontSize: [4],
          color: "inherit",
          "&.active": {
            color: "primary",
          },
        }}
        to="/"
      >
        Home
      </Link>
      <Link
        {...props}
        activeClassName="active"
        sx={{
          mx: 3,
          fontFamily: "heading",
          fontSize: [4],
          color: "inherit",
          "&.active": {
            color: "primary",
          },
        }}
        to="/about/"
      >
        About
      </Link>
      <Link
        {...props}
        activeClassName="active"
        sx={{
          mx: 3,
          fontFamily: "heading",
          fontSize: [4],
          color: "inherit",
          "&.active": {
            color: "primary",
          },
        }}
        to="/writing/"
      >
        Writing
      </Link>
      <Link
        {...props}
        activeClassName="active"
        sx={{
          mx: 3,
          fontFamily: "heading",
          fontSize: [4],
          color: "inherit",
          "&.active": {
            color: "primary",
          },
        }}
        to="/contact/"
      >
        Contact
      </Link>
    </Flex>
  </Flex>
)

export default Nav
