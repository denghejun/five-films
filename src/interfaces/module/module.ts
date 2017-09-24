import { Container } from 'inversify'

export interface ModuleIdentify {
  load(container: Container): void;
}

export interface ModuleEntity {
  type: symbol;
  module: any;
}
