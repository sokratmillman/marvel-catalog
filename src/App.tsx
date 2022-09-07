import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './containers/Main';
import Characters from './containers/Characters';
import Comics from './containers/Comics';
import Character from './containers/Character';
import Comic from './containers/Comic';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comic/:id" element={<Comic />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </div>
  );
}

export default App;
