import React from 'react';
import {
  StyledCard,
  StyledImage,
  StyledInfoField,
  StyledLink,
  StyledImageField,
} from './Card.styles';

export interface ComicCardProps {
  title: string;
  imageSource: {
    path: string;
    extension: string;
  };
  year: string;
  description: string;
  linkToComic: string;
}

function ComicCard({
  title,
  imageSource,
  year,
  description,
  linkToComic,
}: ComicCardProps) {
  const yearOfPublication = year.split('-')[0];
  const imgSrc = imageSource
    ? `${imageSource.path}.${imageSource.extension}`
    : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=240';
  // const id = linkToComic[linkToComic.length - 1];
  return (
    <StyledCard>
      <StyledImageField>
        <StyledImage src={imgSrc} height="240px" alt="Comic's cover" />
      </StyledImageField>
      <StyledInfoField>
        <h2>{title}</h2>
        <p>Year of publication: {yearOfPublication}</p>
        <p>{description || 'No description provided'}</p>
        <StyledLink to={{ pathname: linkToComic }}>
          Go to comic&apos;s page&#8594;
        </StyledLink>
      </StyledInfoField>
    </StyledCard>
  );
}
export default ComicCard;
