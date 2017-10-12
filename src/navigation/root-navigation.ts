import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { MainTabNavigator } from './main-tab-navigator';

export const RootStackNavigator = StackNavigator({
  Main: {
    screen: MainTabNavigator,
  }
});
