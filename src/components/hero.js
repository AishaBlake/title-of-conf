import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"
import Logotype from './logotype';

const Hero = () => {
    const { logo } = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "toc-symbol-dark.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <section style={{
            backgroundColor: `#E7ECEF`,
            display: `flex`,
            padding: `5% 10%`
        }}>
            <div style={{
                width: `50%`
            }}>
                <Logotype />
                <p>Spring 2020 | Detroit, MI</p>
                <a 
                    href="https://titleofconf.us4.list-manage.com/subscribe?u=546218e6c599e2caa7de3c359&id=bc02d38623"
                    style={{
                    border: `3px solid #FEB85A`,
                    color: `#7A335F`,
                    fontSize: `.8rem`,
                    fontWeight: `bold`,
                    padding: `4px 8px`,
                    textDecoration: `none`,
                    }}>
                    Subscribe for Updates
                </a>
            </div>
            <div style={{
                width: `50%`
            }}>
                <Img fluid={logo.childImageSharp.fluid} />
            </div>
        </section>
    )
};

export default Hero;