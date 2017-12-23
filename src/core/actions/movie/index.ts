import { createActions } from 'redux-actions'
import { movieComingAction } from './MovieComingAction'
import { movieSearchAction } from './MovieSearchAction'
import { movieShowingAction } from './MovieShowingAction'

export const movieAction = createActions({
  MOVIE: {
    COMING: movieComingAction,
    SEARCH: movieSearchAction,
    SHOWING: movieShowingAction
  }
});
