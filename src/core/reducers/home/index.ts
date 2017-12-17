import { combineReducers } from 'redux'
import { location } from './LocationReducer'

export const home = combineReducers({
  home: combineReducers({
    location
  })
})
