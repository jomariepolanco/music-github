import {Audio} from './Audio'

// get 'api/audios' 

export const GET_AUDIOS_REQUEST = 'GET_AUDIOS'
export const GET_AUDIOS_SUCCESS = 'GET_AUDIOS_SUCCESS'
export const GET_AUDIOS_FAILURE = 'GET_AUDIOS_FAILURE'

interface AudioAsync {
    load: boolean;
    audios: Audio[];
    err: string;
}

interface GetAudiosRequest extends AudioAsync {
    type: typeof GET_AUDIOS_REQUEST
}
interface GetAudiosSuccess extends AudioAsync {
    type: typeof GET_AUDIOS_SUCCESS
}
interface GetAudiosFailure extends AudioAsync {
    type: typeof GET_AUDIOS_FAILURE
}

export type AudioActionTypes = GetAudiosRequest | GetAudiosSuccess | GetAudiosFailure

// get 'api/audios/:id'

export const GET_ONE_AUDIO_REQUEST = 'GET_ONE_AUDIO'
export const GET_ONE_AUDIO_SUCCESS = 'GET_ONE_AUDIO_SUCCESS'
export const GET_ONE_AUDIO_FAILURE = 'GET_ONE_AUDIO_FAILURE'

interface OneAudioAsync {
    load: boolean;
    audio: object;
    err: string;
}

interface GetOneAudioRequest extends OneAudioAsync {
    type: typeof GET_ONE_AUDIO_REQUEST
}
interface GetOneAudioSuccess extends OneAudioAsync {
    type: typeof GET_ONE_AUDIO_SUCCESS
}
interface GetOneAudioFailure extends OneAudioAsync {
    type: typeof GET_ONE_AUDIO_FAILURE
}

export type OneAudioActionType = GetOneAudioFailure | GetOneAudioSuccess | GetOneAudioRequest