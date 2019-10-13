import React from 'react';
import styled from "styled-components"

const Container = styled.section`
    background-color: ${props => props.bgColor ? props.bgColor : "white"};
    display: flex;
    flex-direction: column;
    padding: 5% 10%;

    @media (min-width: 700px) {
        flex-flow: row wrap;
        justify-content: space-between;
        > * {
            width: 50%;
        }
    }
`;

const TextBlock = ({bgColor, title, subtitle, children}) => (
    <Container bgColor={bgColor}>
        <div>
            <h2 style={{
                fontWeight: `400`,
                textTransform: `uppercase`,
            }}>{title}</h2>
            <span style={{
                fontFamily: `Inter`,
                fontSize: `2rem`,
                fontWeight: `600`
            }}>{subtitle}</span>
        </div>
        <p style={{
            lineHeight: `1.8rem`,
            marginBottom: `0`
        }}>{children}</p>
    </Container>
);

export default TextBlock;