import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { app } from '../../reducers'

export const store = createStore(app, applyMiddleware(thunk, logger));
