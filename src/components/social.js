import { Link } from "gatsby"
import React from "react"
import Twitter from "./twitter"
import Instagram from "./instagram"

const Social = () => (
  <div
    style={{
      marginBottom: 40,
      width: "100%",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <a
      style={{ marginRight: 20 }}
      href="https://www.twitter.com/christiemegill"
    >
      <Twitter />
    </a>
    <a href="https://www.instagram.com/christietellsastory">
      <Instagram />
    </a>
  </div>
)

export default Social
