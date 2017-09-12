import Expo from 'expo'
import MovieBaseService from './movie-base-service'
import { APIOption } from '../core'
import { MovieRecommendRequest, MovieRecommendResponse } from './models'


export default class MovieRecommendService extends MovieBaseService {
    protected getBaseUri(): string {
        return Expo.Constants.manifest.extra.api.movie.recommendServiceUri;
    }

    public getRecommendMovies(request: MovieRecommendRequest): Promise<MovieRecommendResponse> {
        return this.get<MovieRecommendRequest, MovieRecommendResponse>(request)
            .then((response: MovieRecommendResponse): (Promise<MovieRecommendResponse> | MovieRecommendResponse) => {
                return (response === undefined || response.error_code !== 0) ? Promise.reject(response) : response;
            });
    }
}
