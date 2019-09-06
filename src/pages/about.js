import React from "react"
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
      <div
        style={{
          maxWidth: 600,
          margin: "auto",
          padding: 20,
        }}
      >
        <h1 style={{ fontFamily: "Mystery Quest" }}>About Christie</h1>
        <p>
          Christie Megill is a middle grade fiction writer. She has been writing
          stories since as far back as she can remember, before she was a middle
          grade reader herself.
        </p>

        <p>
          In some form or another, her life has always revolved around books and
          stories. She majored in English Literature at Fordham University,
          worked as a bookseller at Borders after college, was an editorial
          assistant at an academic press in New York City, became an early
          elementary school teacher in the Pacific Northwest, and now writes
          books for kids while homeschooling her own young children.
        </p>

        <p>
          In addition to children’s fiction, Christie writes short stories for
          adults and essays on topics such as motherhood, homeschooling, and
          progressive education.
        </p>
        <p>
          When she isn’t writing, she spends her time baking butter-laden
          desserts, hiking through the woods, and practicing her tree pose with
          the forest fairies.​
        </p>
        <p>SCBWI Member</p>
        <h1 style={{ fontFamily: "Mystery Quest" }}>True Facts</h1>
        <ol>
          <li>
            She once lived down the street from a chocolate factory. She has
            also lived on an island, on a farm, and is planning to someday dwell
            in a tree house.
          </li>
          <li>She owns a copy of every Baby-sitter’s Club paperback book.</li>
          <li>Her Harry Potter house is Gryffindor.</li>
          <li>
            She bakes the same buttercream-frosted chocolate cake for her
            birthday every year.
          </li>
          <li>Cross-country running was her high school sport.</li>
          <li>
            She strongly identifies with Officer Judy Hopps, of Zootopia fame.
          </li>
          <li>
            Christie's 12 year-old theme song was Truly Madly Deeply.
          </li>
        </ol>
      </div>
      <div
        style={{ width: 300, margin: "auto", marginTop: 20, marginBottom: 40 }}
      >
        <Img fluid={photo.eg.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export default SecondPage
