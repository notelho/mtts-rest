export class HttpError extends Error {

    readonly status: number;

    readonly name: string;

    constructor(status: number, name: string, message: string) {

        super(message);

        this.status = status;

        this.name = name;

    }

}

export default HttpError;