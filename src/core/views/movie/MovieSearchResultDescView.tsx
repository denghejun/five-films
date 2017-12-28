import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import * as Styles from '../assets/styles'

export class MovieSearchResultDescView extends React.Component<any> {
  render() {
    const { touchabled, openResultModal, result: { title, desc, tag, year, rating, area, dir, act, playlinks } } = this.props;
    const movieFormatedName = title + ' (' + area + ',' + year + ')';
    return (
      <View style={Styles.common.paddingContainer}>
        <TouchableOpacity disabled={!touchabled} onPress={() => openResultModal()}>
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
        </TouchableOpacity>
      </View>
    );
  }
}
