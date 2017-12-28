import * as React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import * as Styles from '../assets/styles'

export class MovieSearchLoadingView extends React.Component<any> {
  render() {
    const { text, animating } = this.props;
    return (
      <View style={[Styles.common.centerContainer]}>
        <Text style={Styles.showingMovie.errorText}>
          {text}
        </Text>
        <ActivityIndicator animating={animating} />
      </View>
    );
  }
}
