// import RNFetch from 'react-native-fetch-blob'
import APIOption from './api-option'
import RESTApiClient from './rest-api-client'
import { injectable } from 'inversify'

@injectable()
export default abstract class APIBase<T extends APIOption> extends RESTApiClient {
    protected option: T;
    protected abstract getAPIOption(): T;
    constructor() {
        super();
        this.option = this.getAPIOption();
    }

    private generateQueryParameters(request: any): string {
        let uri = '';
        Object.keys(request).forEach(key => {
            uri += '&' + key + '=' + request[key]
        })

        return uri.slice(1);
    }

    protected before(request: any): any {
        return request;
    }

    protected get<TRequest, TResponse>(request: TRequest): Promise<TResponse> {
        request = this.before && this.before(request);
        let uri = this.option.baseUri + '?' + this.generateQueryParameters(request);

        return fetch(encodeURI(uri), { method: 'GET' }).then(response => {
            return response.json();
        });
    }

    protected post<TRequest, TResponse>(request: TRequest): Promise<TResponse> {
        return this.get(request);
    }

    protected put<TRequest, TResponse>(request: TRequest): Promise<TResponse> {
        return this.get(request);
    }

    protected delete<TRequest, TResponse>(request: TRequest): Promise<TResponse> {
        return this.get(request);
    }
}
