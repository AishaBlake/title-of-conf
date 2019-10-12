import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextBlock from "../components/textBlock"

const Sponsor = () => (
  <Layout>
    <SEO title="Sponsor" />
    <TextBlock bgColor="#E7ECEF" title="Sponsors" subtitle="Thank you  for partnering with us">
      &lt;title of conf&gt; is run entirely by volunteers, so we need your help to make sure it happens! For information on sponsorships, <a href="mailto:aisha@titleofconf.org">contact Aisha</a>. If you're an individual and would like to contribute to the success of the event, <a href="https://www.patreon.com/titleofconf">become a Patron</a> today! 
    </TextBlock>
  </Layout>
);

export default Sponsor