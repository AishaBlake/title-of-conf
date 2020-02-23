import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Performer from "../components/performer"
import Block from "../components/block"
import { graphql } from "gatsby"

export const data = graphql`
  query PerformersQuery {
    allPerformersYaml {
      edges {
        node {
          name
          slug
          twitter
          headshot {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

const Cast = ({data}) => {
  return (
    <Layout>
      <SEO title="Cast and Crew" />
      <Block bgColor="#E7ECEF" title="Cast &amp; Crew" subtitle="Lending their talent on and offstage">
        <div style={{display: `flex`, flexFlow: `row wrap`, justifyContent: `space-around`}}>
        {data.allPerformersYaml.edges.map((performer) => {
          return <Performer 
            name={performer.node.name}
            fluid={performer.node.headshot.childImageSharp.fluid}
            slug={performer.node.slug} />
        })}
        </div>
      </Block>
    </Layout>
  )
}

export default Cast;
