import React from 'react';
import styled from "styled-components"

const CTALink = styled.a`
    border: 3px solid #FEB85A;
    color: #7A335F;
    font-size: .8rem;
    font-weight: bold;
    padding: 4px 8px;
    margin-bottom: 8px;
    text-decoration: none;
`;

const CTA = ({url, children}) => (
    <CTALink href={url}>
        {children}
    </CTALink>
);

export default CTA;