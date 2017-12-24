import { ServiceContract, Container, injectable, ResourceType, ReduxReducerCombiner } from "react-native-modular-bootstrapper"
import { ServiceType, Movie } from '@colorfulwindmill/five-films-interface'
import * as Reducers from './'

@injectable()
export class ReducersModule implements ServiceContract.Module {
  public load(container: Container): void {
    container.bind(ServiceType.TYPE_REDUCER.MOVIE_COMING).to(Reducers.MovieComingReducer);
    container.bind(ServiceType.TYPE_REDUCER.MOVIE_SHOWING).to(Reducers.MovieShowingReducer);
    container.bind(ServiceType.TYPE_REDUCER.MOVIE_SEARCH).to(Reducers.MovieSearchReducer);
    container.bind(ServiceType.TYPE_REDUCER_COMBINER.MOVIE).to(Reducers.MovieReducerCombiner);
    container.bind(ServiceType.TYPE_REDUCER_COMBINER.APP).to(Reducers.AppReducerCombiner);
    container.bind(ResourceType.AppReducer).toDynamicValue(context => {
      return context.container.get<ReduxReducerCombiner>(ServiceType.TYPE_REDUCER_COMBINER.APP).Combine();
    });
  }
}
