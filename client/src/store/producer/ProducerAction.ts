import { Dispatch } from "react";
import { AppActions } from "../models/actions";
import { GET_PRODUCERS_FAILURE, GET_PRODUCERS_REQUEST, GET_PRODUCERS_SUCCESS } from "./models/actions";
import { Producer } from "./models/Producer";

const requestProducers = (): AppActions => ({
    type: GET_PRODUCERS_REQUEST,
    load: true,
    producers: [],
    err: ''
})

const setProducers = (producers: Producer[]): AppActions => ({
    type: GET_PRODUCERS_SUCCESS,
    load: false,
    producers: producers,
    err: ''
})

const invalidProducers = (): AppActions => ({
    type: GET_PRODUCERS_FAILURE,
    load: false,
    producers: [],
    err: "Unable to fetch producers"
})

export const boundGenres = () => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(requestProducers())
        return fetch('api/producers')
        .then(r => r.json())
        .then(producers => dispatch(setProducers(producers)))
    }
}