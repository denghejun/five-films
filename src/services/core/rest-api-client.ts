export default abstract class RESTApiClient {
    protected abstract get<TRequest, TResponse>(request: TRequest): Promise<TResponse>;
    protected abstract post<TRequest, TResponse>(request: TRequest): Promise<TResponse>;
    protected abstract put<TRequest, TResponse>(request: TRequest): Promise<TResponse>;
    protected abstract delete<TRequest, TResponse>(request: TRequest): Promise<TResponse>;
}
