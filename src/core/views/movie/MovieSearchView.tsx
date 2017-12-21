import * as React from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

export class MovieSearchView extends React.Component {
  static navigationOptions = {
    title: 'Movie Search'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hi, Movie Search Screen</Text>
      </View>
    );
  }
}
