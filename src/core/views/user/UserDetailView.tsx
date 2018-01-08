import * as React from 'react'
import { View, Text, Image, Button } from 'react-native'
import * as Styles from '../assets/styles'
import { width, height, totalSize } from 'react-native-dimension'

export class UserDetailView extends React.Component<any> {
  static navigationOptions = {
    title: '我的资料'
  };

  render() {
    return (
      <View style={Styles.common.centerContainer}>
        <Image style={{ flex: 1, width: width(100), height: height(100) }} source={{ uri: 'https://loremflickr.com/' + width(100) + '/' + height(100) + '/sky' }} />
      </View>
    );
  }
}
