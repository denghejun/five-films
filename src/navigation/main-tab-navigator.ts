import { TabNavigator } from 'react-navigation'
import * as Screens from '../screens'

export const MainTabNavigator = TabNavigator({
  MovieComing: {
    screen: Screens.MovieComingScreen,
  },
  MovieShowing: {
    screen: Screens.MovieShowingScreen,
  },
  MovieSearch: {
    screen: Screens.MovieSearchScreen,
  },
});
