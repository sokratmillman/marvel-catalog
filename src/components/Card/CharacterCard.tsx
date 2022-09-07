import React from 'react';
import {
  StyledCard,
  StyledImage,
  StyledImageField,
  StyledInfoField,
  StyledLink,
} from './Card.styles';

export interface CharacterCardProps {
  charactersName: string;
  imageSource: {
    path: string;
    extension: string;
  };
  firstAppearance: string;
  description: string;
  linkToCharacter: string;
}

function CharacterCard({
  charactersName,
  imageSource,
  firstAppearance,
  description,
  linkToCharacter,
}: CharacterCardProps) {
  const appearanceYear = firstAppearance.split('-')[0];
  const imgSrc = imageSource
    ? `${imageSource.path}.${imageSource.extension}`
    : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=240';
  return (
    <StyledCard>
      <StyledImageField>
        <StyledImage src={imgSrc} height="200px" alt="Character's image" />
      </StyledImageField>
      <StyledInfoField>
        <h2>{charactersName}</h2>
        <p>First appearance: {appearanceYear}</p>
        <p>Description: {description}</p>
        <StyledLink to={{ pathname: linkToCharacter }}>
          Go to character&apos;s page&#8594;
        </StyledLink>
      </StyledInfoField>
    </StyledCard>
  );
}
export default CharacterCard;
