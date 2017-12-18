import { Movie, ServiceType, Location, Common } from '@colorfulwindmill/five-films-interface'
import { ServiceContract, Container, injectable } from 'react-native-modular-bootstrapper'
import * as Services from '@colorfulwindmill/five-films-service'

@injectable()
export class ServiceModule implements ServiceContract.Module {
  public load(container: Container): void {
    container.bind<Movie.MovieRecommendService>(ServiceType.TYPE_MOVIE.RECOMMEND).to(Services.MovieRecommendService);
    container.bind<Movie.MovieSearchService>(ServiceType.TYPE_MOVIE.SEARCH).to(Services.MovieSearchService);
    container.bind<Location.LocationSearchService>(ServiceType.TYPE_LOCAION.CITY_SEARCH).to(Services.CitySearchService);
    container.bind<Common.BrowserService>(ServiceType.TYPE_BROWSER.BROWSER).to(Services.BrowserService);
  }
}
