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
      headshot: file(relativePath: { eq: "New.jpg" }) {
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
        sx={{
          flexDirection: ["column", "row"],
          alignItems: "center",
          justifyContent: "space-between",
          my: [5],
        }}
      >
        <Box sx={{ mr: [0, 4] }}>
          <Img
            sx={{
              mb: [4, 0],
              borderRadius: 999,
              width: [200, 300],
              height: [200, 300],
            }}
            fluid={headshot.headshot.childImageSharp.fluid}
          />
        </Box>
        <Box sx={{ width: [230, 400] }}>
          <Styled.p sx={{ fontSize: [4, 5] }}>
            Middle Grade Fiction and 
            Children's Literature 
          
          </Styled.p>
        </Box>
      </Flex>
    </Layout>
  )
}

export default IndexPage
