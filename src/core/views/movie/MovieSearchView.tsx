import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as Styles from '../assets/styles'
import { Jiro } from 'react-native-textinput-effects'
import { MovieSearchResultView } from './MovieSearchResultView'
import { MovieErrorView } from './MovieErrorView'
import { CircleImage } from '../common'

export class MovieSearchView extends React.Component<any> {
  static navigationOptions = ({ navigation }) => ({
    title: '电影搜索',
    headerStyle: { backgroundColor: 'lightskyblue' },
    headerLeft: <CircleImage onPress={() => {
      navigation.navigate('DrawerToggle');
    }} sizeMode='small' source={{ uri: 'https://loremflickr.com/100/100/girl' }} />,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/search.png')}
        style={[Styles.showingMovie.tabIcon, { tintColor: tintColor }]}
      />
    )
  });

  render() {
    const { hasError, onSearch, errorMessage, isLoading } = this.props
    return (
      <View style={Styles.common.body}>
        <Jiro
          label={'今天我想看什么电影？'}
          labelStyle={Styles.searchMovie.labelStyle}
          borderColor={'orange'}
          autoCapitalize="none"
          inputStyle={Styles.searchMovie.inputStyle}
          onSubmitEditing={event => onSearch(event.nativeEvent.text)}
        />

        <View style={[Styles.common.centerContainer]}>
          {hasError
            ? <MovieErrorView message={errorMessage} isRefreshing={isLoading} />
            : <MovieSearchResultView {...this.props} />}
        </View>
      </View>
    )
  }
}
