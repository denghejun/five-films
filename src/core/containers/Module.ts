import { ServiceContract, Container, injectable } from "react-native-modular-bootstrapper"
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { ReduxViewContainer, ResourceType } from 'react-native-modular-bootstrapper'
import * as Containers from './'

@injectable()
export class ContainersModule implements ServiceContract.Module {
  public load(container: Container): void {
    ReduxViewContainer.registerReduxViewContainer(container, Containers.AppContainer, ResourceType.AppRoot);
    ReduxViewContainer.registerReduxViewContainer(container, Containers.HomeContainer, ServiceType.TYPE_CONTAINER.HOME);
    ReduxViewContainer.registerReduxViewContainer(container, Containers.MovieComingContainer, ServiceType.TYPE_CONTAINER.MOVIE_COMING);
    ReduxViewContainer.registerReduxViewContainer(container, Containers.MovieSearchContainer, ServiceType.TYPE_CONTAINER.MOVIE_SEARCH);
    ReduxViewContainer.registerReduxViewContainer(container, Containers.MovieShowingContainer, ServiceType.TYPE_CONTAINER.MOVIE_SHOWING);
    ReduxViewContainer.registerReduxViewContainer(container, Containers.UserDetailContainer, ServiceType.TYPE_CONTAINER.USER_DETAIL);
    ReduxViewContainer.registerReduxViewContainer(container, Containers.DrawerContentContainer, ServiceType.TYPE_CONTAINER.DRAWER_CONTENT);
  }
}
