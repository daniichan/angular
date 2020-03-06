import { ServerLog } from './server-log';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const API = environment.serverLogUrl;

@Injectable({ providedIn: 'root' })
export class ServerLogService {

    constructor(private httpClient: HttpClient) {}

    log(serverlog: ServerLog) {
        return this.httpClient.post(API + '/infra/log', serverlog);
    }
}