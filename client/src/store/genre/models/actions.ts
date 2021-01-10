import { Genre } from "./Genre";

export const GET_GENRES_REQUEST = 'GET_GENRES'
export const GET_GENRES_SUCCESS = 'GET_GENRES_SUCCESS'
export const GET_GENRES_FAILURE = 'GET_GENRES_FAILURE'


interface GenreAsync {
    load: boolean;
    genres: Genre[];
    err: string;
}

interface GetGenresRequest extends GenreAsync {
    type: typeof GET_GENRES_REQUEST
}
interface GetGenresSuccess extends GenreAsync {
    type: typeof GET_GENRES_SUCCESS
}
interface GetGenresFailure extends GenreAsync {
    type: typeof GET_GENRES_FAILURE
}

export type GenreActionTypes = GetGenresRequest | GetGenresSuccess | GetGenresFailure