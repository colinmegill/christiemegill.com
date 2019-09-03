import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div>
      <h1>About Christie</h1>
      <p>
        Christie Megill is a middle grade fiction writer. She has been writing
        stories since as far back as she can remember, before she was a middle
        grade reader herself. In some form or another, her life has always
        revolved around books and stories. She majored in English Literature at
        Fordham University, worked as a bookseller at Borders after college, was
        an editorial assistant at an academic press in New York City, became an
        early elementary school teacher in the Pacific Northwest, and now writes
        books for kids while homeschooling her own young children. In addition
        to children’s fiction, Christie writes short stories for adults and
        essays on topics such as motherhood, homeschooling, and progressive
        education. When she isn’t writing, she spends her time baking
        butter-laden desserts, hiking through the woods, and practicing her tree
        pose with the forest fairies.​SCBWI Member
      </p>
      <p>True facts</p>
      <ol>
        <li>
          She once lived down the street from a chocolate factory. She has also
          lived on an island, on a farm, and is planning to someday dwell in a
          tree house.
        </li>
        <li>She owns a copy of every Baby-sitter’s Club paperback book.</li>
        <li>Her Harry Potter house is Gryffindor.</li>
        <li>She has found the world’s most perfect cupcake.</li>
        <li>Cross-country running was her high school sport.</li>
        <li>
          She strongly identifies with Officer Judy Hopps, of Zootopia fame.
        </li>
      </ol>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
