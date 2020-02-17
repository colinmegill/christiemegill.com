import Layout from "../components/layout"
import SEO from "../components/seo"
import { Styled } from "theme-ui"

/** @jsx jsx */
import { jsx } from "theme-ui"

const SecondPage = () => (
  <Layout>
    <SEO title="Writing" />
    <div>
      <Styled.h3>Seeking Representation </Styled.h3>
      <Styled.p>
        <i> The Wolven Witch </i>, Spooky Middle Grade
      </Styled.p>
      <Styled.p>
        After accidentally summoning the ghost of the Wolven Witch, twelve
        year-old Maple Kovak must rewrite local legend—and her friendship with
        her skeptical BFF Devlin—before Halloween ends and a spirit worse than
        the witch traps her in the woods forever.
      </Styled.p>

      <Styled.hr />
      <div>
        <Styled.h3> Other books </Styled.h3>
        <Styled.p>
          <i>The Flip Side of What-If</i>, Middle Grade Contemporary
        </Styled.p>
        <Styled.p>
          <i>The Secret Truth</i>, Middle Grade Contemporary
        </Styled.p>
        <Styled.p>
          <i>Code Stars</i>, Middle Grade Contemporary
        </Styled.p>
        <Styled.p>
          <i>Anchored at Redwood Grove</i>, Middle Grade Literary Fantasy
        </Styled.p>
      </div>
      <Styled.hr />
      <Styled.h3> Essays </Styled.h3>
      <Styled.p>
        <Styled.a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.literarymama.com/litreflections/archives/2016/03/books-bind-us.html"
        >
          Books Bind Us
        </Styled.a>
      </Styled.p>
      <Styled.p>
        <Styled.a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.bonbonbreak.com/letter-to-my-hometown/"
        >
          A Letter to My Hometown
        </Styled.a>
      </Styled.p>
      <Styled.p>
        <Styled.a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mother.ly/parenting/motherhood-was-the-gateway-to-my-creative-side"
        >
          Motherhood Was the Gateway to My Creative Side
        </Styled.a>
      </Styled.p>
      <Styled.p>
        <Styled.a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.playfullearning.net/resource/raising-compassionate-kids/"
        >
          Raising Compassionate Kids
        </Styled.a>
      </Styled.p>
      <Styled.p>
        <Styled.a
          target="_blank"
          rel="noopener noreferrer"
          href="https://christiemegill.contently.com/"
        >
          More via Contently
        </Styled.a>
      </Styled.p>
    </div>
  </Layout>
)

export default SecondPage
