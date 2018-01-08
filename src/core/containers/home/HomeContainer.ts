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
    @inject(ServiceType.TYPE_CONTAINER.DRAWER) private readonly drawerContainers,
    @inject(ServiceType.TYPE_CONTAINER.MOVIE) private readonly movieContainers,
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
                screen: this.movieContainers.coming,
              },
              showing: {
                screen: this.movieContainers.showing,
              },
              search: {
                screen: this.movieContainers.search,
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
        contentComponent: this.drawerContainers.content
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
