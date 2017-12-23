import { ServiceContract, Container, injectable } from "react-native-modular-bootstrapper"
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import * as Actions from './'

@injectable()
export class ActionsModule implements ServiceContract.Module {
  public load(container: Container): void {
    container.bind(ServiceType.TYPE_ACTION.HOME).toConstantValue(Actions.homeAction);
    container.bind(ServiceType.TYPE_ACTION.MOVIE).toConstantValue(Actions.movieAction);
  }
}
