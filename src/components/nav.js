/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { Link } from "gatsby"

const Nav = props => (
  <Box sx={{ my: 4 }}>
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
)

export default Nav
