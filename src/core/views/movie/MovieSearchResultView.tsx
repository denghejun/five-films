import * as React from 'react'
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'
import Modal from 'react-native-modalbox'
import * as Styles from '../assets/styles'

export class MovieSearchResultView extends React.Component<any> {
  private renderPlayOnlineTouchComponent(onMoviePlayPress, movieFormatedName) {
    return (
      <TouchableOpacity style={Styles.searchMovie.movieHeaderTouchContainer} onPress={onMoviePlayPress}>
        <Image
          style={Styles.searchMovie.movieHeaderPlayIcon}
          source={require('../assets/images/icon_movie_play_x64.png')}
        />

        <Text style={[Styles.searchMovie.movieHeaderText]}>
          {movieFormatedName}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { result, isLoading } = this.props
    const isInit = result === undefined
    if (isLoading) {
      return (
        <View style={[Styles.common.centerContainer]}>
          <Text style={Styles.showingMovie.errorText}>
            Searching...
          </Text>
          <ActivityIndicator animating={true} />
        </View>
      )
    } else if (isInit) {
      return (
        <View style={[Styles.common.centerContainer]}>
          <Text style={Styles.showingMovie.errorText}>
            Try searching.
          </Text>
        </View>
      )
    } else {
      const {
        onMoviePlayPress,
        result: { cover, title, desc, tag, year, rating, area, dir, act, playlinks }
      } = this.props
      const movieFormatedName = title + ' (' + area + ',' + year + ')'

      return (
        <Modal style={Styles.searchMovie.movieSearchResultModal} swipeToClose={false} keyboardTopOffset={0} isOpen={!isLoading}>
          <View style={[Styles.common.container]}>
            <HeaderImageScrollView
              maxHeight={200}
              fadeOutForeground={true}
              maxOverlayOpacity={0.7}
              renderTouchableFixedForeground={() => this.renderPlayOnlineTouchComponent(() => onMoviePlayPress(playlinks), movieFormatedName)}
              renderForeground={() => this.renderPlayOnlineTouchComponent(() => onMoviePlayPress(playlinks), movieFormatedName)}
              renderHeader={() => <Image style={Styles.searchMovie.movieItemImage} source={{ uri: cover }} />}
            >
              <View style={Styles.common.paddingContainer}>
                <TriggeringView>
                  <View>
                    <View style={Styles.showingMovie.movieSubHeaderContainer}>
                      <Text style={Styles.showingMovie.movieSubHeader}>{title}</Text>
                    </View>
                    <Text style={Styles.showingMovie.movieSubText}>{desc}</Text>
                  </View>

                  <View>
                    <View style={Styles.showingMovie.movieSubHeaderContainer}>
                      <Text style={Styles.showingMovie.movieSubHeader}>类型</Text>
                    </View>
                    <Text style={Styles.showingMovie.movieSubText}>{tag}</Text>
                  </View>

                  <View>
                    <View style={Styles.showingMovie.movieSubHeaderContainer}>
                      <Text style={Styles.showingMovie.movieSubHeader}>上映时间</Text>
                    </View>
                    <Text style={Styles.showingMovie.movieSubText}>{year}</Text>
                  </View>

                  <View>
                    <View style={Styles.showingMovie.movieSubHeaderContainer}>
                      <Text style={Styles.showingMovie.movieSubHeader}>评分</Text>
                    </View>
                    <Text style={Styles.showingMovie.movieSubText}>{rating || '暂无评分'}</Text>
                  </View>

                  <View>
                    <View style={Styles.showingMovie.movieSubHeaderContainer}>
                      <Text style={Styles.showingMovie.movieSubHeader}>地区</Text>
                    </View>
                    <Text style={Styles.showingMovie.movieSubText}>{area}</Text>
                  </View>

                  <View>
                    <View style={Styles.showingMovie.movieSubHeaderContainer}>
                      <Text style={Styles.showingMovie.movieSubHeader}>导演</Text>
                    </View>
                    <Text style={Styles.showingMovie.movieSubText}>{dir}</Text>
                  </View>

                  <View>
                    <View style={Styles.showingMovie.movieSubHeaderContainer}>
                      <Text style={Styles.showingMovie.movieSubHeader}>演员</Text>
                    </View>
                    <Text style={Styles.showingMovie.movieSubText}>{act}</Text>
                  </View>
                </TriggeringView>
              </View>
            </HeaderImageScrollView>
          </View>
        </Modal>
      )
    }
  }
}
