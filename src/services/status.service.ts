import Status from "../models/status.model";

export class StatusService {

    private _status = new Status();

    // constructor() { }

    public get ok(): number {
        return this._status.ok;
    }

    public get error(): number {
        return this._status.error;
    }

}

export default StatusService;
