import React from 'react';
import idFromLink from '../../utils';
import ComicCard, { ComicCardProps } from '../Card/ComicCard';
import StyledContainer from './CardContainer.styles';

interface ComicsCardsProps {
  cards: ComicCardProps[];
}

function ComicsCards({ cards }: ComicsCardsProps) {
  return (
    <StyledContainer>
      {cards.map((item: ComicCardProps) => (
        <ComicCard
          key={idFromLink(item.linkToComic)}
          title={item.title}
          imageSource={item.imageSource}
          year={item.year}
          description={item.description}
          linkToComic={`/comic/${idFromLink(item.linkToComic)}`}
        />
      ))}
    </StyledContainer>
  );
}

export default ComicsCards;
