import React from "react";
import "./CharacterCard.css"

const CharacterCard = ({
    charactersName,
    imageSource,
    firstAppearance,
    status,
    linkToCharacter,
}) => (
    <div className="CharacterCard">
        <div className="characterIcon"><img src={imageSource} height="200"></img></div>
        <div className="characterInfo">
            <h2>{charactersName}</h2>
            <p>First appearance: {firstAppearance}</p>
            <p>Status: {status}</p>
            <a href={linkToCharacter}>Go to character's page&#8594;</a>
        </div>
    </div>
);
export default CharacterCard;