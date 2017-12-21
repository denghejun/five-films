import { ReduxViewContainer, injectable, inject } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { Dispatch } from 'react-redux'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { MovieComingScreen } from '../../views/movie'

@injectable()
export class HomeContainer extends ReduxViewContainer<any> {
  private readonly mainNavigation = this.CreateMainNavigation();
  constructor(
    @inject(ServiceType.TYPE_VIEW.HOME) view,
    @inject(ServiceType.TYPE_CONTAINER.MOVIE_COMING_CONNECTED) private readonly MovieComingContainerConnectedView,
    @inject(ServiceType.TYPE_CONTAINER.MOVIE_SHOWING_CONNECTED) private readonly MovieShowingContainerConnectedView,
    @inject(ServiceType.TYPE_CONTAINER.MOVIE_SEARCH_CONNECTED) private readonly MovieSearchContainerConnectedView
  ) {
    super(view);
  }

  private CreateMainNavigation(): any {
    return StackNavigator({
      Main: {
        screen: TabNavigator({
          MovieComing: {
            screen: this.MovieComingContainerConnectedView,
          },
          MovieShowing: {
            screen: this.MovieShowingContainerConnectedView,
          },
          MovieSearch: {
            screen: this.MovieSearchContainerConnectedView,
          }
        })
      }
    })
  }

  protected MapStateToProps(initialState: any, ownProps: any): any {
    return {
      RootStackNavigator: this.mainNavigation
    };
  }
  protected MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any {
    return {};
  }
}
