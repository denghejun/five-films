import { injectable, inject, ReduxViewContainer } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { Dispatch } from 'react-redux'

@injectable()
export class AppContainer extends ReduxViewContainer<any> {
  constructor(
    @inject(ServiceType.TYPE_VIEW.APP) view,
    @inject(ServiceType.TYPE_CONTAINER.HOME_CONNECTED) private readonly HomeContainerConnectedView
  ) {
    super(view);
  }

  protected MapStateToProps(initialState: any, ownProps: any): any {
    return {
      HomeContainerConnectedView: this.HomeContainerConnectedView
    };
  }
  protected MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any {
    return {};
  }
}
