import MovieBaseService from './movie-base-service'
import { APIOption } from '../core'
import * as Expo from 'expo'
import { Movie, Common } from '@five-films/interfaces'
import { injectable } from 'inversify'

@injectable()
export class MovieSearchService extends MovieBaseService implements Movie.MovieSearchService {
  protected getBaseUri(): string {
    return Expo.Constants.manifest.extra.api.movie.searchServiceUri;
  }

  public search(request: Movie.MovieSearchRequest):
    Promise<Movie.MovieSearchResponse> {
    return this.get<Movie.MovieSearchRequest, Movie.MovieSearchResponse>(request).
      then((response: Movie.MovieSearchResponse) => {
        if (response === undefined || response.error_code !== 0) {
          return Promise.reject<Movie.MovieSearchResponse>(
            new Common.Error<Movie.MovieSearchResponse>(response.reason, response));
        }
        else {
          return response;
        }
      });
  }
}
