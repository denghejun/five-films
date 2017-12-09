import { APIBase, APIOption } from '../core'
import * as Expo from 'expo'
import merge from 'merge/merge'
import { Location } from '@five-films/interfaces'

export default class LocatonBaseService extends APIBase<APIOption> {
  protected getAPIOption() {
    return {
      apiKey: Expo.Constants.manifest.extra.api.location.apiKey,
      baseUri: Expo.Constants.manifest.extra.api.location.uri
    } as APIOption;
  }

  protected before(request: Location.LocationSearchRequest): Location.LocationSearchRequest {
    return merge(true, {
      ak: this.option.apiKey,
      output: 'json',
      pois: 0
    }, request);
  }
}
