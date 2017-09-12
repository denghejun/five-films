import MovieBaseService from './movie-base-service'
import { APIOption } from '../core'
import Expo from 'expo'
import { MovieSearchRequest, MovieSearchResponse } from './models'

export default class MovieSearchService extends MovieBaseService {
    protected getBaseUri(): string {
        return Expo.Constants.manifest.extra.api.movie.searchServiceUri;
    }

    public search(request: MovieSearchRequest): Promise<MovieSearchResponse> {
        return this.get<MovieSearchRequest, MovieSearchResponse>(request)
            .then((response: MovieSearchResponse): (Promise<MovieSearchResponse> | MovieSearchResponse) => {
                return (response === undefined || response.error_code !== 0) ? Promise.reject(response) : response;
            });
    }
}
