import { ServiceContract, Container, injectable } from "react-native-modular-bootstrapper"
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { ReduxViewContainer, ResourceType } from 'react-native-modular-bootstrapper'
import * as Containers from '../core/containers'

@injectable()
export class ContainersConnectedModule implements ServiceContract.Module {
  public load(container: Container): void {
    container.bind(ResourceType.AppRoot).toDynamicValue(context => {
      return container.get<ReduxViewContainer<any>>(ServiceType.TYPE_CONTAINER.APP).create();
    });

    container.bind(ServiceType.TYPE_CONTAINER.HOME_CONNECTED).toDynamicValue(context => {
      return container.get<ReduxViewContainer<any>>(ServiceType.TYPE_CONTAINER.HOME).create();
    });

    container.bind(ServiceType.TYPE_CONTAINER.MOVIE_COMING_CONNECTED).toFactory(context => {
      return () => context.container.get<ReduxViewContainer<any>>(ServiceType.TYPE_CONTAINER.MOVIE_COMING).create();
    });

    container.bind(ServiceType.TYPE_CONTAINER.MOVIE_SEARCH_CONNECTED).toFactory(context => {
      return () => context.container.get<ReduxViewContainer<any>>(ServiceType.TYPE_CONTAINER.MOVIE_SEARCH).create();
    });

    container.bind(ServiceType.TYPE_CONTAINER.MOVIE_SHOWING_CONNECTED).toFactory(context => {
      return () => context.container.get<ReduxViewContainer<any>>(ServiceType.TYPE_CONTAINER.MOVIE_SHOWING).create();
    });
  }
}
