import React from "react";
import "./ComicCard.css"

const ComicCard = ({
    title,
    imageSource,
    year,
    tag,
    linkToComic,
}) => (
    <div className="ComicCard">
        <div className="comicCover"><img src={imageSource} width="200px"></img></div>
        <div className="comicInfo">
            <h2>{title}</h2>
            <p>Year of publication: {year}</p>
            <p>{tag}</p>
            <a href={linkToComic}>Go to comic's page&#8594;</a>
        </div>
    </div>
);
export default ComicCard;