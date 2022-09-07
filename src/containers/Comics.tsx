import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../components/Header/Header';
import ComicsCards from '../components/CardContainer/ComicsCards';
import { ComicCardProps } from '../components/Card/ComicCard';
import apikey from '../apikey';
import Form from '../components/Form/Form';
import { ContainerPageContent } from './Containers.styles';

function Comics() {
  const [allCards, setAllCards] = useState<ComicCardProps[]>([]);
  const [currCards, setCurrCards] = useState<ComicCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const basicPath = 'https://gateway.marvel.com:443/v1/public/comics';
  useEffect(() => {
    const fetchComics = async () => {
      setIsLoading(true);
      const result = await axios(`${basicPath}?limit=50&apikey=${apikey}`);
      const allResults = result.data.data.results;
      const mappedCards = allResults.map((item: any) => {
        const card: ComicCardProps = {
          title: item.title,
          imageSource: item.images[0],
          year: item.modified.split('-')[0],
          description: item.description,
          linkToComic: item.resourceURI,
        };
        return card;
      });
      setAllCards(mappedCards);
      setCurrCards(mappedCards);
      setIsLoading(false);
    };
    fetchComics();
  }, []);
  const handleFormOnChange = (newCards: ComicCardProps[]) => {
    setCurrCards(newCards);
  };

  return (
    <div>
      <Header />
      <br />
      {isLoading && <p>Loading</p>}
      {!isLoading && (
        <ContainerPageContent>
          <Form type="Comic" cards={allCards} onChange={handleFormOnChange} />
          <ComicsCards cards={currCards} />
        </ContainerPageContent>
      )}
    </div>
  );
}

export default Comics;
