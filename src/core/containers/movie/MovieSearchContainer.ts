import { ReduxViewContainer, injectable, inject } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'
import { Dispatch } from 'react-redux'

@injectable()
export class MovieSearchContainer extends ReduxViewContainer<any> {
  constructor( @inject(ServiceType.TYPE_VIEW.MOVIE_SEARCH) view) {
    super(view);
  }

  protected MapStateToProps(initialState: any, ownProps: any): any {
    return {};
  }

  protected MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any {
    return {};
  }
}
