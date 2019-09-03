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
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log("HEADSHOT", headshot)

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ minHeight: 1000 }}>
        <div
          style={{
            maxWidth: 800,
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: 300, flexShrink: 0 }}>
            <Img fluid={headshot.headshot.childImageSharp.fluid} />
          </div>
          <p style={{ marginLeft: 20, width: 300 }}>
            Christie Megill is a middle grade author who writes hopeful stories,
            earnest characters, and wholehearted daydreams.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
