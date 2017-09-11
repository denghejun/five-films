import Expo from 'expo'
import merge from 'merge/merge'
import APIBase from '../core/api-base'
import APIOption from '../core/api-option'

export default class MovieBaseService extends APIBase<APIOption> {
    protected getAPIOption(): APIOption {
        return {
            apiKey: Expo.Constants.manifest.extra.api.movie.apiKey,
        } as APIOption;
    }

    protected before(request: any): any {
        return merge.recursive(true, {
            key: this.option.apiKey,
            dtype: 'json'
        }, request);
    }
}
