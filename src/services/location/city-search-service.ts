import LocationBaseService from './location-base-service'
import { Location, Common } from '@five-films/interfaces'
import * as Expo from 'expo'

export class CitySearchService extends LocationBaseService implements Location.LocationSearchService {
  protected async searchCity(request: Location.LocationSearchRequest): Promise<Location.LocationSearchResponse> {
    const response: Location.LocationSearchResponse = await this.get<Location.LocationSearchRequest, Location.LocationSearchResponse>(request);
    if (response.status === 0) {
      return response;
    } else {
      return Promise.reject<Location.LocationSearchResponse>(new Common.Error<Location.LocationSearchResponse>(response.message, response));
    }
  }

  public async getCurrentCityName(): Promise<string> {
    const whereamI = await Expo.Location.getCurrentPositionAsync();
    const { coords: { longitude, latitude } } = whereamI;
    const response = await this.searchCity({ latitude, longitude } as Location.LocationSearchRequest);
    return response.result.addressComponent.city;
  }
}
