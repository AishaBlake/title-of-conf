import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

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
  </Layout>
)

export default IndexPage
