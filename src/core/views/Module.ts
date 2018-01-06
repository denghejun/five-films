import { ServiceContract } from "react-native-modular-bootstrapper"
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { Container, injectable } from 'react-native-modular-bootstrapper'
import * as Views from './'

@injectable()
export class ViewsModule implements ServiceContract.Module {
  public load(container: Container): void {
    container.bind(ServiceType.TYPE_VIEW.APP).toConstantValue(Views.AppView);
    container.bind(ServiceType.TYPE_VIEW.HOME).toConstantValue(Views.HomeView);
    container.bind(ServiceType.TYPE_VIEW.MOVIE_COMING).toConstantValue(Views.MovieComingView);
    container.bind(ServiceType.TYPE_VIEW.MOVIE_SHOWING).toConstantValue(Views.MovieShowingView);
    container.bind(ServiceType.TYPE_VIEW.MOVIE_SEARCH).toConstantValue(Views.MovieSearchView);
    container.bind(ServiceType.TYPE_VIEW.DRAWER_CONTENT).toConstantValue(Views.DrawerContentView);
    container.bind(ServiceType.TYPE_VIEW.USER_DETAIL).toConstantValue(Views.UserDetailView);
  }
}
