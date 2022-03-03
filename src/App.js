import Header from './components/Header/Header.jsx'
import CharacterCard from './components/CharacterCard/CharacterCard.jsx'
import ComicCard from './components/ComicCard/ComicCard.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <br></br>
      <ComicCard title="Amazing Spider-man no. 252" imageSource="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2022-across-the-spider-verse-1638801272.png?crop=0.421xw:1.00xh;0.404xw,0&resize=768:*" year="1968" tag="Solo adventures" linktoComic="#"/>
      <br></br>
      <CharacterCard charactersName="Iron Man" imageSource="https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png" firstAppearance="1968" status="dead" linkToCharacter="#"/> 
    </div>
  );
}

export default App;
