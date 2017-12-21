import { ServiceContract } from 'react-native-modular-bootstrapper'
import ServiceModulesProvider from '@colorfulwindmill/five-films-service/module.config'
import { ContainersModule } from './src/core/containers/Module'
import { StoreModule } from './src/core/store/Module'
import { ViewsModule } from './src/core/views/Module'

export default class AppModuleProvider implements ServiceContract.ModuleProvider {
    public registerModules(): (new () => ServiceContract.Module)[] {
        return [
            ...new ServiceModulesProvider().registerModules(),
            ViewsModule,
            ContainersModule,
            StoreModule
        ];
    }
}
