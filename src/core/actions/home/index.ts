import { createActions } from 'redux-actions'
import { locationAction } from './LocationAction'

export const homeAction = createActions({
  HOME: {
    LOCATION: locationAction
  }
});
