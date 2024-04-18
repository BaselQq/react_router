import { useParams } from "react-router-dom";

export default function CharacterPage() {

    const param = useParams();

return(
        <>
        <h2>{"This is character id:" + param.id}</h2>
        </>
    )
}