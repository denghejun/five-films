import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer';
import { Movie, Common, ServiceType } from '@five-films/interfaces'
import { AppBootstrapper, Container } from 'react-native-modular-bootstrapper'
import { MovieServiceSpecHelper } from './movie-service'

beforeAll(() => {
  AppBootstrapper.startup(null);
})

it('[movie-recommend-service : 01] should get recommend movie response successfully when giving valid city name',
  async () => {
    // given
    const q: Movie.MovieRecommendRequest = { city: '成都' };

    // when
    const service: Movie.MovieRecommendService = Container.get<Movie.MovieRecommendService>(ServiceType.TYPE_MOVIE.RECOMMEND);

    // then
    await service.getRecommendMovies(q).then(response => {
      expect(response).not.toBeUndefined();
      expect(response.reason).toBe('查询成功');
      expect(response.error_code).toBe(0);
      expect(response.result).not.toBeUndefined();
    }, error => {
      MovieServiceSpecHelper.AssertMovieServiceError(error);
    });
  })

it('[movie-recommend-service : 02] shouldn\'t get any recommend movie response when giving invalid city name',
  async () => {
    // given
    const q: Movie.MovieRecommendRequest = { city: 'InvalidCityName' };

    // when
    const service: Movie.MovieRecommendService = Container.get<Movie.MovieRecommendService>(ServiceType.TYPE_MOVIE.RECOMMEND);

    // then
    const response = await service.getRecommendMovies(q).
      catch((error: Common.Error<Movie.MovieRecommendResponse>) => {
        MovieServiceSpecHelper.AssertMovieServiceError(error);
      });
  })
