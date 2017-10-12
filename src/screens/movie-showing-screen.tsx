import * as React from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

export class MovieShowingScreen extends React.Component {
  static navigationOptions = {
    title: 'Movie Showing'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Movie Showing Screen</Text>
      </View>
    );
  }
}
