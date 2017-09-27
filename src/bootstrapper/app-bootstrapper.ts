import { BootstrapperInterfaces, Movie, Module, ServiceType } from '@five-films/interfaces'
import { Container, injectable } from 'inversify'
import { Services } from '@five-films/services'
import * as React from 'react'
import * as Root from 'app-root-path'

@injectable()
export class AppBootstrapper extends BootstrapperInterfaces.Bootstrapper<Module.ModuleProvider> {
  public static readonly Instance: AppBootstrapper = new AppBootstrapper();

  protected registerModules(): Module.ModuleEntity[] | Module.ModuleProvider {
    const AppModuleProviderModule = require(Root.path + '/module.config');
    const AppModuleProvider = AppModuleProviderModule.default;
    return new AppModuleProvider();
  }

  protected registerMainView(): any {
    return null;
  }

  public static startup(): Container {
    const container: Container = AppBootstrapper.Instance.start();
    return container;
  }
}
