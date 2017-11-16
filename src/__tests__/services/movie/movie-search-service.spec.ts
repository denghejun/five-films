import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer';
import { Movie, ServiceType, Common } from '@five-films/interfaces'
import { AppBootstrapper, Container } from 'react-native-modular-bootstrapper'
import { MovieServiceSpecHelper } from './movie-service'

beforeAll(() => {
  AppBootstrapper.startup(null);
})

it('[movie-search-service : 01] should get a valid movie when giving valid movie name',
  async () => {
    // given
    const q: Movie.MovieSearchRequest = { q: '猫和老鼠' };

    // when
    const service: Movie.MovieSearchService = AppBootstrapper.Instance.container.get<Movie.MovieSearchService>(ServiceType.TYPE_MOVIE.SEARCH);

    // then
    await service.search(q).then(response => {
      expect(response).not.toBeUndefined();
      expect(response.reason).toBe('查询成功');
      expect(response.error_code).toBe(0);
      expect(response.result).not.toBeUndefined();
      expect(response.result.act).toBe('猫和老鼠');
    }, error => {
      MovieServiceSpecHelper.AssertMovieServiceError(error);
    });
  })
