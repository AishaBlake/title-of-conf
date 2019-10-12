import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextBlock from "../components/textBlock"
import Video from "../components/video"

const About = () => (
  <Layout>
    <SEO title="About" />
    <TextBlock bgColor="#E7ECEF" title="About" subtitle="Why attend?">
      &lt;title of conf&gt; is a brand new tech conference where all the presentations are musical and/or theatrical performances! For our inaugural event, the conference will take place the day before <a href="https://selfconference.org/">self.conference</a> in Detroit. 
    </TextBlock>
    <section style={{
      padding: `5% 0`,
      textAlign: `center`
    }}>
      <p style={{
        color: `#7A335F`,
        fontSize: `1.4rem`,
        fontWeight: `600`,
        margin: `0 auto 1.45rem`,
        maxWidth: `650px`,
        textAlign: `center`
      }}>
        !!Con video of Tail Call Optimization: the Musical
      </p>
      <Video 
        title="Tail Call Optimization: the Musical" src="https://www.youtube.com/embed/-PX0BV9hGZY" />
    </section>
    <TextBlock bgColor="#E7ECEF" title="FAQ" subtitle="You have questions, we have answers">

    </TextBlock>
    <TextBlock bgColor="#FFF" title="Code of Conduct" subtitle="Fundamentals to Success">
      It's important to us to build an inclusive space where everyone can feel welcome and learn from our amazing performers. If you're planning to attend the conference, make sure you read our <Link to="code-of-conduct">code of conduct</Link>. 
    </TextBlock>
  </Layout>
)

export default About;
