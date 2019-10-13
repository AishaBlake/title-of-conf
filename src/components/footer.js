import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
    const { patreon, twitter, youtube } = useStaticQuery(graphql`
        query {
            patreon: file(relativePath: { eq: "patreon.png" }) {
                childImageSharp {
                    fixed(width: 24) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            twitter: file(relativePath: { eq: "twitter.png" }) {
                childImageSharp {
                    fixed(width: 24) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            youtube: file(relativePath: { eq: "youtube.png" }) {
                childImageSharp {
                    fixed(width: 24) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <footer style={{
            color: `#fff`,
            fill: `#fff`,
            fontFamily: `Righteous`,
            fontSize: `1.8rem`,
            margin: `1rem auto 0`,
            maxWidth: 960,
            textAlign: `center`
        }}>
            #TitleOfConf &nbsp;
            <a href="https://twitter.com/TitleOfConf">
                <Img 
                    fixed={twitter.childImageSharp.fixed}
                    alt="Twitter"
                    title="Follow title of conf on Twitter"
                />
            </a> &nbsp;
            <a href="https://www.patreon.com/titleofconf">
                <Img 
                    fixed={patreon.childImageSharp.fixed}
                    alt="Patreon"
                    title="Become a Patron of title of conf"
                />
            </a> &nbsp;
            <a href="https://www.youtube.com/channel/UCj-6P9uTYqpZqjIJtIOW8-A">
                <Img 
                    fixed={youtube.childImageSharp.fixed}
                    alt="YouTube"
                    title="Subscribe to title of conf on YouTube"
                />
            </a>
        </footer>
    );
}

export default Footer;