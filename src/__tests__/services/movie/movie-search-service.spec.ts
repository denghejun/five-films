import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer';
import MovieSearchService from '../../../services/movie/movie-search-service'
import { MovieSearchRequest, MovieSearchResponse } from '../../../services/movie/models'
import { Error } from '@five-films/core'
import * as Expo from 'expo'

beforeAll(() => {
    const appConfig = require('../../../../app.json');
    Expo.Constants.manifest.extra = appConfig.expo.extra;
})

it('[movie-search-service: 01] should get a valid movie when giving valid movie name',
    async () => {
        const service: MovieSearchService = new MovieSearchService();
        await service.search(<MovieSearchRequest>{ q: '猫和老鼠' }).
            then((response: MovieSearchResponse) => {
                expect(response).not.toBeUndefined();
                expect(response.reason).toBe('查询成功');
                expect(response.error_code).toBe(0);
                expect(response.result).not.toBeUndefined();
                expect(response.result.act).toBe('猫和老鼠');
            });
    })
