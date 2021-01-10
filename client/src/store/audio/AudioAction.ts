import { Dispatch } from "react";
import { AppActions } from "../models/actions";
import { GET_AUDIOS_FAILURE, GET_AUDIOS_REQUEST, GET_AUDIOS_SUCCESS } from "./models/actions";
import { Audio } from "./models/Audio";

const requestAudios = (): AppActions => ({
    type: GET_AUDIOS_REQUEST,
    load: true,
    audios: [],
    err: ''
})

const setAudios = (audios: Audio[]): AppActions => ({
    type: GET_AUDIOS_SUCCESS,
    load: false,
    audios: audios,
    err: ''
})

const invalidAudios = (): AppActions => ({
    type: GET_AUDIOS_FAILURE,
    load: false,
    audios: [],
    err: "Unable to fetch audios"
})

export const boundAudios = () => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(requestAudios())
        return fetch('api/audios')
        .then(r => r.json())
        .then(audios => dispatch(setAudios(audios)))
    }
}