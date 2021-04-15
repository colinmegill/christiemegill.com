/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"
import { Link } from "gatsby"

const Nav = props => (
  <Flex>
    <Box sx={{ my: 4 }}>
      <Link
        {...props}
        activeClassName="active"
        sx={{
          mr: 8,
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
          mr: 4,
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
          mr: 4,
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
          mr: 4,
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
