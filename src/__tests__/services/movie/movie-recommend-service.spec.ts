import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer';
import MovieRecommendService from '../../../services/movie/movie-recommend-service'
import { MovieRecommendRequest, MovieRecommendResponse } from '../../../services/movie/models'
import Error from '../../../core/error-customize'

it('[movie-recommend-service: 01] should get recommend movie response successfully when giving valid city name',
    async () => {
        const service: MovieRecommendService = new MovieRecommendService();
        await service.getRecommendMovies({ city: '成都' }).then(response => {
            expect(response).not.toBeUndefined();
            expect(response.reason).toBe('查询成功');
            expect(response.error_code).toBe(0);
            expect(response.result).not.toBeUndefined();
        }).catch((error: Error<MovieRecommendResponse>) => {
            assertErrorWhenRequestTimeOverhead(error); // throw error;
        });
    })

it('[movie-recommend-service: 02] shouldn\'t get any recommend movie response when giving invalid city name',
    async () => {
        const service: MovieRecommendService = new MovieRecommendService();
        await service.getRecommendMovies({ city: 'InvalidCityName' }).
            catch((error: Error<MovieRecommendResponse>) => {
                error.context.error_code === 209405 ? assertErrorWhenNoMovieFound(error) : assertErrorWhenRequestTimeOverhead(error);
            });
    })

const assertErrorWhenRequestTimeOverhead = (error: Error<MovieRecommendResponse>): void => {
    expect(error.context).not.toBeUndefined();
    expect(error.context.resultcode).toBe('112');
    expect(error.context.error_code).toBe(10012);
    expect(error.context.reason).toBe('超过每日可允许请求次数!');
    expect(error.context.result).toBeNull();
}

const assertErrorWhenNoMovieFound = (error: Error<MovieRecommendResponse>): void => {
    expect(error.context).not.toBeUndefined();
    expect(error.context.reason).toBe('查询不到热映电影相关信息');
    expect(error.context.error_code).toBe(209405);
}
