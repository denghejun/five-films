import { createStore, applyMiddleware, Store, Middleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { ReduxViewContainer, injectable, inject, ResourceType, ReduxStore } from 'react-native-modular-bootstrapper'

@injectable()
export class AppStore extends ReduxStore {
  protected ProvideMiddleware(): Middleware[] {
    return [thunk, logger];
  }
}
