import { Link } from "gatsby"
import React from "react"
import Twitter from "./twitter"
import Instagram from "./instagram"

const Social = props => (
  <div
    style={{
      marginBottom: 40,
      width: "100%",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
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
    <div
      style={{
        width: "100%",
        display: props.footer ? "flex" : "none",
        justifyContent: "center",
      }}
    >
      <p>© Christie Megill 2019</p>
    </div>
  </div>
)

export default Social
