import {Dispatch} from 'redux'
import {AppActions} from '../models/actions'
import { GET_GENRES_FAILURE, GET_GENRES_REQUEST, GET_GENRES_SUCCESS } from './models/actions'
import { Genre } from './models/Genre'

const requestGenres = (): AppActions => ({
    type: GET_GENRES_REQUEST,
    load: true,
    genres: [],
    err: ''
})

const setGenres = (genres: Genre[]): AppActions => ({
    type: GET_GENRES_SUCCESS,
    load: false,
    genres: genres,
    err: ''
})

const invalidGenres = (): AppActions => ({
    type: GET_GENRES_FAILURE,
    load: false,
    genres: [],
    err: "Unable to fetch genres"
})

export const boundGenres = () => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(requestGenres())
        return fetch('api/genres')
        .then(r => r.json())
        .then(genres => dispatch(setGenres(genres)))
    }
}