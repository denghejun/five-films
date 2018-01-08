import { injectable, inject, ReduxViewContainer } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { Dispatch } from 'react-redux'

@injectable()
export class UserLoginContainer extends ReduxViewContainer<any> {
  constructor(
    @inject(ServiceType.TYPE_VIEW.USER) view
  ) {
    super(view.userLogin);
  }

  protected MapStateToProps(initialState: any, ownProps: any): any {
    return {
    };
  }
  protected MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any {
    return {};
  }
}
