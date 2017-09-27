import { ModuleEntity } from './module'

export interface ModuleProvider {
  registerModules(): ModuleEntity[];
}
