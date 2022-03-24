import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './containers/Main';
import Characters from './containers/Characters';
import Comics from './containers/Comics';
import Character from './containers/Character';
import Comic from './containers/Comic';

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <br></br>
//       <ComicCard title="Amazing Spider-man no. 252" imageSource="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2022-across-the-spider-verse-1638801272.png?crop=0.421xw:1.00xh;0.404xw,0&resize=768:*" year="1968" tag="Solo adventures" linktoComic="#"/>
//       <br></br>
//       <CharacterCard charactersName="Iron Man" imageSource="https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png" firstAppearance="1968" status="dead" linkToCharacter="#"/> 
//     </div>
//   );
// }

function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/comics" element={<Comics/>}/>
          <Route path="/comic/:id" element={<Comic/>}/>
          <Route path="/character/:id" element={<Character/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App;
