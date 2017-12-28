import * as React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import * as Styles from '../assets/styles'

export class MovieSearchResultDescView extends React.Component<any> {
  render() {
    const { touchabled, openResultModal, result: { cover, title, desc, tag, year, rating, area, dir, act, playlinks } } = this.props;
    const movieFormatedName = title + ' (' + area + ',' + year + ')';
    return (
      <ScrollView style={Styles.common.paddingContainer}>
        <View>
          <View style={Styles.showingMovie.movieSubHeaderContainer}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} disabled={!touchabled} onPress={() => openResultModal()}>
              <Text style={Styles.showingMovie.movieSubHeader}>{title}</Text>
              {touchabled && <Image style={[{ width: 30, height: 30 }]} source={require('../assets/images/icon_movie_play_x64.png')} />}
            </TouchableOpacity>
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
      </ScrollView >
    );
  }
}
