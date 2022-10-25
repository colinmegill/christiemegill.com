/** @jsx jsx */
import { jsx } from "theme-ui"
import { Styled, Box } from "theme-ui"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"

import SEO from "../components/seo"

const SecondPage = () => {
  const photo = useStaticQuery(graphql`
    query {
      eg: file(relativePath: { eq: "eigthgrade.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <div>
        <Styled.p>
          Christie Megill is a middle grade writer from New England. She studied English Literature at Fordham University, worked as a bookseller at Borders Books and Music in Columbus Circle, served as a longtime volunteer at the Housing Works Bookstore in SoHo, was an editorial
          assistant at an academic press in New York City, became an early elementary school teacher, and recently returned to the professional side of publishing.   
        </Styled.p>
        <Styled.p>
          Christie is an Associate Agent at The CAT Agency, working with illustrators and picture book authors. She previously held internships at Writers House, Triada US, and Cardinal Rule Press.
        </Styled.p>
        <Styled.p>
          When she isn’t writing, she spends her time baking butter-laden
          desserts, hiking through the woods, and practicing her tree pose with
          the forest fairies.​
        </Styled.p>
        <Styled.p>Represented by Kristin Ostby at Greenhouse Literary</Styled.p>
        
      </div>
      <Box
        sx={{
          width: 250,
          mx: "auto",
          my: 32,
        }}
      >
        <Img fluid={photo.eg.childImageSharp.fluid} />
      </Box>
    </Layout>
  )
}

export default SecondPage
