import * as React from 'react'
import { Provider } from 'react-redux'
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { injectable, inject } from 'inversify'
import { Container, ReduxViewContainer } from 'react-native-modular-bootstrapper'

@injectable()
export class App extends React.Component<any> {
  // private readonly HomeContainer = Container.get<any>(ServiceType.TYPE_CONTAINER.HOME_CONNECTED);
  render() {
    return (
      <this.props.HomeContainerConnected />
    );
  }
}
