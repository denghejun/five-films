import { ReduxViewContainer, injectable } from 'react-native-modular-bootstrapper'
import { Dispatch } from 'redux'
import { MovieComingScreen } from '../../views'

@injectable()
export class MovieComingContainer extends ReduxViewContainer<MovieComingScreen> {
  constructor() {
    super(MovieComingScreen);
  }

  protected MapStateToProps(initialState: any, ownProps: any): any { }
  protected MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any { }
}
