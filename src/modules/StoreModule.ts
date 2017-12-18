import { ServiceContract } from "react-native-modular-bootstrapper"
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { ReduxViewContainer, ResourceType, Container, injectable } from 'react-native-modular-bootstrapper'
import * as Containers from '../core/containers'

@injectable()
export class StoreModule implements ServiceContract.Module {
  public load(container: Container): void {
    container.bind(ResourceType.AppStore).toConstantValue(Containers.store);
  }
}
