import { Module, ServiceType } from '@five-films/interfaces'
import { Services } from '@five-films/services'

export default class AppModuleProvider implements Module.ModuleProvider {
  public registerModules(): Module.ModuleEntity[] {
    return [{
      type: ServiceType.TYPE_MODULE.MODULE,
      module: Services.ServiceModule
    }];
  }
}
