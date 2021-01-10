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