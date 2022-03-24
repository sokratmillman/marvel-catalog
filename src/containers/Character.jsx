import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header/Header";
import { apikey } from "../utils"



function Comic() {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const basicPath = "https://gateway.marvel.com:443/v1/public/characters";
    useEffect(async () => {
        setIsLoading(true);
        const result = await axios(`${basicPath}/${id}?apikey=${apikey}`);
        setData(result.data);
        setIsLoading(false);
    }, [id])
    
    
    return (
       <div>
       {isLoading && <p>Loading ...</p>}
       {!isLoading && (
        <>
            <Header/>
            <br></br>
            <h1>{data["data"]["results"][0]["name"]}</h1>
            <p>{data["data"]["results"][0]["description"]}</p>
            <h2>Comics:</h2>
            {data["data"]["results"][0]["comics"]["items"].map((item, index)=>
            <NavLink key={index} to={`/comic/${item["resourceURI"].split("/")[item["resourceURI"].split("/").length-1]}`}>{item["name"]}</NavLink>)}
        </>
       )}
            
        </div>
    )
}

export default Comic;