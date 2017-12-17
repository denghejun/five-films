import { combineReducers } from 'redux'
import { home } from './home'

export const app = combineReducers({
  app: combineReducers({
    home
  })
})
