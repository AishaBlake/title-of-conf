import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Block from "../components/block"
import Hero from "../components/hero"
import TextBlock from "../components/textBlock"
import Performer from "../components/performer"

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
    <Block bgColor="#E7ECEF" title="Join these performers" subtitle="A peek into our talented lineup">
        <Performer name="Anjana Vakil" company="Mapbox" headshotURL="https://ci6.googleusercontent.com/proxy/YotIJMdLxFGKoDN41ncdaWveJF7Iv7bOpQjaJ2Au7hhP0zyahW3-g9WCsmbqHZ-M9YnwitbCI6iFg1GDjL8_PcWnP3kYl7XF_ym9tp7cs3ZTopOOvYq5LpG7C8y8gaKTo3r8-JDsxDMUVtV2a5_NSGFX1r2bPrG439o=s0-d-e1-ft#https://gallery.mailchimp.com/546218e6c599e2caa7de3c359/images/5e51e8ef-6b01-4b2c-a3fb-619261c0ecfb.jpg" alt="" />
        <Performer name="Natalia Margolis" company="Mapbox" headshotURL="https://ci5.googleusercontent.com/proxy/-GLlBFuZC2EWUK9x-3Gbsv9-Pfx2fJ2YmU7wl0_TGQs0HlrKCUUhEolvMYVh7GcMtWiZOCgCQzmNtMMPwkkzfQ5HC2Gjl8l2__Ef_vAj3LylNry0dGIgh-rup_B0JF98jaB4iiSG8xLXCMFXsb5UrROAn6hQLpi7Orc=s0-d-e1-ft#https://gallery.mailchimp.com/546218e6c599e2caa7de3c359/images/4d67f9d9-0274-40f1-a688-ff7c76f5b987.jpg" alt="" />
        <Performer name="Cassidy Williams" company="React Training" headshotURL="https://ci3.googleusercontent.com/proxy/I8pxvtnxWscjUfPK2hJ2BwFDEGsA6hHLWHFXHlRJWdBdPww6qg8tA7t6i35oGTH71Id4vxbvJ89tStM30N7TB9XOHZKqfVrfnw_BNspNRUj21foROgM0G20gNlaMOLJP4jwLkS84pWM0509b1T3X6Mgl2eoizZw4Z5o=s0-d-e1-ft#https://gallery.mailchimp.com/546218e6c599e2caa7de3c359/images/6d0647ac-36c9-4845-aad7-1cc8d9e11d65.jpg" alt="" />
        <Performer name="Chloe Condon" company="Microsoft" headshotURL="https://ci6.googleusercontent.com/proxy/DJfRCkYFSeTu69OwxzHg4htKEKHyNQfXQWo1fiMihC-oiYJYnzqd8uFIxhs8V6Xup0Txihj3v0TzI4vXzxVbhL9wIYbJT887tnplke_vEJGwq7KuHu4FEyo7xy8n8lxZFYmTfflo8x2FbgJCLmVMY1rdJLepPGLwOXs=s0-d-e1-ft#https://gallery.mailchimp.com/546218e6c599e2caa7de3c359/images/0de7a783-ddf1-459f-a228-f9c0e2c07f1e.jpg" alt="" />
    </Block>
  </Layout>
)

export default IndexPage
