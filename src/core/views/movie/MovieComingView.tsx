import * as React from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

export class MovieComingView extends React.Component<any> {
  componentDidMount() {
    this.props.onComponentDidMount();
  }

  static navigationOptions = {
    title: 'Movie Coming'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome! Movie Coming Screen,
        {this.props.state.app.movie.coming.movies &&
            this.props.state.app.movie.coming.movies[0].tvTitle}</Text>
      </View>
    );
  }
}
