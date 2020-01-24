/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box, Styled } from "theme-ui"
import Layout from "../components/layout"
import Img from "gatsby-image"

import SEO from "../components/seo"

const IndexPage = () => {
  const headshot = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "CM.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Flex
        sx={{ alignItems: "center", justifyContent: "space-between", my: 6 }}
      >
        <Box sx={{ width: "30vw" }}>
          <Img
            sx={{ border: "6px solid #f5dea3" }}
            fluid={headshot.headshot.childImageSharp.fluid}
          />
        </Box>
        <Box sx={{ width: [230, 400] }}>
          <Styled.p sx={{ fontSize: [2, 4] }}>
            Christie Megill is a middle grade author who writes hopeful stories,
            earnest characters, and wholehearted daydreams.
          </Styled.p>
        </Box>
      </Flex>
    </Layout>
  )
}

export default IndexPage
