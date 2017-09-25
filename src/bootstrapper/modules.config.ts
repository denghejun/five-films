import { Module, ServiceType } from '@five-films/interfaces'
import { Services } from '@five-films/services'

export const modules = <Module.ModuleEntity[]>[
  {
    type: ServiceType.TYPE_MODULE.MODULE,
    module: Services.ServiceModule
  }
];
