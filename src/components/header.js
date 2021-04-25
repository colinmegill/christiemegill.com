import React from "react"
import { Styled } from "theme-ui"

const Header = ({ siteTitle }) => (
  <header style={{width: "100%"}}>
    <Styled.h1 style={{width: "100%", textAlign: "center"}}>{siteTitle}</Styled.h1>
  </header>
)

export default Header
