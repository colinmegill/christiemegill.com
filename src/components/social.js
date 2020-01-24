/** @jsx jsx */
import { jsx } from "theme-ui"

import Twitter from "./twitter"
import Instagram from "./instagram"

const Social = props => (
  <div sx={{ mx: 2 }}>
    <a sx={{ mx: 2 }} href="https://www.twitter.com/christiemegill">
      <Twitter />
    </a>
    <a href="https://www.instagram.com/christietellsastory">
      <Instagram />
    </a>
  </div>
)

export default Social
