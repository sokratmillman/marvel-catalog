import React from 'react';
import CharacterCard, { CharacterCardProps } from '../Card/CharacterCard';
import StyledContainer from './CardContainer.styles';
import idFromLink from '../../utils';

interface CharactersCardsProps {
  cards: CharacterCardProps[];
}

function CharactersCards({ cards }: CharactersCardsProps) {
  return (
    <StyledContainer>
      {cards.map((item: CharacterCardProps) => (
        <CharacterCard
          key={idFromLink(item.linkToCharacter)}
          charactersName={item.charactersName}
          imageSource={item.imageSource}
          firstAppearance={item.firstAppearance}
          description={item.description}
          linkToCharacter={`/character/${idFromLink(item.linkToCharacter)}`}
        />
      ))}
    </StyledContainer>
  );
}

export default CharactersCards;
