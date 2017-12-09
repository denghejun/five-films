export default class ErrorWithContext<TContext> extends Error {
    public context: TContext;
    constructor(message: string, context: TContext) {
        super(message);
        this.context = context;
    }
}
