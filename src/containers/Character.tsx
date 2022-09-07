import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';

import { LinkList, PageContent, StyledThumbnail } from './Containers.styles';
import Header from '../components/Header/Header';
import apikey from '../apikey';
import idFromLink from '../utils';

interface CharacterProps {
  name: string;
  description: string;
  comics: {
    name: string;
    resourceURI: string;
  }[];
  imageSource: string;
  marvelWikiLink: string;
}
function Comic() {
  const { id } = useParams();
  const [data, setData] = useState<CharacterProps>({
    name: '',
    description: '',
    comics: [],
    imageSource: '',
    marvelWikiLink: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const basicPath = 'https://gateway.marvel.com:443/v1/public/characters';
  useEffect(() => {
    const fetchCharacter = async () => {
      const result = await axios(`${basicPath}/${id}?apikey=${apikey}`);
      const resultData = result.data.data.results[0];
      let pathToImage = '';
      if (resultData.thumbnail) {
        pathToImage = `${resultData.thumbnail.path}.${resultData.thumbnail.extension}`;
      }
      let marvelLink = '';
      for (let i = 0; i < resultData.urls.length; i += 1) {
        if (resultData.urls[i].type === 'wiki') {
          marvelLink = resultData.urls[i].url;
        }
      }
      const characterData: CharacterProps = {
        name: resultData.name,
        description: resultData.description,
        comics: resultData.comics.items,
        marvelWikiLink: marvelLink,
        imageSource: pathToImage,
      };
      setData(characterData);
      setIsLoading(false);
    };
    fetchCharacter();
  }, [id]);

  return (
    <div>
      <Header />
      {isLoading && <p>Loading ...</p>}
      {!isLoading && (
        <PageContent>
          <h1>{data.name}</h1>
          <StyledThumbnail src={data.imageSource} alt="character's logo" />
          <h2>Description of character</h2>
          <p>{!data.description && 'No description provided'}</p>
          <p>{data.description}</p>
          <h2>Comics:</h2>
          {data.comics.length > 0 && (
            <LinkList>
              {data.comics.map((item) => (
                <li key={idFromLink(item.resourceURI)}>
                  <NavLink to={`/comic/${idFromLink(item.resourceURI)}`}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </LinkList>
          )}
          {!data.comics.length &&
            'There is no data about comics with the character:('}
          {!!data.marvelWikiLink && (
            <h2>
              <a href={data.marvelWikiLink}>Read more</a>
            </h2>
          )}
        </PageContent>
      )}
    </div>
  );
}

export default Comic;
