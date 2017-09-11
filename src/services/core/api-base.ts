import RNFetch from 'react-native-fetch-blob'
import APIOption from './api-option'
import RESTApiClient from './rest-api-client'

export default abstract class APIBase<T extends APIOption> implements RESTApiClient {
    protected option: T;
    protected abstract getAPIOption(): T;
    constructor() {
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

    public get<TRequest, TResponse>(request: TRequest): Promise<TResponse> {
        request = this.before && this.before(request);
        let uri = this.option.baseUri + '?' + this.generateQueryParameters(request);
        return RNFetch.fetch('GET', encodeURI(uri))
            .then(response => response.json()) as Promise<TResponse>;
    }

    public post<TRequest, TResponse>(request: TRequest): Promise<TResponse> {
        return RNFetch.fetch('POST', encodeURI(this.option.baseUri))
            .then(response => response.json()) as Promise<TResponse>;
    }

    public put<TRequest, TResponse>(request: TRequest): Promise<TResponse> {
        return RNFetch.fetch('PUT', encodeURI(this.option.baseUri))
            .then(response => response.json()) as Promise<TResponse>;
    }

    public delete<TRequest, TResponse>(request: TRequest): Promise<TResponse> {
        return RNFetch.fetch('DELETE', encodeURI(this.option.baseUri))
            .then(response => response.json()) as Promise<TResponse>;
    }
}
