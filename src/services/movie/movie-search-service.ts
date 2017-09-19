import MovieBaseService from './movie-base-service'
import { APIOption } from '../core'
import * as Expo from 'expo'
import { MovieSearchRequest, MovieSearchResponse } from './models'
import { Error } from '@five-films/core'

export default class MovieSearchService extends MovieBaseService {
    protected getBaseUri(): string {
        return Expo.Constants.manifest.extra.api.movie.searchServiceUri;
    }

    public search(request: MovieSearchRequest): Promise<MovieSearchResponse> {
        return this.get<MovieSearchRequest, MovieSearchResponse>(request).then((response: MovieSearchResponse) => {
            if (response === undefined || response.error_code !== 0) {
                return Promise.reject<MovieSearchResponse>(new Error<MovieSearchResponse>(response.reason, response));
            }
            else {
                return response;
            }
        });
    }
}
