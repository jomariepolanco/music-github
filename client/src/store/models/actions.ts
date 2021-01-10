import { AudioActionTypes } from '../audio/models/actions';
import {GenreActionTypes} from '../genre/models/actions'

export type AppActions = GenreActionTypes | AudioActionTypes;