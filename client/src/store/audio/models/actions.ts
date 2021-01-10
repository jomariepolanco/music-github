import {Audio} from './Audio'

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