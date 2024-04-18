import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <h1>Rick And Morty Website</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"/characters"}>Rick And Morty Characters</Link>
        </>
    )
}