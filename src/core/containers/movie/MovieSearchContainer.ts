import { ReduxViewContainer } from 'react-native-modular-bootstrapper'
import { injectable } from 'inversify'
import { Dispatch } from 'redux'
import { MovieSearchScreen } from '../../views'

@injectable()
export class MovieSearchContainer extends ReduxViewContainer<MovieSearchScreen> {
  constructor() {
    super(MovieSearchScreen);
  }

  protected MapStateToProps(initialState: any, ownProps: any): any { }
  protected MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any { }
}
