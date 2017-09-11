import MovieBaseService from './movie-base-service'
import APIOption from '../core/api-option'
import Expo from 'expo'
import { MovieSearchRequest, MovieSearchResponse } from './models'

export default class MovieSearchService extends MovieBaseService {
    protected getAPIOption(): APIOption {
        let option: APIOption = super.getAPIOption();
        option.baseUri = Expo.Constants.manifest.extra.api.movie.searchServiceUri;
        return option;
    }

    public search(request: MovieSearchRequest): Promise<MovieSearchResponse> {
        return this.get<MovieSearchRequest, MovieSearchResponse>(request)
            .then((response: MovieSearchResponse): (Promise<MovieSearchResponse> | MovieSearchResponse) => {
                return (response === undefined || response.error_code !== 0) ? Promise.reject(response) : response;
            });
    }
}
