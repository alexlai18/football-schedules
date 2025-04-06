// Simple example - may choose to implement this later on
class ServerError extends Error {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, ServerError.prototype);
    }
}