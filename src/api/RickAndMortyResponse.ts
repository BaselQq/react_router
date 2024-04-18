export type Results = {
    id: number,
    name: string,
    status: string
}

export type RickAndMortyData = {
    info: {
        count: number
    }
    results: Results[]
}

export async function getResponse(): Promise<RickAndMortyData> {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    return data;
}