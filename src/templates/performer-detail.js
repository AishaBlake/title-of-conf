import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import Block from "../components/block"

const PerformerSection = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
`;
const PerformerImg = styled(Img)`
  border-radius: 50%;
  margin: 0;
  width: 200px;
`;
const PerformerInfo = styled.div`
  max-width: 500px;
`;

export default ({ data }) => {
  const performer = data.performersYaml
  return (
    <Layout>
      <SEO title={performer.name} />
      <Block>
        <PerformerSection>
          <PerformerImg alt={performer.name} fixed={performer.headshot.childImageSharp.fixed} />
          <PerformerInfo>
            <h1>{performer.name}</h1>
            <a href={`https://twitter.com/${performer.twitter}`}>@{performer.twitter}</a>
            <p>{performer.bio}</p>
          </PerformerInfo>
        </PerformerSection>
      </Block>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    performersYaml(slug: { eq: $slug }) {
      name
      bio
      company
      twitter
      role
      headshot {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`