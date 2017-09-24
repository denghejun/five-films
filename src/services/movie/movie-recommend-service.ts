import * as Expo from 'expo'
import MovieBaseService from './movie-base-service'
import { APIOption } from '../core'
import { Movie, Common } from '@five-films/interfaces'
import { injectable } from 'inversify'

@injectable()
export class MovieRecommendService extends MovieBaseService implements Movie.MovieRecommendService {
  protected getBaseUri(): string {
    return Expo.Constants.manifest.extra.api.movie.recommendServiceUri;
  }

  public getRecommendMovies(request: Movie.MovieRecommendRequest):
    Promise<Movie.MovieRecommendResponse> {
    return this.get<Movie.MovieRecommendRequest, Movie.MovieRecommendResponse>(request).
      then((response: Movie.MovieRecommendResponse) => {
        if (response === undefined || response.error_code !== 0) {
          return Promise.reject<Movie.MovieRecommendResponse>(new Common.Error<Movie.MovieRecommendResponse>(response.reason, response));
        }
        else {
          return response;
        }
      });
  }
}
