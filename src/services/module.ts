import { Movie, ServiceType, Location, Common } from '@five-films/interfaces'
import { Container, injectable } from 'inversify'
import * as Services from './index'
import { ServiceContract } from 'react-native-modular-bootstrapper'

@injectable()
export class ServiceModule implements ServiceContract.Module {
  public load(container: Container): void {
    container.bind<Movie.MovieRecommendService>(ServiceType.TYPE_MOVIE.RECOMMEND).to(Services.MovieRecommendService);
    container.bind<Movie.MovieSearchService>(ServiceType.TYPE_MOVIE.SEARCH).to(Services.MovieSearchService);
    container.bind<Location.LocationSearchService>(ServiceType.TYPE_LOCAION.CITY_SEARCH).to(Services.CitySearchService);
    container.bind<Common.BrowserService>(ServiceType.TYPE_BROWSER.BROWSER).to(Services.BrowserService);
  }
}
