import { Module, ServiceType } from '@five-films/interfaces'
import { Services } from '@five-films/services'
import { BootstrapperModule } from './module'

export const modules = [
  {
    type: ServiceType.TYPE_MODULE.MODULE,
    module: Services.ServiceModule
  },
  {
    type: ServiceType.TYPE_BOOTSTRAPPER.BOOTSTRAPPER,
    module: BootstrapperModule
  }
] as Module.ModuleEntity[];
