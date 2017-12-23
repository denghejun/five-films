import { injectable, inject, ReduxReducerCombiner, ReduxReducer } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'

@injectable()
export class MovieReducerCombiner extends ReduxReducerCombiner {
  constructor(
    @inject(ServiceType.TYPE_REDUCER.MOVIE_COMING) private readonly movieComingReducer: ReduxReducer
  ) {
    super();
  }

  protected ProviderChildrenReducer(): any {
    return {
      coming: this.movieComingReducer.create()
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
