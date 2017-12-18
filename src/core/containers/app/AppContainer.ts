import { injectable, inject, ReduxViewContainer } from 'react-native-modular-bootstrapper'
import { Dispatch } from 'redux'
import { App } from '../../views'
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { store } from './Store'

@injectable()
export class AppContainer extends ReduxViewContainer<App> {

  @inject(ServiceType.TYPE_CONTAINER.HOME_CONNECTED) private HomeContainerConnected;

  constructor( @inject(ServiceType.TYPE_VIEW.APP) view) {
    super(view);
  }

  protected MapStateToProps(initialState: any, ownProps: any): any {
    return ({
      HomeContainerConnected: this.HomeContainerConnected
    });
  }
  protected MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any {
    return ({});
  }
}
