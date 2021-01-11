import { Dispatch } from "react";
import { AppActions } from "../models/actions";
import { GET_PRODUCERS_FAILURE, GET_PRODUCERS_REQUEST, GET_PRODUCERS_SUCCESS, SET_USER_FAILURE, SET_USER_REQUEST, SET_USER_SUCCESS } from "./models/actions";
import { Producer } from "./models/Producer";

//producers

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

export const boundProducers = () => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(requestProducers())
        return fetch('api/producers')
        .then(r => r.json())
        .then(producers => dispatch(setProducers(producers)))
    }
}

//user 
const requestUser = (): AppActions => ({
    type: SET_USER_REQUEST,
    load: true,
    producer: {},
    err: ''
})

const setUser = (producer: Producer): AppActions => ({
    type: SET_USER_SUCCESS,
    load: false,
    producer: producer,
    err: ''
})

// const invalidUser = (): AppActions => ({
//     type: SET_USER_FAILURE,
//     load: false,
//     producer: {},
//     err: 'Unable to set user'
// })

export const boundUser = (user: Producer) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(requestUser())
        dispatch(setUser(user))
    }
}