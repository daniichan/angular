import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['menu.component.scss']
})
export class MenuComponent {

    isShow:boolean = false;

    toggle() {
        this.isShow = !this.isShow;
    }
}