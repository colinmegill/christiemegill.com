import React from "react"

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
        <i> The Flip Side of What-If</i>, Middle Grade Contemporary
      </Styled.p>
      <Styled.p>
        When 11 year-old Nora Sheehan learns about world honey bee decline, she
        sets out to protect the bugs with backyard beekeeping. But when her
        spiraling anxiety worsens and she takes out her worries on her best
        friend, she needs to figure out how to save her friendship, too.
      </Styled.p>
      <div sx={{ m: [4, 5] }}>
        <Styled.p>
          I explained to Mimsy why I’d chosen beekeeping in the first place. How
          I needed a remarkable talent to prove I wasn’t un-extraordinary. How
          bees quieted my worries when I was at Stoneybrook Farm and wrapped me
          in a buzzing blanket of calm. How the hives were supposed to save
          every honey bee in North America.
        </Styled.p>
        <Styled.p>
          “The honey bees weren’t for nothing,” she insisted. “You’ve done
          meaningful conservation work. And you found an activity you love and
          excel at.”
        </Styled.p>
        <Styled.p>“But they aren’t going to save me.”</Styled.p>
        <Styled.p>
          Mimsy said anxiety doesn’t go away. It’s not something I’ll get over,
          like the pneumonia that sent Patrick to the hospital two winters ago.
        </Styled.p>
        <Styled.p>
          It doesn’t go away, but it also doesn’t make me weird or bizarre.
        </Styled.p>
      </div>
      <Styled.hr />
      <div>
        <Styled.h3> Other books </Styled.h3>
        <Styled.p>
          <p>
            <i>The Secret Truth</i>, Middle Grade Contemporary
          </p>
        </Styled.p>
        <Styled.p>
          <p>
            <i>Code Stars</i>, Middle Grade Contemporary
          </p>
        </Styled.p>
        <Styled.p>
          <p>
            <i>Anchored at Redwood Grove</i>, Middle Grade Literary Fantasy
          </p>
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
