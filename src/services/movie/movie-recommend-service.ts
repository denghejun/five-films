import Expo from 'expo'
import MovieBaseService from './movie-base-service'
import APIOption from '../core/api-option'
import { MovieRecommendRequest, MovieRecommendResponse } from './models'


export default class MovieRecommendService extends MovieBaseService {
    protected getAPIOption(): APIOption {
        let option: APIOption = super.getAPIOption();
        option.baseUri = Expo.Constants.manifest.extra.api.movie.recommendServiceUri;
        return option;
    }

    public getRecommendMovies(request: MovieRecommendRequest): Promise<MovieRecommendResponse> {
        return this.get<MovieRecommendRequest, MovieRecommendResponse>(request)
            .then((response: MovieRecommendResponse): (Promise<MovieRecommendResponse> | MovieRecommendResponse) => {
                return (response === undefined || response.error_code !== 0) ? Promise.reject(response) : response;
            });
    }
}
