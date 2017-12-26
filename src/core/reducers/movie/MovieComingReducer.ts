import { injectable, inject, ReduxReducer } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'

@injectable()
export class MovieComingReducer extends ReduxReducer {
  constructor( @inject(ServiceType.TYPE_ACTION.MOVIE) action) {
    super(action);
  }

  protected ProvideInitState(): any {
    return {
      isLoading: false,
      hasError: false,
      movies: undefined,
      errorMessage: undefined,
      movieItemFlipStates: {}
    };
  }
  protected ProvideActionHandler(): any {
    return {
      [this.action.movie.coming.fetch.start]: (state, action) => {
        return Object.assign({}, state, {
          isLoading: true,
          hasError: false,
          movies: undefined,
        });
      },
      [this.action.movie.coming.fetch.success]: (state, action) => {
        return Object.assign({}, state, {
          isLoading: false,
          hasError: false,
          movies: action.payload.result.data[1].data,
          movieItemFlipStates: {}
        });
      },
      [this.action.movie.coming.fetch.failed]: (state, action) => {
        return Object.assign({}, state, {
          isLoading: false,
          hasError: true,
          movies: undefined,
          errorMessage: action.payload.message,
        });
      },
      [this.action.movie.coming.movieItem.flip]: (state, action) => {
        const flipStates = state.movieItemFlipStates
        flipStates[action.payload.index] = !flipStates[action.payload.index]
        return Object.assign({}, state, {
          movieItemFlipStates: flipStates
        });
      }
    };
  }
}
