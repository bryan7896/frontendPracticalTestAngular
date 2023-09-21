import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum ActionTypes {
    ApiError = '[global] ApiError',
    setCountry = '[global] setCountry',
    getCountry = '[global] getCountry',
    setFormData = '[global] setFormData',
}


export class ApiError implements Action {
    readonly type = ActionTypes.ApiError;
    constructor(public payload: { error: HttpErrorResponse }) { }
}

export class setCountry implements Action {
    readonly type = ActionTypes.setCountry;
    constructor(public payload: { countries: Array<any> }) { }
}
export class setFormData implements Action {
    readonly type = ActionTypes.setFormData;
    constructor(public payload: { formData: Object }) { }
}

export class getCountry implements Action {
    readonly type = ActionTypes.getCountry;
}

export type actions =
    ApiError
    | setCountry
    | setFormData
    | getCountry