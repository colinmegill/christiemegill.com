/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"
import { Link } from "gatsby"

const Nav = props => (
  <Flex>
    <Box sx={{ my: 8 }}>
      <Link
        {...props}
        activeClassName="active"
        sx={{
          mr: 10,
          fontFamily: "heading",
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
          mr: 6,
          fontFamily: "heading",
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
          mr: 6,
          fontFamily: "heading",
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
          mr: 6,
          fontFamily: "heading",
          color: "inherit",
          "&.active": {
            color: "primary",
          },
        }}
        to="/contact/"
      >
        Contact
      </Link>
    </Box>
  </Flex>
)

export default Nav
