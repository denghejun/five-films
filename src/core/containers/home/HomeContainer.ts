import { ReduxViewContainer, injectable, inject } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { Dispatch } from 'react-redux'
import { StackNavigator, TabNavigator } from 'react-navigation'

@injectable()
export class HomeContainer extends ReduxViewContainer<any> {
  private readonly mainNavigation = this.CreateMainNavigation();
  constructor(
    @inject(ServiceType.TYPE_VIEW.HOME) view,
    @inject(ServiceType.TYPE_CONTAINER.MOVIE_COMING_CONNECTED) private readonly movieComingContainerConnectedView,
    @inject(ServiceType.TYPE_CONTAINER.MOVIE_SHOWING_CONNECTED) private readonly movieShowingContainerConnectedView,
    @inject(ServiceType.TYPE_CONTAINER.MOVIE_SEARCH_CONNECTED) private readonly movieSearchContainerConnectedView
  ) {
    super(view);
  }

  private CreateMainNavigation(): any {
    return StackNavigator({
      Main: {
        screen: TabNavigator({
          MovieComing: {
            screen: this.movieComingContainerConnectedView,
          },
          MovieShowing: {
            screen: this.movieShowingContainerConnectedView,
          },
          MovieSearch: {
            screen: this.movieSearchContainerConnectedView,
          }
        })
      }
    })
  }

  protected MapStateToProps(initialState: any, ownProps: any): any {
    return {
      rootStackNavigator: this.mainNavigation
    };
  }
  protected MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any {
    return {};
  }
}
