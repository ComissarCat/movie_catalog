export type Response = {
    Response: "True" | "False",
    Error: string,
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