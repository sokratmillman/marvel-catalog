import React from "react";
import CharacterCard from "../Card/CharacterCard";
import { StyledContainer } from "./CardContainer.styles";

function CharactersCards({cards}){
    
    return (
    <StyledContainer>
        {cards.map((item)=>(
            <CharacterCard key={item.id} charactersName={item.name} 
                imageSource={item.thumbnail}
                firstAppearance={item.modified} description={item.description}
                linkToCharacter={item.resourceURI.split("/")}
            />
        ))}
    </StyledContainer>
    )
}



export default CharactersCards;