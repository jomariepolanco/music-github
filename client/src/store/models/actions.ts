import { AudioActionTypes, OneAudioActionType} from '../audio/models/actions';
import { ContributionActionTypes } from '../contribution/models/actions';
import {GenreActionTypes} from '../genre/models/actions'
import { ProducerActionTypes, UserActionType } from '../producer/models/actions';

export type AppActions = GenreActionTypes | AudioActionTypes | ProducerActionTypes | ContributionActionTypes | OneAudioActionType | UserActionType;