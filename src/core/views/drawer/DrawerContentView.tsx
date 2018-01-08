import { DrawerItems } from 'react-navigation';
import * as React from 'react'
import { ScrollView, StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native'
import * as Styles from '../assets/styles'
import { width, height, totalSize } from 'react-native-dimension'

export class DrawerContentView extends React.Component<any> {
  render() {
    return (
      <View style={Styles.common.centerContainer}>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('user');
        }}>
          <Image
            style={{ flex: 1, height: height(100), width:width(70) }}
            source={{ uri: 'https://loremflickr.com/' + width(70) + '/' + height(100) + '/stone' }} />
        </TouchableOpacity>
      </View>
    );
  }
}
