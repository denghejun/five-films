import * as Modules from './src/modules'
import { ServiceContract } from 'react-native-modular-bootstrapper'

export default class AppModuleProvider implements ServiceContract.ModuleProvider {
  public registerModules(): (new () => ServiceContract.Module)[] {
    return [
      Modules.ServiceModule,
      Modules.ContainersModule,
      Modules.ViewsModule,
      Modules.ContainersConnectedModule,
      Modules.StoreModule
    ];
  }
}
