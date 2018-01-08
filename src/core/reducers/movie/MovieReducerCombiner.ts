import { injectable, inject, ReduxReducerCombiner, ReduxReducer } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'

@injectable()
export class MovieReducerCombiner extends ReduxReducerCombiner {
  constructor(
    @inject(ServiceType.TYPE_REDUCER.MOVIE.COMING) private readonly movieComingReducer: ReduxReducer,
    @inject(ServiceType.TYPE_REDUCER.MOVIE.SHOWING) private readonly movieShowingReducer: ReduxReducer,
    @inject(ServiceType.TYPE_REDUCER.MOVIE.SEARCH) private readonly movieSearchReducer: ReduxReducer
  ) {
    super();
  }

  protected ProviderChildrenReducer(): any {
    return {
      coming: this.movieComingReducer.create(),
      showing: this.movieShowingReducer.create(),
      search: this.movieSearchReducer.create()
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
