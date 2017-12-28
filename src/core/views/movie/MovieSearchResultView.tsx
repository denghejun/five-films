import * as React from 'react'
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'
import Modal from 'react-native-modalbox'
import * as Styles from '../assets/styles'
import { MovieSearchResultDescView } from './MovieSearchResultDescView'
import { MovieSearchResultModalHeaderView } from './MovieSearchResultModalHeaderView'
import { MovieSearchLoadingView } from './MovieSearchLoadingView'
import { width, height, totalSize } from 'react-native-dimension'

export class MovieSearchResultView extends React.Component<any> {
  render() {
    const { closeResultModal, result, isLoading, isInit } = this.props
    if (isLoading) {
      return (
        <MovieSearchLoadingView animating={true} text={'Searching...'} />
      )
    } else if (isInit) {
      return (
        <MovieSearchLoadingView animating={false} text={'Try searching.'} />
      )
    } else {
      const { isOpenModal, result: { cover } } = this.props
      return (
        <View>
          <MovieSearchResultDescView touchabled={true} {...this.props} />
          <Modal
            coverScreen={true}
            swipeToClose={true}
            swipeArea={height(50)}
            isOpen={isOpenModal}
            onClosed={() => closeResultModal()} >
            <View style={[Styles.common.container]}>
              <HeaderImageScrollView
                maxHeight={200}
                fadeOutForeground={true}
                maxOverlayOpacity={0.7}
                renderTouchableFixedForeground={() => <MovieSearchResultModalHeaderView {...this.props} />}
                renderForeground={() => <MovieSearchResultModalHeaderView {...this.props} />}
                renderHeader={() => <Image style={Styles.searchMovie.movieItemImage} source={{ uri: cover }} />}
              >
                <View style={Styles.common.paddingContainer}>
                  <TriggeringView>
                    <MovieSearchResultDescView touchabled={false} {...this.props} />
                  </TriggeringView>
                </View>
              </HeaderImageScrollView>
            </View>
          </Modal>
        </View>
      )
    }
  }
}
