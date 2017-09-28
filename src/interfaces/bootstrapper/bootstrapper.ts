import "reflect-metadata";
import { Container, inject, injectable } from 'inversify'
import { Module, ServiceType, BootstrapperInterfaces } from '@five-films/interfaces'
import * as React from 'react'
import * as Expo from 'expo';

@injectable()
export abstract class Bootstrapper<T extends Module.ModuleProvider> {
  protected moduleProvider: T;
  public readonly container: Container = new Container();
  protected modules: Module.ModuleEntity[];
  protected abstract registerModules(): Module.ModuleEntity[] | T;

  private getModuleTypes(): symbol[] {
    const types: symbol[] = [];
    if (this.modules != null) {
      for (let module of this.modules) {
        types.push(module.type);
      }
    }

    return [...new Set(types)];
  }

  protected loadModules(moduleType: symbol): void {
    if (this.container != null) {
      const modules: Module.ModuleIdentify[] = this.container.getAll<Module.ModuleIdentify>(moduleType);
      if (modules != null) {
        for (let module of modules) {
          module.load(this.container);
        }
      }
    }
  }

  protected _registerModules() {
    const m = this.registerModules();
    if ('registerModules' in m) {
      this.moduleProvider = m as T;
      this.modules = this.moduleProvider.registerModules();
    }
    else {
      this.modules = m as Module.ModuleEntity[];
    }

    if (this.modules != null && this.container != null) {
      for (let module of this.modules) {
        this.container.bind<Module.ModuleIdentify>(module.type).to(module.module);
      }
    }
  }

  protected initModules() {
    this._registerModules();
    if (this.modules != null) {
      const moduleTypes = this.getModuleTypes();
      for (let type of moduleTypes) {
        this.loadModules(type);
      }
    }
  }

  protected registerOthers(container: Container): void {
    container.bind<BootstrapperInterfaces.Bootstrapper<T>>(ServiceType.TYPE_BOOTSTRAPPER.BOOTSTRAPPER).toConstantValue(this);
  }

  public start(mainViewType: new () => React.Component): Container {
    this.initModules();
    this.registerOthers(this.container);
    Expo.registerRootComponent(mainViewType);
    return this.container;
  }
}
