import { ServiceContract } from "react-native-modular-bootstrapper"
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { ReduxViewContainer, ResourceType } from 'react-native-modular-bootstrapper'
import * as Views from '../core/views'
import { Container, injectable } from 'inversify'

@injectable()
export class ViewsModule implements ServiceContract.Module {
  public load(container: Container): void {
    container.bind(ServiceType.TYPE_VIEW.APP).toConstantValue(Views.App);
    container.bind(ServiceType.TYPE_VIEW.HOME).toConstantValue(Views.HomeScreen);
  }
}
