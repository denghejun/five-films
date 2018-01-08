import { injectable, inject, ReduxViewContainer } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { Dispatch } from 'react-redux'

@injectable()
export class DrawerContentContainer extends ReduxViewContainer<any> {
  constructor(
    @inject(ServiceType.TYPE_VIEW.DRAWER) views
  ) {
    super(views.content);
  }

  protected MapStateToProps(initialState: any, ownProps: any): any {
    return {
    };
  }
  protected MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any {
    return {};
  }
}
