import { PAYLOAD_CREATOR_DEFAULT } from 'react-native-modular-bootstrapper'

export const movieComingAction = {
  FETCH: {
    START: PAYLOAD_CREATOR_DEFAULT,
    SUCCESS: PAYLOAD_CREATOR_DEFAULT,
    FAILED: PAYLOAD_CREATOR_DEFAULT
  },
  MOVIE_ITEM: {
    FLIP: PAYLOAD_CREATOR_DEFAULT
  }
}
