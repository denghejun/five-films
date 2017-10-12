import * as React from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

export class MovieComingScreen extends React.Component {
  static navigationOptions = {
    title: 'Movie Coming'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Movie Coming Screen</Text>
      </View>
    );
  }
}
