import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
      <div>
        <div>
          <Img fluid={headshot.headshot.childImageSharp.fluid} />
          <p>
            Christie Megill is a middle grade author who writes hopeful stories,
            earnest characters, and wholehearted daydreams.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
