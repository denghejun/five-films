export default interface RESTApiClient {
    get<TRequest, TResponse>(request: TRequest): Promise<TResponse>;
    post<TRequest, TResponse>(request: TRequest): Promise<TResponse>;
    put<TRequest, TResponse>(request: TRequest): Promise<TResponse>;
    delete<TRequest, TResponse>(request: TRequest): Promise<TResponse>;
}
