export default class HttpError extends Error {
    code = '';

    constructor(message, code, id = null) {
        super(message, id);
        this.code = code;
    }
}
