import { ServiceContract, ResourceType, Container, injectable, ReduxStore } from "react-native-modular-bootstrapper"
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { AppStore } from './Store'

@injectable()
export class StoreModule implements ServiceContract.Module {
  public load(container: Container): void {
    container.bind(ServiceType.TYPE_STORE.STORE).to(AppStore);
    container.bind(ResourceType.AppStore).toDynamicValue(context => {
      return context.container.get<ReduxStore>(ServiceType.TYPE_STORE.STORE).create();
    });
  }
}
