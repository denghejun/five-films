import { ServiceContract } from "react-native-modular-bootstrapper"
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { ReduxViewContainer, ResourceType } from 'react-native-modular-bootstrapper'
import * as Containers from '../core/containers'
import { Container, injectable } from 'inversify'

@injectable()
export class StoreModule implements ServiceContract.Module {
  public load(container: Container): void {
    container.bind(ResourceType.AppStore).toConstantValue(Containers.store);
  }
}
