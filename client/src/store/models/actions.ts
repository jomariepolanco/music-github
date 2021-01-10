import { AudioActionTypes } from '../audio/models/actions';
import {GenreActionTypes} from '../genre/models/actions'
import { ProducerActionTypes } from '../producer/models/actions';

export type AppActions = GenreActionTypes | AudioActionTypes | ProducerActionTypes;