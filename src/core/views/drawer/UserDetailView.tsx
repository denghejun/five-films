import * as React from 'react'
import { View, Text, Image, Button } from 'react-native'

export class UserDetailView extends React.Component<any> {
  static navigationOptions = {
    title:'asd',
    drawerLabel: 'MainDrawer'
  };

  render() {
    return (
      <View>
        <Button title="User Details" onPress={() => {
          this.props.navigation.navigate('Main');
        }} />

      </View>
    );
  }
}
