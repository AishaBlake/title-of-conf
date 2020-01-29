import React from 'react';
import styled from "styled-components"

const Performer = ({name, company, headshotURL, alt}) => {
    const PerformerWrapper = styled.section`
        flex-basis: 200px;
        padding: 2%;
    `;

    const PerformerHeadshot = styled.img`
        border-radius: 50%;
        margin: 0;
    `;

    const PerformerName = styled.h3`
        font-size: 1.25rem;
        margin-bottom: 0.125rem;
        text-align: center; 
    `;

    const PerformerCompany = styled.p`
        font-size: 0.875rem;
        text-align: center;
    `;

    return (
        <PerformerWrapper>
            <PerformerHeadshot src={headshotURL} alt={alt || name} />
            <PerformerName>{name}</PerformerName>
            { company && <PerformerCompany>{company}</PerformerCompany> }
        </PerformerWrapper>
    );
};

export default Performer;