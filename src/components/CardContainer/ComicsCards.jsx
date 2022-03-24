import React from "react";
import ComicCard from "../Card/ComicCard";
import { StyledContainer } from "./CardContainer.styles";

function ComicsCards({cards}){
    
    return (
    <StyledContainer>
        {cards.map((item)=>(
            <ComicCard key={item.id} title={item.title} 
                imageSource={item.images[0]}
                year={item.dates[1].date} description={item.description}
                linkToComic={item.resourceURI.split("/")}
            />
        ))}
    </StyledContainer>
    )
}



export default ComicsCards;