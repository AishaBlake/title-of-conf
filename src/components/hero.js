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
            flex-direction: row;
            align-items: center;
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
                <p>May 7, 2020 | Detroit, MI</p>
                <a 
                    href="https://ti.to/title-of-conf/2020"
                    style={{
                    border: `3px solid #FEB85A`,
                    color: `#7A335F`,
                    fontSize: `.8rem`,
                    fontWeight: `bold`,
                    padding: `4px 8px`,
                    textDecoration: `none`,
                    }}>
                    Buy Tickets
                </a>
            </InfoContainer>
            <Img fluid={logo.childImageSharp.fluid} style={{maxWidth: `300px`}} />
        </Container>
    )
};

export default Hero;