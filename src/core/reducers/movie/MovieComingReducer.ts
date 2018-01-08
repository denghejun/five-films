import { injectable, inject, ReduxReducer } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'

export class MovieComingReducer extends ReduxReducer {
  protected ProvideInitState(): any {
    return {
      isLoading: false,
      hasError: false,
      movies: undefined,
      errorMessage: undefined,
      movieItemFlipStates: {}
    };
  }
  protected ProvideActionHandler(action): any {
    return {
      [action.movie.coming.fetch.start]: (state, action) => {
        return Object.assign({}, state, {
          isLoading: true,
          hasError: false,
          movies: undefined,
        });
      },
      [action.movie.coming.fetch.success]: (state, action) => {
        return Object.assign({}, state, {
          isLoading: false,
          hasError: false,
          movies: action.payload.result.data[1].data,
          movieItemFlipStates: {}
        });
      },
      [action.movie.coming.fetch.failed]: (state, action) => {
        return Object.assign({}, state, {
          isLoading: false,
          hasError: true,
          movies: undefined,
          errorMessage: action.payload.message,
        });
      },
      [action.movie.coming.movieItem.flip]: (state, action) => {
        const flipStates = state.movieItemFlipStates
        flipStates[action.payload.index] = !flipStates[action.payload.index]
        return Object.assign({}, state, {
          movieItemFlipStates: flipStates
        });
      }
    };
  }
}
