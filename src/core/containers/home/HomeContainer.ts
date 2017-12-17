import { ReduxViewContainer } from 'react-native-modular-bootstrapper'
import { injectable, inject } from 'inversify'
import { Dispatch } from 'redux'
import { HomeScreen } from '../../views'
import { ServiceType } from '@colorfulwindmill/five-films-interface'

@injectable()
export class HomeContainer extends ReduxViewContainer<HomeScreen> {
  constructor( @inject(ServiceType.TYPE_VIEW.HOME) view) {
    super(view);
  }

  protected MapStateToProps(initialState: any, ownProps: any): any {
    return {};
  }
  protected MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any {
    return {};
  }
}
