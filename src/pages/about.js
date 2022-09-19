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
          Christie Megill is a middle grade writer from New England. Her life has always revolved around books, stories, and the magic found in words.
          She studied English Literature at Fordham University, worked as a bookseller at Borders Books and Music in Columbus Circle, served as a longtime volunteer at the Housing Works Bookstore in SoHo, was an editorial
          assistant at an academic press in New York City, became an early
          elementary school teacher, and recently returned to the professional side of publishing. Christie is an Associate Agent at The CAT Agency, working with illustrators and picture book authors. She previously held internships at Writers House, Triada US, and Cardinal Rule Press.  
        </Styled.p>
        <Styled.p>
          When she isn’t writing, she spends her time baking butter-laden
          desserts, hiking through the woods, and practicing her tree pose with
          the forest fairies.​
        </Styled.p>
        <Styled.p>Represented by Kristin Ostby at Greenhouse Literary</Styled.p>
        <Styled.h3>Facts About Christie</Styled.h3>
        <Styled.ol>
          <Styled.li>
            Christie once lived down the street from a chocolate factory. She
            has also lived on an island, on a farm, and is planning to someday
            dwell in a tree house.
          </Styled.li>
          <Styled.li>
            She owns a copy of every Baby-Sitter’s Club paperback book.
          </Styled.li>
          <Styled.li>Cats are her favorite animal.</Styled.li>
          <Styled.li>
            Cross-country running was her high school sport.
          </Styled.li>
          <Styled.li>
            In middle school, she collected cookie cutters, Breyer horses, and
            quotes from scary movies.
          </Styled.li>
          <Styled.li>
            Christie still has her middle school diaries and occasionally, she
            re-reads them.
          </Styled.li>
        </Styled.ol>
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
