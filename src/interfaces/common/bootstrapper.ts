import "reflect-metadata";
import { Container, inject, injectable } from 'inversify'
import { Module, ServiceType } from '@five-films/interfaces'
import * as React from 'react'
import * as Expo from 'expo';

@injectable()
export abstract class Bootstrapper {
  protected readonly container: Container = new Container();
  protected modules: Module.ModuleEntity[];
  protected abstract registerModules(): Module.ModuleEntity[];
  protected abstract registerMainView(): any;
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
    this.modules = this.registerModules();
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

  public start(): Container {
    this.initModules();
    Expo.registerRootComponent(this.registerMainView());
    return this.container;
  }
}
