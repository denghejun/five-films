import { injectable, inject, ReduxReducer } from 'react-native-modular-bootstrapper'
import { ServiceType } from '@colorfulwindmill/five-films-interface'

export class MovieSearchReducer extends ReduxReducer {
  protected ProvideInitState(): any {
    return {
      isInit: true,
      isLoading: false,
      hasError: false,
      errorMessage: undefined,
      data: undefined,
      isOpenModal: false
    };
  }
  protected ProvideActionHandler(action): any {
    return {
      [action.movie.search.fetch.start]: (state, action) => {
        return Object.assign({}, state, {
          isInit: false,
          errorMessage: undefined,
          isLoading: true,
          isOpenModal: false,
          data: undefined
        });
      },
      [action.movie.search.fetch.success]: (state, action) => {
        return Object.assign({}, state, {
          isLoading: false,
          isOpenModal: true,
          hasError: false,
          errorMessage: undefined,
          data: action.payload.result
        });
      },
      [action.movie.search.fetch.failed]: (state, action) => {
        return Object.assign({}, state, {
          isLoading: false,
          isOpenModal: false,
          hasError: true,
          errorMessage: action.payload.message,
          data: undefined
        });
      },
      [action.movie.search.modal.open]: (state, action) => {
        return Object.assign({}, state, {
          isOpenModal: true
        });
      },
      [action.movie.search.modal.close]: (state, action) => {
        return Object.assign({}, state, {
          isOpenModal: false
        });
      }
    };
  }
}
