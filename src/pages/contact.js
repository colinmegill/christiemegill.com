/** @jsx jsx */
import { jsx, Box } from "theme-ui"

import Layout from "../components/layout"
import Typeform from "../components/typeform"
import SEO from "../components/seo"
import { Embed } from "@theme-ui/components"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Box>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdCVToC3hVzBG7-DgwbsdGa98mbQFc3gGdj531Ov1H5v7CIVw/viewform?embedded=true"
        width="400"
        height="800"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </Box>
  </Layout>
)

export default SecondPage
