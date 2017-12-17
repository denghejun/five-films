import { createActions, ActionMap, ActionFunctionAny } from 'redux-actions'
import { location } from './LocationAction'
import { PAYLOAD_CREATOR_DEFAULT } from 'react-native-modular-bootstrapper'

export const action = createActions({
  HOME: {
    LOCATION: location
  }
});
