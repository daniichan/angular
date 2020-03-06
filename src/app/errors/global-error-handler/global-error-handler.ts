import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import * as StackTrace from 'stacktrace-js';

import { UserService } from './../../core/user/user.service';

@Injectable()
export class GlobalErrorHandler implements  ErrorHandler {

    constructor(private injector: Injector) {}
    
    handleError(error: any): void {
        const location = this.injector.get(LocationStrategy);
        const url = location instanceof PathLocationStrategy ? location.path() : '';
        const message = error.message ? error.message : error.toString(); 
        const userService = this.injector.get(UserService);

        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                    .map(sf => sf.toString())
                    .join('\n');

                console.log(message);
                console.log(StackTrace);
                console.log({ message, url, userName: userService.getUserName(), stack: stackAsString })
            })
    }
}