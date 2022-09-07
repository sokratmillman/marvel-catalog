import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../components/Header/Header';
import CharactersCards from '../components/CardContainer/CharactersCards';
import { CharacterCardProps } from '../components/Card/CharacterCard';
import apikey from '../apikey';
import Form from '../components/Form/Form';
import { ContainerPageContent } from './Containers.styles';

const basicPath = 'https://gateway.marvel.com:443/v1/public/characters';

function Characters() {
  const [allCards, setAllCards] = useState<CharacterCardProps[]>([]);
  const [currCards, setCurrCards] = useState<CharacterCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      const result = await axios(`${basicPath}?limit=50&apikey=${apikey}`);
      const allResults = result.data.data.results;

      const mappedCards = allResults.map((item: any) => {
        const card: CharacterCardProps = {
          charactersName: item.name,
          imageSource: item.thumbnail,
          firstAppearance: item.modified,
          description: item.description,
          linkToCharacter: item.resourceURI,
        };
        return card;
      });

      setAllCards(mappedCards);
      setCurrCards(mappedCards);

      setIsLoading(false);
    };
    fetchCharacters();
  }, []);

  const handleFormOnChange = (newCards: CharacterCardProps[]) => {
    setCurrCards(newCards);
  };

  return (
    <div>
      <Header />
      <br />
      {isLoading && <p>Loading</p>}
      {!isLoading && (
        <ContainerPageContent>
          <Form
            type="Character"
            cards={allCards}
            onChange={handleFormOnChange}
          />
          <CharactersCards cards={currCards} />
        </ContainerPageContent>
      )}
    </div>
  );
}

export default Characters;
