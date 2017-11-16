import { Common, Movie } from '@five-films/Interfaces'

export class MovieServiceSpecHelper {
  public static AssertErrorWhenRequestTimeOverhead(error: Common.Error<Movie.MovieRecommendResponse>): void {
    expect(error.context).not.toBeUndefined();
    expect(error.context.resultcode).toBe('112');
    expect(error.context.error_code).toBe(10012);
    expect(error.context.reason).toBe('超过每日可允许请求次数!');
    expect(error.context.result).toBeNull();
  }

  public static AssertErrorWhenNoMovieFound(error: Common.Error<Movie.MovieRecommendResponse>): void {
    expect(error.context).not.toBeUndefined();
    expect(error.context.reason).toBe('查询不到热映电影相关信息');
    expect(error.context.error_code).toBe(209405);
  }

  public static AssertMovieServiceError(error: Common.Error<Movie.MovieRecommendResponse>): void {
    if (error.context.error_code === 209405) {
      MovieServiceSpecHelper.AssertErrorWhenNoMovieFound(error)
    } else {
      MovieServiceSpecHelper.AssertErrorWhenRequestTimeOverhead(error)
    }
  }
}
