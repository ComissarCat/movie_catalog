export type Response = {
    Response: boolean,
    Search?: Movie[],
    totalResults?: string
}

export type Movie = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}