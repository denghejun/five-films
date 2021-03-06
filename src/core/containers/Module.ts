import { ServiceContract, Container, injectable } from "react-native-modular-bootstrapper"
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { ReduxViewContainer, ResourceType } from 'react-native-modular-bootstrapper'
import * as Containers from './'

@injectable()
export class ContainersModule implements ServiceContract.Module {
  public load(container: Container): void {
    ReduxViewContainer.registerReduxViewContainer(container, Containers.AppContainer, ResourceType.AppRoot);
    ReduxViewContainer.registerReduxViewContainer(container, Containers.HomeContainer, ServiceType.TYPE_CONTAINER.HOME);
    ReduxViewContainer.registerReduxViewContainers(container, {
      content: Containers.DrawerContentContainer,
    }, ServiceType.TYPE_CONTAINER.DRAWER);

    ReduxViewContainer.registerReduxViewContainers(container, {
      coming: Containers.MovieComingContainer,
      showing: Containers.MovieShowingContainer,
      search: Containers.MovieSearchContainer
    }, ServiceType.TYPE_CONTAINER.MOVIE);

    ReduxViewContainer.registerReduxViewContainers(container, {
      userDetail: Containers.UserDetailContainer,
      userLogin: Containers.UserLoginContainer
    }, ServiceType.TYPE_CONTAINER.USER);
  }
}
