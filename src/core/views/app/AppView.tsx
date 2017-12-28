import * as React from 'react'
import { injectable } from 'react-native-modular-bootstrapper'

@injectable()
export class AppView extends React.Component<any> {
  render() {
    return <this.props.homeContainerConnectedView />;
  }
}
