import { ReduxViewContainer, injectable, inject } from 'react-native-modular-bootstrapper'
import { ServiceType, Movie, Common } from '@colorfulwindmill/five-films-interface'
import { Dispatch } from 'react-redux'
import { Alert } from 'react-native'

@injectable()
export class MovieSearchContainer extends ReduxViewContainer<any> {
  constructor(
    @inject(ServiceType.TYPE_VIEW.MOVIE_SEARCH) view,
    @inject(ServiceType.TYPE_ACTION.MOVIE) private readonly action,
    @inject(ServiceType.TYPE_MOVIE.SEARCH) private readonly movieSearchService: Movie.MovieSearchService,
    @inject(ServiceType.TYPE_BROWSER.BROWSER) private readonly browserService: Common.BrowserService
  ) {
    super(view);
  }

  private search(name) {
    return (dispatch, getState) => {
      dispatch(this.action.movie.search.fetch.start({ q: name }));
      return this.movieSearchService.search({ q: name, mock: true })
        .then(response => {
          dispatch(this.action.movie.search.fetch.success(response));
        })
        .catch(e => {
          dispatch(this.action.movie.search.fetch.failed({ message: e.message }));
        })
    }
  }

  private openMoviePlayLink(links) {
    if (links && links.length > 0) {
      const keys = Object.keys(links);
      const { youku, tudou, qq, kumi, imgo } = links;
      const priorityLinks = [youku, tudou, qq, kumi, imgo];
      const firstPlaylink = priorityLinks.find(l => l != undefined && l != '')
        || keys.find(k => links[k] != undefined && links[k] != '');
      if (firstPlaylink) {
        this.browserService.open(firstPlaylink);
      } else {
        Alert.alert('No movie source found.');
      }
    } else {
      Alert.alert('No movie source found.');
    }
  }

  protected MapStateToProps(initialState: any, ownProps: any): any {
    return {
      isLoading: initialState.app.movie.search.isLoading,
      result: initialState.app.movie.search.data,
      hasError: initialState.app.movie.search.hasError,
      errorMessage: initialState.app.movie.search.errorMessage
    };
  }

  protected MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any {
    return {
      onSearch: name => dispatch(this.search(name)),
      onMoviePlayPress: links => this.openMoviePlayLink(links)
    };
  }
}
