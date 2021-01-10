import { defaultCipherList } from 'constants'
import { GET_GENRES_FAILURE, GET_GENRES_REQUEST, GET_GENRES_SUCCESS, GenreActionTypes } from './models/actions'
import {Genre} from './models/Genre'

interface GenreState {
    load: boolean;
    genres: Genre[];
    err: string;
}

const defaultState: GenreState = {
    load: false,
    genres: [],
    err: ''
}

export const genreReducer = (state = defaultState, action: GenreActionTypes): GenreState => {
    switch(action.type){
        case GET_GENRES_REQUEST:
            return {load: true, genres: [], err: ''}
        case GET_GENRES_SUCCESS:
            return {load: false, genres: action.genres, err: ''}
        case GET_GENRES_FAILURE:
            return {load: false, genres: [], err: action.err}
        default:
            return state
    }
}