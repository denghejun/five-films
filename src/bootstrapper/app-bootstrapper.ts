import { BootstrapperInterfaces, Movie, Module, ServiceType } from '@five-films/interfaces'
import { Container, injectable } from 'inversify'
import { Services } from '@five-films/services'
import * as React from 'react'
import ModuleProvider from '~/module.config'

@injectable()
export class AppBootstrapper extends BootstrapperInterfaces.Bootstrapper<Module.ModuleProvider> {
  public static readonly Instance: AppBootstrapper = new AppBootstrapper();

  protected registerModules(): Module.ModuleEntity[] | Module.ModuleProvider {
    return new ModuleProvider();
  }

  public static startup(mainViewType: new () => React.Component): Container {
    const container: Container = AppBootstrapper.Instance.start(mainViewType);
    return container;
  }
}
