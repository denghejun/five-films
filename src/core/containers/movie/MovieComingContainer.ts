import { ReduxViewContainer, injectable, inject } from 'react-native-modular-bootstrapper'
import { ServiceType, Movie } from '@colorfulwindmill/five-films-interface'
import { Dispatch } from 'react-redux'
import { movieAction as action } from '../../actions/movie'

@injectable()
export class MovieComingContainer extends ReduxViewContainer<any> {
  private recommendMovieResponse: Movie.MovieRecommendResponse;
  constructor(
    @inject(ServiceType.TYPE_VIEW.MOVIE_COMING) view,
    @inject(ServiceType.TYPE_MOVIE.RECOMMEND) private readonly movieRecommandService: Movie.MovieRecommendService
  ) {
    super(view);
  }

  getRecommendMovies() {
    return (dispatch, getState) => {
      dispatch(action['movie']['coming']['fetch']['start']())
      return this.movieRecommandService.getRecommendMovies({ city: '成都' })
        .then(response => {
          dispatch(action['movie']['coming']['fetch']['success'](response))
        })
        .catch(e => {
          dispatch(action['movie']['coming']['fetch']['failed']({ message: e.message }))
        })
    }
  }

  protected MapStateToProps(initialState: any, ownProps: any): any {
    return {
      state: initialState
    };
  }

  protected MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any {
    return {
      onComponentDidMount: () => dispatch(this.getRecommendMovies())
    };
  }
}
