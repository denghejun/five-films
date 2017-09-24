import { Module, ServiceType, Common } from '@five-films/interfaces'
import { Container, injectable } from 'inversify'
import { AppBootstrapper } from './app-bootstrapper'

@injectable()
export class BootstrapperModule implements Module.ModuleIdentify {
  public load(container: Container): void {
    container.bind<Common.Bootstrapper>(ServiceType.TYPE_BOOTSTRAPPER.BOOTSTRAPPER).to(AppBootstrapper).inSingletonScope();
  }
}
