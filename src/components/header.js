import React from "react"
import { Styled } from "theme-ui"

const Header = ({ siteTitle }) => (
  <header>
    <Styled.h1>{siteTitle}</Styled.h1>
  </header>
)

export default Header
