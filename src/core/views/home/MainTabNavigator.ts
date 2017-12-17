import { TabNavigator } from 'react-navigation'
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { Container } from 'react-native-modular-bootstrapper'
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
