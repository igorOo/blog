import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Users} from "../models/Users";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Role} from "../models/Role";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<Users>
    public currentUser: Observable<Users>

    public isAuthenticated: boolean = false
    public isAdmin: boolean = false
    public isUser: boolean = false
    public isAuthor: boolean = false

    constructor(private http: HttpClient) {
        let bean: string | null = localStorage.getItem('bean')
        if (bean){
            bean = JSON.parse(atob(bean))
        }
        // @ts-ignore
        this.currentUserSubject = new BehaviorSubject<Users>(bean);
        this.currentUser = this.currentUserSubject.asObservable();

        this.currentUser.subscribe(user => {
            let dateExpire = Date.parse(user.expires)
            if (user && user.token && dateExpire > new Date().getTime()) {
                this.isAuthenticated = true
            }
            if (user && user.roles.indexOf("ADMIN") !== -1 && dateExpire > new Date().getTime()){
                this.isAdmin = true
            }
            if (user && user.roles.indexOf("USER") !== -1 && dateExpire > new Date().getTime()){
                this.isUser = true
            }
            if (user && user.roles.indexOf("AUTHOR") !== -1 && dateExpire > new Date().getTime()){
                this.isAuthor = true
            }
        })
    }

    public get currentUserValue(): Users {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(environment.restUrl+"/api/v1/login", { email, password })
            .pipe(map(user => {
                // пользователь залогинился и получил токен
                if (user && user.token) {
                    localStorage.removeItem("bean")
                    // сохраняем всю полученную инфу от сервера
                    localStorage.setItem('bean', btoa(JSON.stringify(user)));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // Удаляем всю сохраненную информацию о пользователе и разлогиниваемся
        localStorage.removeItem('bean');
        // @ts-ignore
        this.currentUserSubject.next(null);
    }

}
