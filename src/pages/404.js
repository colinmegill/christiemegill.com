import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">
        New intern is adorable.{" "}
        <a href="http://t.co/imzizEFFaV">pic.twitter.com/imzizEFFaV</a>
      </p>
      &mdash; Emergency Kittens (@EmrgencyKittens){" "}
      <a href="https://twitter.com/EmrgencyKittens/status/524038558974103552?ref_src=twsrc%5Etfw">
        October 20, 2014
      </a>
    </blockquote>{" "}
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
    <h1>NOT FOUND</h1>
    <p>MEOW.</p>
  </Layout>
)

export default NotFoundPage
