import LocationBaseService from './location-base-service'
import { LocationSearchRequest, LocationSearchResponse } from './models'

export default class CitySearchService extends LocationBaseService {
    protected searchCity(request: LocationSearchRequest): Promise<LocationSearchResponse> {
        return this.get<LocationSearchRequest, LocationSearchResponse>(request)
            .then<LocationSearchResponse>((response: LocationSearchResponse) => {
                return response.status === 0 ? response :
                    Promise.reject<LocationSearchResponse>(new Error(response.message));
            });
    }

    public getCurrentCityName(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                initialPosition => {
                    const { coords: { longitude, latitude } } = initialPosition
                    this.searchCity({ latitude, longitude } as LocationSearchRequest).then(response => {
                        resolve(response.result.addressComponent.city);
                    }).catch((e: Error) => {
                        reject(Promise.reject(e));
                    })
                },
                reject,
                {
                    enableHighAccuracy: true,
                    timeout: 20000,
                    maximumAge: 1000,
                    distanceFilter: 0
                }
            )
        });
    }
}
