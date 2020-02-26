import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from './../user/user.service';
import { User } from '../user/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    
    user$: Observable<User>;
    user: User;

    constructor(userService: UserService) { 
        this.user$ = userService.getUser();
        this.user$.subscribe(u => this.user = u);
    }
}