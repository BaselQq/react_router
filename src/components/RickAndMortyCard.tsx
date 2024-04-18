import { Link } from "react-router-dom";

export default function RickAndMortyCard(props: {results: {
        id: number,
        name: string,
        status: string
    }}) {

    return (
        <>
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
