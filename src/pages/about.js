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
          Christie Megill is a middle grade author and Associate Agent at The CAT Agency, working with illustrators and picture book authors. She has experience at Writers House, Triada US, and Cardinal Rule Press, and has previously worked in the editorial department at an academic press and as a children’s bookseller. Christie also has a background in elementary education as a classroom teacher, curriculum designer, and literacy learning advocate. She serves as an administrator for MG Book Village and as a founding member of the Village Page Turners middle grade book club. Originally from Connecticut, she now considers New York City her forever home.    
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
