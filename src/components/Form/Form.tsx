import React, { useState } from 'react';
import { CharacterCardProps } from '../Card/CharacterCard';
import { ComicCardProps } from '../Card/ComicCard';

type SelectedOption =
  | 'year'
  | 'name'
  | 'nameDescending'
  | 'yearDescending'
  | '';

interface SortingState {
  sortingOption: SelectedOption;
}

interface YearsRangeState {
  first: string;
  last: string;
}

interface ComicProps {
  type: 'Comic';
  onChange: (newState: ComicCardProps[]) => void;
  cards: ComicCardProps[];
}

interface CharacterProps {
  type: 'Character';
  onChange: (newState: CharacterCardProps[]) => void;
  cards: CharacterCardProps[];
}

type FormProps = CharacterProps | ComicProps;

function Form({ type, onChange, cards }: FormProps) {
  const [sortingState, setSortingState] = useState<SortingState>({
    sortingOption: '',
  });
  const [yearsRange, setYearsRange] = useState<YearsRangeState>({
    first: '1900',
    last: '2025',
  });

  const handleOptionChange = (
    changeEvent: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setSortingState({
      sortingOption: changeEvent.target.value as SelectedOption,
    });
    switch (changeEvent.target.value) {
      case 'nameDescending':
        if (type === 'Character') {
          const newCards: CharacterCardProps[] = cards
            .filter(
              (item) =>
                item.firstAppearance < yearsRange.last &&
                item.firstAppearance > yearsRange.first
            )
            .sort((a, b) => (a.charactersName < b.charactersName ? 1 : -1));
          onChange(newCards.slice());
        } else {
          const newCards: ComicCardProps[] = cards
            .filter(
              (item) =>
                item.year < yearsRange.last && item.year > yearsRange.first
            )
            .sort((a, b) => (a.title < b.title ? 1 : -1));
          onChange(newCards.slice());
        }
        break;

      case 'year':
        if (type === 'Character') {
          const newCards: CharacterCardProps[] = cards
            .filter(
              (item) =>
                item.firstAppearance < yearsRange.last &&
                item.firstAppearance > yearsRange.first
            )
            .sort((a, b) => (a.firstAppearance > b.firstAppearance ? 1 : -1));
          onChange(newCards.slice());
        } else {
          const newCards: ComicCardProps[] = cards
            .filter(
              (item) =>
                item.year < yearsRange.last && item.year > yearsRange.first
            )
            .sort((a, b) => (a.year > b.year ? 1 : -1));
          onChange(newCards.slice());
        }
        break;

      case 'yearDescending':
        if (type === 'Character') {
          const newCards: CharacterCardProps[] = cards
            .filter(
              (item) =>
                item.firstAppearance < yearsRange.last &&
                item.firstAppearance > yearsRange.first
            )
            .sort((a, b) => (a.firstAppearance < b.firstAppearance ? 1 : -1));
          onChange(newCards.slice());
        } else {
          const newCards: ComicCardProps[] = cards
            .filter(
              (item) =>
                item.year < yearsRange.last && item.year > yearsRange.first
            )
            .sort((a, b) => (a.year < b.year ? 1 : -1));
          onChange(newCards.slice());
        }
        break;

      case 'name':
      default:
        if (type === 'Character') {
          const newCards: CharacterCardProps[] = cards
            .filter(
              (item) =>
                item.firstAppearance < yearsRange.last &&
                item.firstAppearance > yearsRange.first
            )
            .sort((a, b) => (a.charactersName > b.charactersName ? 1 : -1));
          onChange(newCards.slice());
        } else {
          const newCards: ComicCardProps[] = cards
            .filter(
              (item) =>
                item.year < yearsRange.last && item.year > yearsRange.first
            )
            .sort((a, b) => (a.title > b.title ? 1 : -1));
          onChange(newCards.slice());
        }
        break;
    }
  };

  const handleOptionChange2 = (
    changeEvent: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = changeEvent.target.getAttribute('name');
    const newValue = changeEvent.target.value;

    const firstYear = target === 'firstYear' ? newValue : yearsRange.first;
    const lastYear = target === 'lastYear' ? newValue : yearsRange.last;

    setYearsRange({ first: firstYear, last: lastYear });

    switch (sortingState.sortingOption) {
      case 'nameDescending':
        if (type === 'Character') {
          const newCards: CharacterCardProps[] = cards
            .sort((a, b) => (a.charactersName < b.charactersName ? 1 : -1))
            .filter(
              (item) =>
                item.firstAppearance < lastYear &&
                item.firstAppearance > firstYear
            );
          onChange(newCards.slice());
        } else {
          const newCards: ComicCardProps[] = cards
            .sort((a, b) => (a.title < b.title ? 1 : -1))
            .filter((item) => item.year < lastYear && item.year > firstYear);
          onChange(newCards.slice());
        }
        break;

      case 'year':
        if (type === 'Character') {
          const newCards: CharacterCardProps[] = cards
            .sort((a, b) => (a.firstAppearance > b.firstAppearance ? 1 : -1))
            .filter(
              (item) =>
                item.firstAppearance < lastYear &&
                item.firstAppearance > firstYear
            );
          onChange(newCards.slice());
        } else {
          const newCards: ComicCardProps[] = cards
            .sort((a, b) => (a.year > b.year ? 1 : -1))
            .filter((item) => item.year < lastYear && item.year > firstYear);
          onChange(newCards.slice());
        }
        break;

      case 'yearDescending':
        if (type === 'Character') {
          const newCards: CharacterCardProps[] = cards
            .sort((a, b) => (a.firstAppearance < b.firstAppearance ? 1 : -1))
            .filter(
              (item) =>
                item.firstAppearance < lastYear &&
                item.firstAppearance > firstYear
            );
          onChange(newCards.slice());
        } else {
          const newCards: ComicCardProps[] = cards
            .sort((a, b) => (a.year < b.year ? 1 : -1))
            .filter((item) => item.year < lastYear && item.year > firstYear);
          onChange(newCards.slice());
        }
        break;

      case 'name':
      default:
        if (type === 'Character') {
          const newCards: CharacterCardProps[] = cards
            .sort((a, b) => (a.charactersName > b.charactersName ? 1 : -1))
            .filter(
              (item) =>
                item.firstAppearance < lastYear &&
                item.firstAppearance > firstYear
            );
          onChange(newCards.slice());
        } else {
          const newCards: ComicCardProps[] = cards
            .sort((a, b) => (a.title > b.title ? 1 : -1))
            .filter((item) => item.year < lastYear && item.year > firstYear);
          onChange(newCards.slice());
        }
        break;
    }
  };

  return (
    <form>
      <fieldset>
        <legend>Sort by</legend>
        <div>
          <label htmlFor="name">
            <input
              type="radio"
              value="name"
              checked={sortingState?.sortingOption === 'name'}
              onChange={handleOptionChange}
              id="name"
            />
            Name
          </label>
        </div>
        <div>
          <label htmlFor="nameDescending">
            <input
              type="radio"
              value="nameDescending"
              checked={sortingState?.sortingOption === 'nameDescending'}
              onChange={handleOptionChange}
              id="nameDescending"
            />
            Name (descending)
          </label>
        </div>
        <div>
          <label htmlFor="year">
            <input
              type="radio"
              value="year"
              checked={sortingState?.sortingOption === 'year'}
              onChange={handleOptionChange}
              id="year"
            />
            Year
          </label>
        </div>
        <div>
          <label htmlFor="yearDescending">
            <input
              type="radio"
              value="yearDescending"
              checked={sortingState?.sortingOption === 'yearDescending'}
              onChange={handleOptionChange}
              id="yearDescending"
            />
            Year (descending)
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Filter by years</legend>
        <input
          type="text"
          name="firstYear"
          onChange={handleOptionChange2}
          placeholder="First year"
        />
        <input
          type="text"
          name="lastYear"
          onChange={handleOptionChange2}
          placeholder="Last year"
        />
      </fieldset>
    </form>
  );
}
export default Form;
