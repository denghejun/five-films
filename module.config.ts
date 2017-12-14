import * as Modules from './src/modules'
import { ServiceContract } from 'react-native-modular-bootstrapper'

export default class AppModuleProvider implements ServiceContract.ModuleProvider {
  public registerModules(): any[] {
    return [Modules.ServiceModule];
  }
}
