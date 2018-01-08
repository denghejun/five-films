import { ReduxViewContainer, injectable, inject } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { Dispatch } from 'react-redux'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import { width, height, totalSize } from 'react-native-dimension'

@injectable()
export class HomeContainer extends ReduxViewContainer<any> {
  private readonly mainNavigation = this.CreateMainNavigation();
  constructor(
    @inject(ServiceType.TYPE_VIEW.HOME) view,
    @inject(ServiceType.TYPE_CONTAINER.MOVIE_COMING) private readonly movieComingContainerConnectedView,
    @inject(ServiceType.TYPE_CONTAINER.MOVIE_SHOWING) private readonly movieShowingContainerConnectedView,
    @inject(ServiceType.TYPE_CONTAINER.MOVIE_SEARCH) private readonly movieSearchContainerConnectedView,
    @inject(ServiceType.TYPE_CONTAINER.DRAWER_CONTENT) private readonly drawerContainerConnectedView,
    @inject(ServiceType.TYPE_CONTAINER.USER_DETAIL) private readonly userDetailContainerConnectedView
  ) {
    super(view);
  }

  private CreateMainNavigation(): any {
    return DrawerNavigator({
      main: {
        screen: StackNavigator({
          movie: {
            screen: TabNavigator({
              coming: {
                screen: this.movieComingContainerConnectedView,
              },
              showing: {
                screen: this.movieShowingContainerConnectedView,
              },
              search: {
                screen: this.movieSearchContainerConnectedView,
              }
            }, {
                swipeEnabled: true,
                animationEnabled: true,
                tabBarOptions: {
                  style: {
                    backgroundColor: 'white',
                  },
                }
              })
          },
          user: {
            screen: this.userDetailContainerConnectedView
          }
        })
      }
    }, {
        drawerWidth: width(70),
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        contentComponent: this.drawerContainerConnectedView
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
