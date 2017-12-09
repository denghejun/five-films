import { StackNavigator } from 'react-navigation';
import { MainTabNavigator } from './MainTabNavigator';

export const RootStackNavigator = StackNavigator({
  Main: {
    screen: MainTabNavigator,
  }
});
