import React from "react"

import Layout from "../components/layout"
import Typeform from "../components/typeform"
import SEO from "../components/seo"
import { Embed } from "@theme-ui/components"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div>
      <Typeform />
    </div>
  </Layout>
)

export default SecondPage
