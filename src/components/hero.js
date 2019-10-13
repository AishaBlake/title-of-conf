import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
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

    const Container = styled.section`
        background-color: #E7ECEF;
        display: flex;
        flex-direction: column;
        padding: 5% 10%;
        text-align: center;

        @media (min-width: 530px) {
            flex-flow: row wrap;
            justify-content: space-between;
            > * {
                align-content: center;
                width: 50%;
            }
        }
    `;

    const InfoContainer = styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-bottom: 5%;
    `;

    return (
        <Container>
            <InfoContainer>
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
            </InfoContainer>
            <Img fluid={logo.childImageSharp.fluid} />
        </Container>
    )
};

export default Hero;