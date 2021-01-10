import { Audio } from "./models/Audio";
import {AudioActionTypes, GET_AUDIOS_FAILURE, GET_AUDIOS_REQUEST, GET_AUDIOS_SUCCESS} from './models/actions'

interface AudioState {
    load: boolean;
    audios: Audio[];
    err: string;
}

const defaultState: AudioState = {
    load: false,
    audios: [],
    err: ''
}

export const audioReducer = (state = defaultState, action: AudioActionTypes): AudioState => {
    switch(action.type){
        case GET_AUDIOS_REQUEST:
            return {load: true, audios: [], err: ''}
        case GET_AUDIOS_SUCCESS:
            return {load: false, audios: action.audios, err: ''}
        case GET_AUDIOS_FAILURE:
            return {load: false, audios: [], err: action.err}
        default: 
            return state
    }
}