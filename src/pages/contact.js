/** @jsx jsx */
import { jsx, Box } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Box>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdCVToC3hVzBG7-DgwbsdGa98mbQFc3gGdj531Ov1H5v7CIVw/viewform?embedded=true"
        width="400"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Contact Christie"
      >
        Loading…
      </iframe>
    </Box>
  </Layout>
)

export default SecondPage
