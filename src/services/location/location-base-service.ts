import { APIBase, APIOption } from '../core'
import Expo from 'expo'
import merge from 'merge/merge'
import { LocationSearchRequest } from './models'

export default class LocatonBaseService extends APIBase<APIOption> {
    protected getAPIOption() {
        return {
            apiKey: Expo.Constants.manifest.extra.api.location.apiKey,
            baseUri: Expo.Constants.manifest.extra.api.location.uri
        } as APIOption;
    }

    protected before(request: LocationSearchRequest): LocationSearchRequest {
        return merge(true, {
            ak: this.option.apiKey,
            output: 'json',
            pois: 0
        }, request);
    }
}
