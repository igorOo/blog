
export class HttpResponse{
    private _status!: string
    private _data?: Object
    private _message?: string

    constructor(status: string, data?: Object, message?: string) {
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get data(): Object {
        // @ts-ignore
        return this._data;
    }

    set data(value: Object) {
        this._data = value;
    }

    get message(): string {
        // @ts-ignore
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }
}
