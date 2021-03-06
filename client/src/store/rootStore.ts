import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk, {ThunkMiddleware} from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {genreReducer} from './genre/GenreReducer'
import {audioReducer, oneAudioReducer} from './audio/AudioReducer'
import {producerReducer, setUserReducer, setNewUserReducer} from './producer/ProducerReducer'
import {contributionReducer} from './contribution/ContributionReducer'
import {AppActions} from './models/actions'

const logger = createLogger()

export const rootReducer = combineReducers({
    genreReducer, audioReducer, producerReducer, contributionReducer, oneAudioReducer, setUserReducer, setNewUserReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore<AppState, AppActions, {}, {} >(
    rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
)