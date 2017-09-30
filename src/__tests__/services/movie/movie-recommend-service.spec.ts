import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer';
import { Movie, Common, ServiceType } from '@five-films/interfaces'
import { AppBootstrapper, Container } from '@five-films/bootstrapper'

beforeAll(() => {
  AppBootstrapper.startup(null);
})

it('[movie-recommend-service : 01] should get recommend movie response successfully when giving valid city name',
  async () => {
    // given
    const q: Movie.MovieRecommendRequest = { city: '成都' };

    // when
    const service: Movie.MovieRecommendService = Container.get<Movie.MovieRecommendService>(ServiceType.TYPE_MOVIE.RECOMMEND);
    const response = await service.getRecommendMovies(q);

    // then
    expect(response).not.toBeUndefined();
    expect(response.reason).toBe('查询成功');
    expect(response.error_code).toBe(0);
    expect(response.result).not.toBeUndefined();
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
        if (error.context.error_code === 209405) {
          assertErrorWhenNoMovieFound(error)
        } else {
          assertErrorWhenRequestTimeOverhead(error)
        }
      });
  })

const assertErrorWhenRequestTimeOverhead = (error: Common.Error<Movie.MovieRecommendResponse>): void => {
  expect(error.context).not.toBeUndefined();
  expect(error.context.resultcode).toBe('112');
  expect(error.context.error_code).toBe(10012);
  expect(error.context.reason).toBe('超过每日可允许请求次数!');
  expect(error.context.result).toBeNull();
}

const assertErrorWhenNoMovieFound = (error: Common.Error<Movie.MovieRecommendResponse>): void => {
  expect(error.context).not.toBeUndefined();
  expect(error.context.reason).toBe('查询不到热映电影相关信息');
  expect(error.context.error_code).toBe(209405);
}
