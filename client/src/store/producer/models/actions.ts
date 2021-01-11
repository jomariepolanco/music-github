import {Producer} from './Producer'

export const GET_PRODUCERS_REQUEST = 'GET_PRODUCERS'
export const GET_PRODUCERS_SUCCESS = 'GET_PRODUCERS_SUCCESS'
export const GET_PRODUCERS_FAILURE = 'GET_PRODUCER_FAILURE'

interface ProducerAsync {
    load: boolean;
    producers: Producer[];
    err: string;
}

interface GetProducersRequest extends ProducerAsync {
    type: typeof GET_PRODUCERS_REQUEST
}
interface GetProducersSuccess extends ProducerAsync {
    type: typeof GET_PRODUCERS_SUCCESS
}
interface GetProducersFailure extends ProducerAsync {
    type: typeof GET_PRODUCERS_FAILURE
}

export type ProducerActionTypes = GetProducersRequest | GetProducersSuccess | GetProducersFailure

export const SET_USER_REQUEST = 'SET_USER'
export const SET_USER_SUCCESS = 'SET_USER_SUCCESS'
export const SET_USER_FAILURE = 'SET_USER_FAILURE'

interface OneProducerAsync {
    load: boolean;
    producer: object;
    err: string;
}

interface SetOneUserRequest extends OneProducerAsync {
    type: typeof SET_USER_REQUEST
}
interface SetOneUserSuccess extends OneProducerAsync {
    type: typeof SET_USER_SUCCESS
}
interface SetOneUserFailure extends OneProducerAsync {
    type: typeof SET_USER_FAILURE
}

export type UserActionType = SetOneUserFailure | SetOneUserRequest | SetOneUserSuccess