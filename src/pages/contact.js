import React from "react"

import Layout from "../components/layout"
import Typeform from "../components/typeform"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div
      style={{
        maxWidth: 800,
        margin: "auto",
      }}
    >
      <Typeform />
    </div>
  </Layout>
)

export default SecondPage
