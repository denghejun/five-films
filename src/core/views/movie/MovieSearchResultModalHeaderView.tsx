import * as React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import * as Styles from '../assets/styles'

export class MovieSearchResultModalHeaderView extends React.Component<any> {
    render() {
        const { onMoviePlayPress, result: { cover, title, year, area, playlinks } } = this.props
        const movieFormatedName = title + ' (' + area + ',' + year + ')'

        return (
            <TouchableOpacity style={Styles.searchMovie.movieHeaderTouchContainer} onPress={() => onMoviePlayPress(playlinks)}>
                <Image
                    style={Styles.searchMovie.movieHeaderPlayIcon}
                    source={require('../assets/images/icon_movie_play_x64.png')}
                />

                <Text style={[Styles.searchMovie.movieHeaderText]}>
                    {movieFormatedName}
                </Text>
            </TouchableOpacity>
        );
    }
}
