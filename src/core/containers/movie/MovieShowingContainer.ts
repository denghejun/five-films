import { ReduxViewContainer, injectable, inject } from 'react-native-modular-bootstrapper'
import { ServiceType, Movie, Location, Common } from '@colorfulwindmill/five-films-interface'
import { Dispatch } from 'react-redux'
import { Permissions } from 'expo'
import { ListView } from 'react-native'

@injectable()
export class MovieShowingContainer extends ReduxViewContainer<any> {
  private timeId;
  constructor(
    @inject(ServiceType.TYPE_VIEW.MOVIE) view,
    @inject(ServiceType.TYPE_ACTION.MOVIE) private readonly action,
    @inject(ServiceType.TYPE_MOVIE.RECOMMEND) private readonly movieRecommandService: Movie.MovieRecommendService,
    @inject(ServiceType.TYPE_LOCAION.CITY_SEARCH) private readonly locationService: Location.LocationSearchService,
    @inject(ServiceType.TYPE_BROWSER.BROWSER) private readonly browserService: Common.BrowserService) {
    super(view.showing);
  }

  private getShowingMovies(state) {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    if (state.app.movie.showing.movies) {
      return dataSource.cloneWithRows(state.app.movie.showing.movies);
    } else {
      return dataSource;
    }
  }

  private getRecommendMovies() {
    return async (dispatch, getState) => {
      dispatch(this.action.movie.showing.fetch.start())
      // return this.locationService.getCurrentCityName().then(city => {
      const city = '成都';
      return this.movieRecommandService.getRecommendMovies({ city, mock: false, cache: true, cacheKey: city, cacheExpireMinutes: 8 * 60 })
        .then(response => {
          dispatch(this.action.movie.showing.fetch.success(response))
        })
        .catch((e: Common.Error<any>) => {
          dispatch(this.action.movie.showing.fetch.failed({ message: e.message }))
        })
      // }, (e: Common.Error<any>) => {
      //   dispatch(this.action.movie.showing.fetch.failed({ message: e.message }))
      // });
    }
  }

  private changeMovieItemFlip(index) {
    return (dispatch, getState) => {
      Promise.resolve(this.timeId).then(timeId => clearTimeout(timeId)).then(() => {
        this.timeId = setTimeout(() => {
          dispatch(this.action.movie.showing.movieItem.flip({ index }))
        }, 200)
      })
    }
  }

  protected MapStateToProps(initialState: any, ownProps: any): any {
    return {
      showingMovieDataSource: this.getShowingMovies(initialState),
      isLoading: initialState.app.movie.showing.isLoading,
      hasError: initialState.app.movie.showing.hasError,
      movieItemFlipStates: initialState.app.movie.showing.movieItemFlipStates,
      errorMessage: initialState.app.movie.showing.errorMessage
    }
  }

  protected MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any {
    return {
      onComponentDidMount: () => dispatch(this.getRecommendMovies()),
      onRefresh: () => dispatch(this.getRecommendMovies()),
      onMovieItemFlipped: index => dispatch(this.changeMovieItemFlip(index)),
      onBuyButtonPress: url => this.browserService.open(url),
      onPreviewButtonPress: url => this.browserService.open(url)
    }
  }
}
