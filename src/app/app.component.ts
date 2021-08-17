import {Component} from '@angular/core';
import {Users} from "./models/Users";
import {Router} from "@angular/router";
import {AuthService} from "./services/auth-service.service";
import {Role} from "./models/Role";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'blog';
    private authService!: AuthService

    constructor(authService: AuthService) {
        this.authService = authService
    }

    public logout(): void{
        this.authService.logout()
    }
}
