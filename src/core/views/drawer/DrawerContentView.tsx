import { DrawerItems } from 'react-navigation';
import * as React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'

export class DrawerContentView extends React.Component<any> {
  render() {
    return (
      <ScrollView>
        <Text>test</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
