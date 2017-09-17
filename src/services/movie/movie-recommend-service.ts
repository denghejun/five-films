import * as Expo from 'expo'
import MovieBaseService from './movie-base-service'
import { APIOption } from '../core'
import { MovieRecommendRequest, MovieRecommendResponse } from './models'
import Error from '../../core/error-customize'

export default class MovieRecommendService extends MovieBaseService {
    protected getBaseUri(): string {
        return Expo.Constants.manifest.extra.api.movie.recommendServiceUri;
    }

    public getRecommendMovies(request: MovieRecommendRequest): Promise<MovieRecommendResponse> {
        return this.get<MovieRecommendRequest, MovieRecommendResponse>(request).then((response: MovieRecommendResponse) => {
            if (response === undefined || response.error_code !== 0) {
                return Promise.reject<MovieRecommendResponse>(new Error<MovieRecommendResponse>(response.reason, response));
            }
            else {
                return response;
            }
        });
    }
}
