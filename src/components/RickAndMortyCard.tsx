import { RickAndMortyData } from "../api/RickAndMortyResponse.ts";
import { useState } from "react";
import RickAndMortyCharacters from "./RickAndMortyCharacters.tsx";

export default function RickAndMortyCard(props: Readonly<RickAndMortyData>) {
    // const [search, setSearch] = useState("");
    //
    // const handleChange = (e: { target: {value: string}}) => {
    //     setSearch(e.target.value);
    // }

    return (
        <>
            {/*<input type="text" onChange={handleChange}/>*/}
            {
                (
                    <div>
                        <h2>{props.results.name}</h2>
                    </div>
                )
            }
        </>
    )

}
