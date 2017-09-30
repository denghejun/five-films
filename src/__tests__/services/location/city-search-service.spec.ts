import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer';
import { ServiceType } from '@five-films/interfaces'
import { AppBootstrapper, Container } from 'react-native-modular-bootstrapper'
import { Constants, Location, Permissions } from 'expo';

beforeAll(() => {
  AppBootstrapper.startup(null);
});

it('[current-city-search : 01] should get a valid city name', async () => {
  // given
  const service: Location.LocationSearchService = Container.get<Location.LocationSearchService>(ServiceType.TYPE_LOCAION.CITY_SEARCH);

  // when
  const cityName = await service.getCurrentCityName();

  // then
  expect(cityName).not.toBeNull();
  expect(cityName).not.toBeUndefined();
})
