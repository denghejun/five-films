import * as React from 'react'
import { Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Five Films'
  }

  render() {
    return (
      <Text>Home Screen</Text>
    );
  }
}
