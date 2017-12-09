import * as Expo from 'expo'
import * as merge from 'merge/merge'
import { APIBase, APIOption } from '../core'
import { injectable } from 'inversify'

@injectable()
export default abstract class MovieBaseService extends APIBase<APIOption> {
  protected getAPIOption(): APIOption {
    return {
      baseUri: this.getBaseUri(),
      apiKey: Expo.Constants.manifest.extra.api.movie.apiKey,
    } as APIOption;
  }

  protected abstract getBaseUri(): string;

  protected before(request: any): any {
    return merge.recursive(true, {
      key: this.option.apiKey,
      dtype: 'json'
    }, request);
  }
}
