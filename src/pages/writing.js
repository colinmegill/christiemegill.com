import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Writing" />
    <div
      style={{
        maxWidth: 600,
        margin: "auto",
        padding: 20,
      }}
    >
      <h1 style={{ fontFamily: "Mystery Quest" }}>Writing</h1>
      <h3>Seeking Representation </h3>
      <p>
        <i> The Flip Side of What-If</i>, Middle Grade Contemporary
      </p>
      <p>
        When 11 year-old Nora Sheehan learns about world honey bee decline, she
        sets out to protect the bugs with backyard beekeeping. But when her
        spiraling anxiety worsens and she takes out her worries on her best
        friend, she needs to figure out how to save her friendship, too.
      </p>
      <div>
        <i>
          <p>
            I explained to Mimsy why I’d chosen beekeeping in the first place.
            How I needed a remarkable talent to prove I wasn’t un-extraordinary.
            How bees quieted my worries when I was at Stoneybrook Farm and
            wrapped me in a buzzing blanket of calm. How the hives were supposed
            to save every honey bee in North America.
          </p>
          <p>
            “The honey bees weren’t for nothing,” she insisted. “You’ve done
            meaningful conservation work. And you found an activity you love and
            excel at.”
          </p>
          <p>“But they aren’t going to save me.”</p>
          <p>
            Mimsy said anxiety doesn’t go away. It’s not something I’ll get
            over, like the pneumonia that sent Patrick to the hospital two
            winters ago.
          </p>
          <p>
            It doesn’t go away, but it also doesn’t make me weird or bizarre.
          </p>
        </i>
      </div>
      <hr />
      <div>
        <h3> Other books </h3>
        <p>
          <a>
            <i>The Secret Truth</i>, Middle Grade Contemporary
          </a>
        </p>
        <p>
          <a>
            <i>Code Stars</i>, Middle Grade Contemporary
          </a>
        </p>
        <p>
          <a>
            <i>Anchored at Redwood Grove</i>, Middle Grade Literary Fantasy
          </a>
        </p>
      </div>
      <hr />
      <h3> Essays </h3>
      <p>
        <a
          target="_blank"
          href="http://www.literarymama.com/litreflections/archives/2016/03/books-bind-us.html"
          style={{ color: "#A086C4" }}
        >
          Books Bind Us
        </a>
      </p>
      <p>
        <a
          target="_blank"
          href="https://www.bonbonbreak.com/letter-to-my-hometown/"
          style={{ color: "#A086C4" }}
        >
          A Letter to My Hometown
        </a>
      </p>
      <p>
        <a
          target="_blank"
          href="https://www.mother.ly/parenting/motherhood-was-the-gateway-to-my-creative-side"
          style={{ color: "#A086C4" }}
        >
          Motherhood Was the Gateway to My Creative Side
        </a>
      </p>
      <p>
        <a
          target="_blank"
          href="https://www.playfullearning.net/resource/raising-compassionate-kids/"
          style={{ color: "#A086C4" }}
        >
          Raising Compassionate Kids
        </a>
      </p>
      <a
        target="_blank"
        href="https://christiemegill.contently.com/"
        style={{ color: "#A086C4" }}
      >
        <b>More via Contently</b>
      </a>
    </div>
  </Layout>
)

export default SecondPage
