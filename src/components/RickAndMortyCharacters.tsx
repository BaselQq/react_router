import { getResponse, Results, RickAndMortyData } from "../api/RickAndMortyResponse.ts";
import { useEffect, useState } from "react";
import RickAndMortyCard from "./RickAndMortyCard.tsx";

const RickAndMortyCharacters = () => {

    const [characters, setCharacters] = useState<RickAndMortyData>()

    async function loadCharacters() {
        const data: RickAndMortyData = await getResponse();
        setCharacters(data);
    }

    useEffect(() => {
        loadCharacters();
    }, []);

    return(
        <>
            {characters?.results.map((character: Results) => (
                <RickAndMortyCard results={character} key={character.id}/>
            ))}
        </>
    )
}

export default RickAndMortyCharacters;