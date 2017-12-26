import { homeAction as action } from '../../actions/home'
import { handleActions } from 'redux-actions'

export const location = handleActions(
  {
    [action['home']['location']['fetch']['start']]: (state, action) => {
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        isReady: false,
        data: {
          city: undefined
        }
      });
    },
    [action['home']['location']['fetch']['success']]: (state, action) => {
      const city = action.payload['city'];
      return Object.assign({}, state, {
        isFetching: false,
        hasError: false,
        errorMessage: undefined,
        isReady: true,
        data: {
          city: city
        }
      });
    },
    [action['home']['location']['fetch']['failed']]: (state, action) => {
      const message = action.payload['message'];
      return Object.assign({}, state, {
        isFetching: false,
        isReady: false,
        hasError: true,
        errorMessage: message,
        data: {
          city: undefined
        }
      });
    }
  },
  {
    isFetching: false,
    hasError: false,
    isReady: false,
    errorMessage: undefined,
    data: {
      city: undefined
    }
  }
);
