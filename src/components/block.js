import React from 'react';
import styled from "styled-components"

const Container = styled.section`
    background-color: ${props => props.bgColor ? props.bgColor : "white"};
    padding: 5% 10%;
`;

const Block = ({bgColor, title, subtitle, children}) => (
    <Container bgColor={bgColor}>
        {title && <h2 style={{
            fontWeight: `400`,
            textTransform: `uppercase`,
        }}>{title}</h2>}
        {subtitle && <p style={{
            fontFamily: `Inter`,
            fontSize: `2rem`,
            fontWeight: `600`
        }}>{subtitle}</p>}
        {children}
    </Container>
);

export default Block;