import { TabNavigator } from 'react-navigation'
import { MovieComingScreen } from '../movie'

export const MainTabNavigator = TabNavigator({
  MovieComing: {
    screen: MovieComingScreen,
  },
  MovieShowing: {
    screen: MovieComingScreen,
  },
  MovieSearch: {
    screen: MovieComingScreen,
  }
});
