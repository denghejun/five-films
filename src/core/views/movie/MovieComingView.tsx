import React, { Component } from 'react'
import { width, height, totalSize } from 'react-native-dimension'
import FlipCard from 'react-native-flip-card'
import Button from 'react-native-button'
import * as Styles from '../assets/styles'
import { MovieErrorView} from './MovieErrorView'
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
  static navigationOptions = {
    title: '即将上映'
  }

  componentDidMount() {
    if (this.props.onComponentDidMount !== undefined) {
      this.props.onComponentDidMount()
    }
  }

  renderRow = (rowData, sectionID, rowID) => {
    const movieItemImageUrl = rowData.iconaddress.substring(0, rowData.iconaddress.indexOf('?'))
    const movieItemFlipFlag = this.props.movieItemFlipStates[Number.parseInt(rowID)]

    return (
      <View style={Styles.showingMovie.thumbnail}>
        <View style={Styles.common.container}>
          <TouchableOpacity onPress={() => this.props.onMovieItemFlipped(rowID)}>
            <FlipCard
              flipHorizontal={true}
              friction={45}
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

        <View style={Styles.common.container}>
          <TouchableOpacity onPress={() => this.props.onMovieItemFlipped(rowID)}>
            <FlipCard
              flipVertical={!movieItemFlipFlag}
              flipHorizontal={movieItemFlipFlag}
              friction={45}
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
                    style={Styles.showingMovie.buyButton}
                    containerStyle={Styles.showingMovie.buyButtonContainer}
                    onPress={() => this.props.onPreviewButtonPress(rowData.more.data[1].link)}
                  >
                    {rowData.more.data[1].name}
                  </Button>
                </View>
              </View>

            </FlipCard>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    const { hasError, errorMessage, showingMovieDataSource, isLoading, onRefresh } = this.props;

    return hasError
      ? <View style={Styles.common.body}>
        <MovieErrorView message={errorMessage} isRefreshing={isLoading} />
      </View>
      : <View style={Styles.common.body}>
        <ListView
          dataSource={showingMovieDataSource}
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
