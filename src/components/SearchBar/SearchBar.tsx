import React from 'react';

import StyledSearchBar from './SearchBar.styles';

function SearchBar() {
  return (
    <StyledSearchBar>
      <input type="text" placeholder="Search..." />
    </StyledSearchBar>
  );
}

export default SearchBar;
