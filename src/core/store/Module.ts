import { ServiceContract } from "react-native-modular-bootstrapper"
import { ResourceType, Container, injectable } from 'react-native-modular-bootstrapper'
import { store } from './Store'

@injectable()
export class StoreModule implements ServiceContract.Module {
  public load(container: Container): void {
    container.bind(ResourceType.AppStore).toConstantValue(store);
  }
}
