import React from "react";
import { StyledCard, StyledImage, StyledImageField, StyledInfoField, StyledLink } from "./Card.styles";

function CharacterCard({
        charactersName,
        imageSource,
        firstAppearance,
        status,
        linkToCharacter,
    }) {
        const id = linkToCharacter[linkToCharacter.length-1];
        firstAppearance = firstAppearance.split("-")[0];
        imageSource = (imageSource) ? `${imageSource.path}.${imageSource.extension}` : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=240";
    return (
        <StyledCard>
            <StyledImageField>
                <StyledImage src={imageSource} height="200px" alt="Character's image"></StyledImage>
            </StyledImageField>
            <StyledInfoField>
                <h2>{charactersName}</h2>
                <p>First appearance: {firstAppearance}</p>
                <p>Status: {status}</p>
                <StyledLink to={{pathname: `/character/${id}`}}>Go to character's page&#8594;</StyledLink>
            </StyledInfoField>
        </StyledCard>
    )
}
export default CharacterCard;