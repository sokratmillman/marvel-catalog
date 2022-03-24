import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header/Header";
import CharactersCards from "../components/CardContainer/CharactersCards";
import { apikey } from "../utils";

function Characters() {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const basicPath = "https://gateway.marvel.com:443/v1/public/characters";
    useEffect(async () => {
        setIsLoading(true);
        const result = await axios(`${basicPath}?limit=10&apikey=${apikey}`);
        setResponse(result.data);
        setIsLoading(false);
    }, []);

    return (
        <div>
            <Header/>
            <br></br>
            {isLoading && <p>Loading</p>}
            {!isLoading && <CharactersCards cards={response.data.results}/>}
        </div>
    )
}

export default Characters;