import { Common, Movie, Module, ServiceType } from '@five-films/interfaces'
import { Container, injectable } from 'inversify'
import { Services } from '@five-films/services'
import { modules } from './modules.config'
import * as React from 'react'

@injectable()
export class AppBootstrapper extends Common.Bootstrapper {
  public static readonly Instance: AppBootstrapper = new AppBootstrapper();

  protected registerModules(): Module.ModuleEntity[] {
    return modules;
  }

  protected registerMainView(): any {
    return null;
  }

  public static startup(): Container {
    const container: Container = AppBootstrapper.Instance.start();
    return container;
  }
}
