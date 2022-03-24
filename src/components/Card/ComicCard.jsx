import React from "react";
import { StyledCard, StyledImage, StyledInfoField, StyledLink, StyledImageField } from "./Card.styles";

function ComicCard({
        title,
        imageSource,
        year,
        description,
        linkToComic,
    }) {
        year = year.split("-")[0];
        imageSource = (imageSource) ? `${imageSource.path}.${imageSource.extension}` : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=240";
        const id = linkToComic[linkToComic.length-1];
        return (
        <StyledCard>
            <StyledImageField>
                <StyledImage src={imageSource} height="240px" alt="Comic's cover"></StyledImage>
            </StyledImageField>
            <StyledInfoField>
                <h2>{title}</h2>
                <p>Year of publication: {year}</p>
                <p>{description||"No description provided"}</p>
                <StyledLink to={{pathname: `/comic/${id}`}}>Go to comic's page&#8594;</StyledLink>
            </StyledInfoField>
        </StyledCard>
    )
}
export default ComicCard;