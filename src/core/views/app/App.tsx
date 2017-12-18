import * as React from 'react'
import { injectable, inject } from 'react-native-modular-bootstrapper'

@injectable()
export class App extends React.Component<any> {
  render() {
    return (
      <this.props.HomeContainerConnected />
    );
  }
}
