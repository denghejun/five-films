import { ServiceContract } from "react-native-modular-bootstrapper"
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { ReduxViewContainer } from 'react-native-modular-bootstrapper'
import * as Containers from '../core/containers'
import { Container, injectable } from 'inversify'

@injectable()
export class ContainersModule implements ServiceContract.Module {
  public load(container: Container): void {
    container.bind<ReduxViewContainer<any>>(ServiceType.TYPE_CONTAINER.APP).to(Containers.AppContainer);
    container.bind<ReduxViewContainer<any>>(ServiceType.TYPE_CONTAINER.HOME).to(Containers.HomeContainer);
    container.bind<ReduxViewContainer<any>>(ServiceType.TYPE_CONTAINER.MOVIE_COMING).to(Containers.MovieComingContainer);
    container.bind<ReduxViewContainer<any>>(ServiceType.TYPE_CONTAINER.MOVIE_SEARCH).to(Containers.MovieSearchContainer);
    container.bind<ReduxViewContainer<any>>(ServiceType.TYPE_CONTAINER.MOVIE_SHOWING).to(Containers.MovieShowingContainer);
  }
}
