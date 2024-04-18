export type RickAndMortyData = {
    info: {
        count: number
    }
    results: {
        id: number,
        name: string,
        status: string
    }[]
}

export async function getResponse(): Promise<RickAndMortyData> {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    return data;
}