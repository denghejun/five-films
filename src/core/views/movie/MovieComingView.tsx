import * as React from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

export class MovieComingView extends React.Component {
  static navigationOptions = {
    title: 'Movie Coming'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome! Movie Coming Screen</Text>
      </View>
    );
  }
}
