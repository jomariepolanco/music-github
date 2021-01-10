import { GET_PRODUCERS_FAILURE, GET_PRODUCERS_REQUEST, GET_PRODUCERS_SUCCESS, ProducerActionTypes } from "./models/actions";
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