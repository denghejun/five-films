import { injectable, inject, ReduxReducerCombiner, ReduxReducer } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { MovieComingReducer } from './MovieComingReducer'
import { MovieShowingReducer } from './MovieShowingReducer'
import { MovieSearchReducer } from './MovieSearchReducer'

@injectable()
export class MovieReducerCombiner extends ReduxReducerCombiner {
  constructor(
    @inject(ServiceType.TYPE_ACTION.MOVIE) action,
  ) {
    super(action);
  }

  protected ProvideReducers(): any {
    return {
      coming: MovieComingReducer,
      showing: MovieShowingReducer,
      search: MovieSearchReducer
    };
  }
}

/**
 * the state will be like below
 * {
 *      movie: {
 *          showing: {
 *              isLoading: false,
 *              data: {}
 *            },
 *          coming: {
 *              isLoading: false,
 *              data: {}
 *            },
 *          search: {
 *              isLoading: false,
 *              data: {}
 *            }
 *      }
 * }
 *
 */
