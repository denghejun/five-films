import { Common, Movie, Module, ServiceType } from '@five-films/interfaces'
import { injectable } from 'inversify'
import { Services } from '@five-films/services'
import { modules } from './modules.config'
import * as React from 'react'

@injectable()
export class AppBootstrapper extends Common.Bootstrapper {
  protected registerModules(): Module.ModuleEntity[] {
    return modules;
  }

  protected registerMainView(): any {
    return null;
  }
}
