import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../environment/api';
import { Observable } from 'rxjs';
import { status } from '../interfaces/status';

@Injectable({ providedIn: 'root' })
export class StatusService {
    constructor(private httpClient: HttpClient) { }

    getStatus(): Observable<status> {
        return this.httpClient.get<status>(URL_API);
    }
}