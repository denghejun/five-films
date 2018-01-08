import { injectable, inject, ReduxReducer } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'

export class MovieShowingReducer extends ReduxReducer {
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
      [action.movie.showing.fetch.start]: (state, action) => {
        Object.assign({}, state, {
          isLoading: true,
          hasError: false,
          movies: undefined
        });
      },
      [action.movie.showing.fetch.success]: (state, action) => {
        return Object.assign({}, state, {
          isLoading: false,
          hasError: false,
          movies: action.payload.result.data[0].data,
          movieItemFlipStates: {}
        });
      },
      [action.movie.showing.fetch.failed]: (state, action) => {
        return Object.assign({}, state, {
          isLoading: false,
          hasError: true,
          movies: undefined,
          errorMessage: action.payload.message
        });
      },
      [action.movie.showing.movieItem.flip]: (state, action) => {
        const flipStates = state.movieItemFlipStates
        flipStates[action.payload.index] = !flipStates[action.payload.index]

        return Object.assign({}, state, {
          movieItemFlipStates: flipStates
        });
      }
    };
  }
}
