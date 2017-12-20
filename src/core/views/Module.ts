import { ServiceContract } from "react-native-modular-bootstrapper"
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { Container, injectable } from 'react-native-modular-bootstrapper'
import * as Views from './'

@injectable()
export class ViewsModule implements ServiceContract.Module {
  public load(container: Container): void {
    container.bind(ServiceType.TYPE_VIEW.APP).toConstantValue(Views.App);
    container.bind(ServiceType.TYPE_VIEW.HOME).toConstantValue(Views.HomeScreen);
  }
}
