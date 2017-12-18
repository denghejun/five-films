import { ReduxViewContainer, injectable } from 'react-native-modular-bootstrapper'
import { Dispatch } from 'redux'
import { MovieShowingScreen } from '../../views'

@injectable()
export class MovieShowingContainer extends ReduxViewContainer<MovieShowingScreen> {
  constructor() {
    super(MovieShowingScreen);
  }

  protected MapStateToProps(initialState: any, ownProps: any): any { }
  protected MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any { }
}
