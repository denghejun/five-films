import * as React from 'react'
import { View, Text, Image, Button } from 'react-native'
import * as Styles from '../assets/styles'

export class UserDetailView extends React.Component<any> {
    static navigationOptions = {
        title: '我的资料'
    };

    render() {
        return (
            <View style={Styles.common.centerContainer}>
              <Text>我的资料</Text>
            </View>
        );
    }
}
