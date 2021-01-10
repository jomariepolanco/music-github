import { Audio } from "./models/Audio";
import {AudioActionTypes, OneAudioActionType,GET_AUDIOS_FAILURE, GET_AUDIOS_REQUEST, GET_AUDIOS_SUCCESS, GET_ONE_AUDIO_FAILURE, GET_ONE_AUDIO_REQUEST, GET_ONE_AUDIO_SUCCESS} from './models/actions'

interface AudioState {
    load: boolean;
    audios: Audio[];
    audio: {};
    err: string;
}

const defaultState: AudioState = {
    load: false,
    audios: [],
    audio: {},
    err: ''
}

export const audioReducer = (state = defaultState, action: AudioActionTypes): AudioState => {
    switch(action.type){
        case GET_AUDIOS_REQUEST:
            return {load: true, audios: [], audio: {}, err: ''}
        case GET_AUDIOS_SUCCESS:
            return {load: false, audios: action.audios, audio: {}, err: ''}
        case GET_AUDIOS_FAILURE:
            return {load: false, audios: [], audio: {}, err: action.err}
        default: 
            return state
    }
}

interface OneAudioState {
    load: boolean;
    audio: {};
    err: string;
}

export const oneAudioReducer = (state = defaultState, action: OneAudioActionType): OneAudioState => {
    switch(action.type){
        case GET_ONE_AUDIO_REQUEST:
            return {load: true, audio: {}, err: ''}
        case GET_ONE_AUDIO_SUCCESS:
            return {load: false, audio: action.audio, err: ''}
        case GET_ONE_AUDIO_FAILURE:
            return {load: false, audio: {}, err: action.err}
        default:
            return state
    }
}