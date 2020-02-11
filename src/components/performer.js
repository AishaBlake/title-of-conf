import React from 'react';
import styled from "styled-components"
import Img from "gatsby-image"

const Performer = ({name, company, headshotURL, fluid, alt, twitter}) => {
    const twitterURL = `https://twitter.com/${twitter}`;
    const PerformerWrapper = styled.section`
        flex-basis: 200px;
        padding: 2%;
    `;

    const PerformerHeadshot = styled.img`
        border-radius: 50%;
        margin: 0;
    `;

    const PerformerImg = styled(Img)`
        border-radius: 50%;
        margin: 0;
    `;

    const PerformerName = styled.h3`
        font-size: 1.25rem;
        margin-bottom: 0.125rem;
        text-align: center; 
    `;

    const PerformerInfoWrapper = styled.p`
        font-size: 0.875rem;
        margin-bottom: 0;
        text-align: center;
    `;

    return (
        <PerformerWrapper>
            {headshotURL && <PerformerHeadshot src={headshotURL} alt={alt || name} />}
            {fluid && <PerformerImg fluid={fluid} />}
            <PerformerName>{name}</PerformerName>
            { company && <PerformerInfoWrapper>{company}</PerformerInfoWrapper> }
            { twitter && <PerformerInfoWrapper><a href={twitterURL}>@{twitter}</a></PerformerInfoWrapper>}
        </PerformerWrapper>
    );
};

export default Performer;