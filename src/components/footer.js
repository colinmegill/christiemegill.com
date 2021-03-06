import Social from "./social"
import { Styled } from "theme-ui"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer = props => (
  <footer
    sx={{
      fontSize: 1,
      mt: 3,
    }}
  >
    <div
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
        px: 2,
        py: 4,
      }}
    >
      <Social />
      <Styled.p sx={{ p: 2, fontSize: 3 }}>© 2020 Christie Megill</Styled.p>
    </div>
  </footer>
)

export default Footer

// <div>
//   <a href="https://www.twitter.com/christiemegill">
//     <Twitter />
//   </a>
//   <a href="https://www.instagram.com/christietellsastory">
//     <Instagram />
//   </a>
// </div>
