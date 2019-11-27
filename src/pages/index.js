import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import TextBlock from "../components/textBlock"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <section style={{
      padding: `5% 10%`,
      textAlign: `center`
    }}>
      <p style={{
          color: `#7A335F`,
          fontSize: `1.4rem`,
          fontWeight: `600`,
          lineHeight: `1.8rem`,
          margin: `0 auto 1.45rem`,
          maxWidth: `600px`,
          textAlign: `center`
        }}>A joyful new musical conference showcasing the brilliant talent thriving in the tech community.</p>
      <a 
        href="https://www.patreon.com/join/titleofconf?"
        style={{
          border: `3px solid #FEB85A`,
          color: `#7A335F`,
          fontSize: `.8rem`,
          fontWeight: `bold`,
          padding: `4px 8px`,
          textDecoration: `none`,
        }}>
          Become a Patron
      </a>
    </section>
    <TextBlock bgColor="#E7ECEF" title="What to expect" subtitle="Learning through performance arts">
      We want to explore some delightfully different ways to capture the day-to-day experience of creating software. Our talented performers will transport you through their musical and theatrical pieces. We'll end the day with an awesome karaoke party!
    </TextBlock>
    <TextBlock title="Location &amp; Venue" subtitle="Detroit, MI">
      &lt;title of conf&gt; will take place at the gorgeous Garden Theater in Midtown Detroit. This central location brings us close to a number of excellent restuarants, museums, and historical sites.
    </TextBlock>
  </Layout>
)

export default IndexPage
