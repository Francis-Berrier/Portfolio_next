export type Film = {
    id: number;
    imdbUrl: string;
    imgFilmUrl: string;
    title: string;
    year: string;
    director: string;
    actors: string[];
    occupation: string;
};

export type FilmCardDataType = {
    movieInfos: string;
    directedBy: string;
    starring: string;
    occupation: string;
}