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
    @inject(ServiceType.TYPE_CONTAINER.MOVIE_COMING) private readonly movieComingContainer,
    @inject(ServiceType.TYPE_CONTAINER.MOVIE_SHOWING) private readonly movieShowingContainer,
    @inject(ServiceType.TYPE_CONTAINER.MOVIE_SEARCH) private readonly movieSearchContainer,
    @inject(ServiceType.TYPE_CONTAINER.DRAWER_CONTENT) private readonly drawerContainer,
    @inject(ServiceType.TYPE_CONTAINER.USER) private readonly userContainers
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
                screen: this.movieComingContainer,
              },
              showing: {
                screen: this.movieShowingContainer,
              },
              search: {
                screen: this.movieSearchContainer,
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
            screen: this.userContainers.userLogin
          }
        })
      }
    }, {
        drawerWidth: width(70),
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        contentComponent: this.drawerContainer
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
