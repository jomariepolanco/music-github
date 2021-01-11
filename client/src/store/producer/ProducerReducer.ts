import { GET_PRODUCERS_FAILURE, GET_PRODUCERS_REQUEST, GET_PRODUCERS_SUCCESS, ProducerActionTypes, SET_USER_FAILURE, SET_USER_REQUEST, SET_USER_SUCCESS, UserActionType } from "./models/actions";
import { Producer } from "./models/Producer";

interface ProducerState {
    load: boolean;
    producers: Producer[];
    err: string;
}

const defaultState: ProducerState = {
    load: false,
    producers: [],
    err: ''
}

export const producerReducer = (state = defaultState, action: ProducerActionTypes): ProducerState => {
    switch(action.type){
        case GET_PRODUCERS_REQUEST:
            return {load: true, producers: [], err: ''}
        case GET_PRODUCERS_SUCCESS:
            return {load: false, producers: action.producers, err: ''}
        case GET_PRODUCERS_FAILURE:
            return {load: false, producers: [], err: action.err}
        default: 
            return state
    }
}

interface UserState {
    load: boolean;
    producer: {},
    err: string;
}

const initialState: UserState = {
    load: false,
    producer: {},
    err: ''
}

export const setUserReducer = (state = initialState, action: UserActionType): UserState => {
    switch(action.type){
        case SET_USER_REQUEST:
            return {load: true, producer: {}, err: ''}
        case SET_USER_SUCCESS:
            return {load: false, producer: action.producer, err: ''}
        case SET_USER_FAILURE:
            return {load: false, producer: {}, err: action.err}
        default:
            return state
    }
}