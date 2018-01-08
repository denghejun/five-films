import { ServiceContract } from "react-native-modular-bootstrapper"
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { Container, injectable } from 'react-native-modular-bootstrapper'
import * as Views from './'

@injectable()
export class ViewsModule implements ServiceContract.Module {
  public load(container: Container): void {
    container.bind(ServiceType.TYPE_VIEW.APP).toConstantValue(Views.AppView);
    container.bind(ServiceType.TYPE_VIEW.HOME).toConstantValue(Views.HomeView);
    container.bind(ServiceType.TYPE_VIEW.DRAWER).toConstantValue({
      content: Views.DrawerContentView
    });
    
    container.bind(ServiceType.TYPE_VIEW.MOVIE).toConstantValue({
      coming: Views.MovieComingView,
      showing: Views.MovieShowingView,
      search: Views.MovieSearchView
    });

    container.bind(ServiceType.TYPE_VIEW.USER).toConstantValue({
      userDetail: Views.UserDetailView,
      userLogin: Views.UserLoginView
    });
  }
}
