import { RickAndMortyData } from "../api/RickAndMortyResponse.ts";
import { useState } from "react";
import RickAndMortyCharacters from "./RickAndMortyCharacters.tsx";
import { Link } from "react-router-dom";

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
                        <h2>{props.results.name} <Link to={"/character/" + props.results.id}>To Character</Link></h2>
                    </div>
                )
            }
        </>
    )

}
