import { ServiceContract, Container, injectable } from "react-native-modular-bootstrapper"
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { ReduxViewContainer, ResourceType } from 'react-native-modular-bootstrapper'
import * as Containers from '../core/containers'

@injectable()
export class ContainersModule implements ServiceContract.Module {
  public load(container: Container): void {
    ReduxViewContainer.registerReduxViewContainer(container, Containers.AppContainer, ServiceType.TYPE_CONTAINER.APP, ResourceType.AppRoot);
    ReduxViewContainer.registerReduxViewContainer(container, Containers.HomeContainer, ServiceType.TYPE_CONTAINER.HOME, ServiceType.TYPE_CONTAINER.HOME_CONNECTED);
    ReduxViewContainer.registerReduxViewContainer(container, Containers.MovieComingContainer, ServiceType.TYPE_CONTAINER.MOVIE_COMING, ServiceType.TYPE_CONTAINER.MOVIE_COMING_CONNECTED);
    ReduxViewContainer.registerReduxViewContainer(container, Containers.MovieSearchContainer, ServiceType.TYPE_CONTAINER.MOVIE_SEARCH, ServiceType.TYPE_CONTAINER.MOVIE_SEARCH_CONNECTED);
    ReduxViewContainer.registerReduxViewContainer(container, Containers.MovieShowingContainer, ServiceType.TYPE_CONTAINER.MOVIE_SHOWING, ServiceType.TYPE_CONTAINER.MOVIE_SHOWING_CONNECTED);
  }
}
