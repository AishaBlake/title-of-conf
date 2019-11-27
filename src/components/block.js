import React from 'react';
import styled from "styled-components"

const Container = styled.section`
    background-color: ${props => props.bgColor ? props.bgColor : "white"};
    padding: 5% 10%;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;

const TextBlock = ({bgColor, title, subtitle, children}) => (
    <Container bgColor={bgColor}>
        <h2 style={{
            fontWeight: `400`,
            textTransform: `uppercase`,
        }}>{title}</h2>
        <p style={{
            fontFamily: `Inter`,
            fontSize: `2rem`,
            fontWeight: `600`
        }}>{subtitle}</p>
        <FlexContainer>{children}</FlexContainer>
    </Container>
);

export default TextBlock;