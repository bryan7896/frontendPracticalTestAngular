import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap, take, filter } from 'rxjs/operators';
import {
    HttpClient,
    HttpHeaders,
} from '@angular/common/http';
import * as _ from 'lodash';

export interface postConfig {
    useAuthHeaders?: boolean;
    setCreateTime?: boolean;
    token?: string;
}

export interface putConfig {
    useAuthHeaders?: boolean;
    setUpdateTime?: boolean;
    setDeleteTime?: boolean;
    token?: string;
}

export interface getConfig {
    useAuthHeaders?: boolean;
    token?: string;
    count?: boolean;
}

export interface deleteConfig {
    useAuthHeaders?: boolean;
    token?: string;
}
import { Store } from '@ngrx/store';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    private ENV = environment.apiUrl;

    constructor(public http: HttpClient) { }

    public get(): Observable<any> {
        return this.http.get(`${this.ENV}v3.1/all/`);
    }
}
