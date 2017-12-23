import { combineReducers } from 'redux'
import { location } from './LocationReducer'

export const homeReducer = combineReducers({
  location
})
