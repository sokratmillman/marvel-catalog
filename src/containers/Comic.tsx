import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';

import Header from '../components/Header/Header';
import apikey from '../apikey';
import { LinkList, PageContent, StyledThumbnail } from './Containers.styles';
import idFromLink from '../utils';

interface ComicProps {
  title: string;
  description: string;
  characters: {
    name: string;
    resourceURI: string;
  }[];
  pageCount: number;
  imageSource: string;
}

function Comic() {
  const { id } = useParams();
  const [data, setData] = useState<ComicProps>({
    title: '',
    description: '',
    characters: [],
    pageCount: 0,
    imageSource: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const basicPath = 'https://gateway.marvel.com:443/v1/public/comics';
  useEffect(() => {
    const fetchCharacter = async () => {
      setIsLoading(true);
      const result = await axios(`${basicPath}/${id}?apikey=${apikey}`);
      const resultData = result.data.data.results[0];
      let pathToImage = '';
      if (resultData.thumbnail) {
        pathToImage = `${resultData.thumbnail.path}.${resultData.thumbnail.extension}`;
      }
      const comicData: ComicProps = {
        title: resultData.title,
        description: resultData.description,
        characters: resultData.characters.items,
        pageCount: Number(resultData.pageCount),
        imageSource: pathToImage,
      };
      setData(comicData);
      setIsLoading(false);
    };
    fetchCharacter();
  }, [id]);

  return (
    <>
      <Header />
      {isLoading && <p>Loading ...</p>}
      {!isLoading && (
        <PageContent>
          <h1>{data.title}</h1>
          <StyledThumbnail src={data.imageSource} alt="Comic's cover" />
          <h2>Description of comic</h2>
          <p>{!data.description && 'No description provided'}</p>
          <p>{data.description}</p>
          <h2>Characters:</h2>
          {data.characters.length > 0 && (
            <LinkList>
              {data.characters.map((item) => (
                <li key={idFromLink(item.resourceURI)}>
                  <NavLink to={`/character/${idFromLink(item.resourceURI)}`}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </LinkList>
          )}
          {!data.characters.length &&
            'There is no data about characters in this comic:('}
        </PageContent>
      )}
    </>
  );
}

export default Comic;
