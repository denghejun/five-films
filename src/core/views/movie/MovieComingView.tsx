import React, { Component } from 'react'
import { width, height, totalSize } from 'react-native-dimension'
import FlipCard from 'react-native-flip-card'
import { Button } from 'react-native-elements'
import * as Styles from '../assets/styles'
import { MovieErrorView } from './MovieErrorView'
import { CircleImage } from '../common'
import { LinearGradient } from 'expo'
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  ListView,
  RefreshControl,
  Image,
  ActivityIndicator,
  ProgressBarAndroid,
  ActivityIndicatorIOS,
  Platform,
  TouchableOpacity
} from 'react-native'

export class MovieComingView extends React.Component<any> {
  static navigationOptions = ({ navigation }) => ({
    // header: (props) => {
    //   return <LinearGradient
    //      colors={['#4c669f', '#3b5998', '#192f6a']}
    //      style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
    //      <Text
    //         style={{
    //           backgroundColor: 'transparent',
    //           fontSize: 15,
    //           color: '#fff',
    //         }}>
    //         {123}
    //       </Text>
    //      </LinearGradient>
    // },
    title: '即将上映',
    headerStyle: { backgroundColor: 'coral' },
    headerLeft: <CircleImage onPress={() => {
      navigation.navigate('DrawerToggle');
    }} sizeMode='small' source={{ uri: 'https://loremflickr.com/100/100/girl' }} />,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/coming.png')}
        style={[Styles.showingMovie.tabIcon, { tintColor: tintColor }]}
      />
    )
  });

  componentDidMount() {
    if (this.props.onComponentDidMount !== undefined) {
      this.props.onComponentDidMount()
    }

    setInterval(this.startupFlipCardAutomatically.bind(this), 5000)
  }

  private startupFlipCardAutomatically() {
    const { comingMovieDataSource } = this.props;
    if (comingMovieDataSource) {
      const rowCounts = comingMovieDataSource.getRowCount();
      const index = Math.floor(Math.random() * rowCounts)
      this.props.onMovieItemFlipped(index);
    }
  }

  renderRow = (rowData, sectionID, rowID) => {
    const movieItemImageUrl = rowData.iconaddress.substring(0, rowData.iconaddress.indexOf('?'))
    const movieItemFlipFlag = this.props.movieItemFlipStates[Number.parseInt(rowID)]

    return (
      <View style={Styles.showingMovie.thumbnail}>
        <View style={Styles.common.movieItem}>
          <TouchableOpacity onPress={() => this.props.onMovieItemFlipped(rowID)}>
            <FlipCard
              useNativeDriver={true}
              flipHorizontal={true}
              friction={45}
              perspective={30}
              clickable={false}
              flip={movieItemFlipFlag}
              style={Styles.showingMovie.flipCard}
            >
              <View>
                <Image source={{ uri: movieItemImageUrl }} style={Styles.showingMovie.movieItemImage} />
              </View>
              <View style={Styles.common.container}>

                <View>
                  <View style={Styles.showingMovie.movieSubHeaderContainer}>
                    <Text style={Styles.showingMovie.movieSubHeader}>{rowData.director.showname}</Text>
                  </View>
                  <Text style={Styles.showingMovie.movieSubText}>{rowData.director.data[1].name}</Text>
                </View>

                <View style={Styles.common.container}>
                  <View style={Styles.showingMovie.movieSubHeaderContainer}>
                    <Text style={Styles.showingMovie.movieSubHeader}>{rowData.star.showname}</Text>
                  </View>
                  {Object.keys(rowData.star.data || {}).filter(o => rowData.star.data[o].name !== undefined).map(k => {
                    return <Text key={k} style={Styles.showingMovie.movieSubText}>{rowData.star.data[k].name}</Text>
                  })}
                </View>
              </View>
            </FlipCard>
          </TouchableOpacity>

        </View>

        <View style={Styles.common.movieItem}>
          <TouchableOpacity onPress={() => this.props.onMovieItemFlipped(rowID)}>
            <FlipCard
              flipVertical={!movieItemFlipFlag}
              flipHorizontal={movieItemFlipFlag}
              friction={45}
              perspective={30}
              clickable={false}
              flip={!movieItemFlipFlag}
              style={Styles.showingMovie.flipCard}
            >
              <View>
                <Image source={{ uri: movieItemImageUrl }} style={Styles.showingMovie.movieItemImage} />
              </View>
              <View style={Styles.common.spaceBetweenContainer}>
                <View>
                  <View style={Styles.showingMovie.movieSubHeaderContainer}>
                    <Text style={Styles.showingMovie.movieSubHeader}>{rowData.tvTitle}</Text>
                  </View>
                  <Text style={Styles.showingMovie.movieSubText}>{rowData.story.data.storyBrief}</Text>
                </View>

                <View>
                  <View style={Styles.showingMovie.movieSubHeaderContainer}>
                    <Text style={Styles.showingMovie.movieSubHeader}>{rowData.playDate.showname}</Text>
                  </View>
                  <Text style={Styles.showingMovie.movieSubText}>{rowData.playDate.data}</Text>
                  <Text style={Styles.showingMovie.movieSubText}>{rowData.subHead}</Text>
                </View>

                <View>
                  <View style={Styles.showingMovie.movieSubHeaderContainer}>
                    <Text style={Styles.showingMovie.movieSubHeader}>{rowData.more.data[1].name}</Text>
                  </View>
                  <Button
                    raised
                    title={rowData.more.data[1].name}
                    icon={{ name: 'envira', type: 'font-awesome' }}
                    textStyle={Styles.showingMovie.buyButton}
                    buttonStyle={Styles.showingMovie.buyButtonContainer}
                    borderRadius={4}
                    containerViewStyle={[Styles.common.noMarginLeftAndRight]}
                    component={TouchableOpacity}
                    onPress={() => this.props.onPreviewButtonPress(rowData.more.data[1].link)}
                  />
                </View>
              </View>

            </FlipCard>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    const { hasError, errorMessage, comingMovieDataSource, isLoading, onRefresh } = this.props;

    return hasError
      ? <View style={Styles.common.body}>
        <MovieErrorView message={errorMessage} isRefreshing={isLoading} />
      </View>
      : <View style={Styles.common.body}>
        <ListView
          removeClippedSubviews={false}
          dataSource={comingMovieDataSource}
          renderRow={this.renderRow}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh}
              tintColor="#ccc"
              title="loading..."
              titleColor="#ccc"
            />
          }
        />
      </View>
  }
}
