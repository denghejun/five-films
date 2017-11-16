import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer';
import { ServiceType, Common } from '@five-films/interfaces'
import { AppBootstrapper, Container } from 'react-native-modular-bootstrapper'

beforeAll(() => {
  AppBootstrapper.startup(null);
});

it('[common-browser-open : 01] should has no error to open baidu.com', async () => {
  // given
  const url = 'https://expo.io';
  const service: Common.BrowserService = Container.get<Common.BrowserService>(ServiceType.TYPE_BROWSER.BROWSER);

  // when
  const result = await service.open(url);

  // then
  expect(result).toBeUndefined();
})
