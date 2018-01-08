import { injectable, inject, ReduxReducerCombiner, combineReducers } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'

@injectable()
export class AppReducerCombiner extends ReduxReducerCombiner {
  constructor(
    @inject(ServiceType.TYPE_REDUCER_COMBINER.MOVIE) private readonly movieReducerCombiner: ReduxReducerCombiner
  ) {
    super(null);
  }

  protected ProvideReducers() {
    return {
      movie: this.movieReducerCombiner
    };
  }
}
