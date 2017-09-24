import { Module, Movie, ServiceType } from '@five-films/interfaces'
import { Container, injectable } from 'inversify'
import { Services } from '@five-films/services'

@injectable()
export class ServiceModule implements Module.ModuleIdentify {
  public load(container: Container): void {
    container.bind<Movie.MovieRecommendService>(ServiceType.TYPE_MOVIE.RECOMMEND).to(Services.MovieRecommendService);
    container.bind<Movie.MovieSearchService>(ServiceType.TYPE_MOVIE.SEARCH).to(Services.MovieSearchService);
  }
}
