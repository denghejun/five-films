import { injectable, inject, ReduxReducer } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import merge from 'merge/merge'

@injectable()
export class MovieSearchReducer extends ReduxReducer {
  constructor( @inject(ServiceType.TYPE_ACTION.MOVIE) action) {
    super(action);
  }

  protected ProvideInitState(): any {
    return {
      isLoading: false,
      hasError: false,
      errorMessage: undefined,
      data: undefined
    };
  }
  protected ProvideActionHandler(): any {
    return {
      [this.action.movie.search.fetch.start]: (state, action) => {
        return merge.recursive(true, state, {
          errorMessage: undefined,
          isLoading: true,
          data: undefined
        })
      },
      [this.action.movie.search.fetch.success]: (state, action) => {
        return merge(true, false, state, {
          isLoading: false,
          hasError: false,
          errorMessage: undefined,
          data: action.payload.result
        })
      },
      [this.action.movie.search.fetch.failed]: (state, action) => {
        return merge.recursive(true, state, {
          isLoading: false,
          hasError: true,
          errorMessage: action.payload.message,
          data: undefined
        })
      }
    };
  }
}
