import { DrawerItems } from 'react-navigation';
import * as React from 'react'
import { ScrollView, StyleSheet, View, Text, Button } from 'react-native'
import * as Styles from '../assets/styles'

export class DrawerContentView extends React.Component<any> {
    render() {
        return (
            <View style={Styles.common.centerContainer}>
                <Button title='Go to User Detail' onPress={()=>{
                  this.props.navigation.navigate('user');
                }}/>
            </View>
        );
    }
}
