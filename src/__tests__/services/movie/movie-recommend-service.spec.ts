import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer';
import MovieRecommendService from '../../../services/movie/movie-recommend-service'
import { MovieRecommendRequest, MovieRecommendResponse } from '../../../services/movie/models'

it('should return non-null recommend movies for city Chengdu', () => {
    const service: MovieRecommendService = new MovieRecommendService();
    service.getRecommendMovies({ city: 'Chengdu' }).
        then(response => {
            expect(response).not.toBeNull();
        })
})
