import React from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import * as Styles from '../assets/styles'

export class MovieErrorView extends React.Component<any> {
  render() {
    const { title, message, isRefreshing } = this.props
    return (
      <View style={[Styles.showingMovie.errorContainer]}>
        <Image style={Styles.showingMovie.errorImage} source={require('../assets/images/icon_movie_error_x64.png')} />
        <Text style={Styles.showingMovie.errorText}>{title || 'Ah! something goes wrong!'}</Text>
        <Text style={Styles.showingMovie.errorText}>{message}</Text>
        <ActivityIndicator animating={isRefreshing} />
      </View>
    )
  }
}
